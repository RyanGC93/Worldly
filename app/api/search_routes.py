from flask import Blueprint
from flask_login import login_required
from app.models import db, Event, Location
from sqlalchemy import exc

search_routes = Blueprint('search', __name__)

# Gets 30 Events for Search
@search_routes.route('/')
@login_required
def Events():
    try:
        x = db.session.query(Location.region,Event.id, Event.title).filter(Location.event_id == Event.id).limit(30)
        keys = ['region','event_id', 'title']
        search = {"search": [dict(zip(keys,values)) for values in x]}
        return search
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Get Events for Search, Please Try again']}, 500