from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<string:user_name>')
@login_required
def user(user_name):
    sensitive_info = db.session.query(User.phone_number, User.email).filter(
        User.user_name == user_name).first()
    keys = ['phone_number', 'email']
    user_dict = dict(zip(keys,sensitive_info)) 
    return(user_dict)