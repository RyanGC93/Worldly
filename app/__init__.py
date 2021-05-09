import os, json, boto3
from flask import Flask, request, redirect, url_for,render_template, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.photo_routes import photo_routes
from .api.auth_routes import auth_routes
from .api.event_routes import event_routes
from .api.review_routes import review_routes
from .api.location_routes import location_routes
from .api.ambassador_routes import ambassador_routes
from .api.search_routes import search_routes
from .api.event_calendar_routes import event_calendar_routes

from .seeds import seed_commands
from .queries import query_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)
app.cli.add_command(query_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(ambassador_routes, url_prefix='/api/ambassadors')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(event_routes, url_prefix='/api/events')
app.register_blueprint(photo_routes, url_prefix='/api/photos')
app.register_blueprint(review_routes, url_prefix='/api/reviews')
app.register_blueprint(search_routes, url_prefix='/api/search')
app.register_blueprint(location_routes, url_prefix='/api/location')
app.register_blueprint(event_calendar_routes, url_prefix='/api/calendar')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any 
# request made over http is redirected to https.
# Well.........


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


@app.route('/sign_s3/')
def sign_s3():
    S3_BUCKET = os.environ.get('S3_BUCKET')

    file_name = request.args.get('file_name')
    file_type = request.args.get('file_type')
    # s3 = boto3.client('s3', config=Config(
    #     signature_version='s3v4', region_name="us-east-2"))
    s3 = boto3.client('s3')
    
    presigned_post = s3.generate_presigned_post(
        Bucket=S3_BUCKET,
        Key=file_name,
        Fields={"acl": "public-read", "Content-Type": file_type},
        Conditions=[
            {"acl": "public-read"},
            {"Content-Type": file_type}
        ],
    )
    return json.dumps({
        'data': presigned_post,
        'url': 'https://%s.s3.amazonaws.com/' % (S3_BUCKET)
    })
