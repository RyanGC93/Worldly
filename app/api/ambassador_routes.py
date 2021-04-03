from flask import Blueprint, jsonify
from flask_login import current_user, login_required

from app.models import db, Event, Location, Ambassador, User, Review, PhotoGallery, EventCalendar, BookingCalendar

ambassador_routes = Blueprint('ambassadors', __name__)


@ambassador_routes.route('/')
# @login_required
def ambassadors():
    print(''' 
          
          
          
          
          
          
          
          
          
          
          ''')
    # ambassadors = User.query.all()
    # return {"ambassadors": [ambassador.to_dict() for ambassador in ambassadors]}
    if current_user.is_authenticated:
        ambassador= Ambassador.query.filter(Ambassador.user_id == current_user.id).first()
        if(ambassador):
            ambassador_dict = ambassador.to_dict()
            ambassador_id = ambassador_dict.get('ambassador_id')
            print(ambassador_dict)
            print('----------',ambassador_dict.get('ambassador_id'))
            print('sdaaaaaaaaaaaaaaaaaaaaaaaa') 
            events = db.session.query(Location.event_id, Location.region).filter( Location.event_id == EventCalendar.event_id, Event.ambassador_id == ambassador_id).all() 
            event_ids = [event[0]for event in events]
            print(event_ids)
                        
        if not(ambassador):
            return  {'errors': ['Unauthorized User']}, 403  
    return {'errors': ['Unauthorized']}, 401


@ambassador_routes.route('/<string:ambassador_name>')
@login_required
def ambassador(ambassador_name):
    sensitive_info = db.session.query(User.phone_number, User.email).filter(
        User.ambassador_name == ambassador_name).first()
    keys = ['phone_number', 'email']
    ambassador_dict = dict(zip(keys,sensitive_info)) 
    return(ambassador_dict)