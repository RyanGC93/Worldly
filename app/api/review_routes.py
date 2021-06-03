from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db
from sqlalchemy import exc

review_routes = Blueprint('reviews', __name__)

# Gets All the Reviews
@review_routes.route('/')
@login_required
def reviews():
    try:
        keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
        events = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()
        return {"events": [dict(zip(keys,event)) for event in events]}
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Get Reviews Please Try again']}, 500