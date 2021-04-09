from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Review

search_routes = Blueprint('searchs', __name__)

# Gets All the events
@search_routes.route('/<string:query>')
@login_required
def Events():
    
    # Search the Events base off Title
    keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    events = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all();
    return {"events": [dict(zip(keys,event)) for event in events]}

    # Search the Events base off location
    keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    events = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all();
    return {"events": [dict(zip(keys,event)) for event in events]}

