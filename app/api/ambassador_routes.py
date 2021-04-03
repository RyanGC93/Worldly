from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, Ambassador

ambassador_routes = Blueprint('ambassadors', __name__)


@ambassador_routes.route('/')
@login_required
def ambassadors():
    ambassadors = User.query.all()
    return {"ambassadors": [ambassador.to_dict() for ambassador in ambassadors]}


@ambassador_routes.route('/<string:ambassador_name>')
@login_required
def ambassador(ambassador_name):
    sensitive_info = db.session.query(User.phone_number, User.email).filter(
        User.ambassador_name == ambassador_name).first()
    keys = ['phone_number', 'email']
    ambassador_dict = dict(zip(keys,sensitive_info)) 
    return(ambassador_dict)