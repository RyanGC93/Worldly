from flask import Blueprint
from flask_login import login_required
from app.models import db, Event, Location

search_routes = Blueprint('search', __name__)

# Gets All the events
@search_routes.route('/')
@login_required
def Events():
    x = db.session.query(Location.region,Event.id, Event.title).filter(Location.event_id == Event.id).limit(30)
    keys = ['region','event_id', 'title']
    search = {"search": [dict(zip(keys,values)) for values in x]}
    return search
