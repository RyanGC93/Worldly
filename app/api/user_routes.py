from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    if current_user.is_authenticated:
        keys = ["ambassador_id", "current_user_id"]   
        ambassador= Ambassador.query.filter(Ambassador.user_id == current_user.id).first()
        if(ambassador): 
            keys = ["user_id", "user_first_name", "user_last_name", "user_user_name","user_email","user_bio", "user_milage", "ambassador_id"]
            user = db.session.query(User.id, User.first_name, User.last_name, User.user_name, User.email, User.bio, User.mileage, Ambassador.id).filter(Ambassador.user_id == User.id).first()
            user_dict = {"user": [dict(zip(keys,value)) for value in user]}
            return user_dict
            
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