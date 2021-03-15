from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Event, Location, User, Ambassador

event_routes = Blueprint('events', __name__)

# Gets All the events
@event_routes.route('/')
@login_required
def events():
    keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    events = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all() 
    return {"events": [dict(zip(keys,event)) for event in events]}



@event_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
