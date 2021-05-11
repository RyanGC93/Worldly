from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db

review_routes = Blueprint('reviews', __name__)

# Gets All the events
@review_routes.route('/')
@login_required
def reviews():
    keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    events = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()
    return {"events": [dict(zip(keys,event)) for event in events]}
