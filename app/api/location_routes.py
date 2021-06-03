from flask import Blueprint, request
from app.models import db,Location
from flask_login import current_user
from sqlalchemy import exc

location_routes = Blueprint('location', __name__)

@location_routes.route('/', methods=['POST'])
def new_location():
    if current_user.is_authenticated:
        try:
            data = request.get_json()
            print(data)
            event_id = data['id']
            longitude = data['longitude']
            latitude = data['latitude']
            country = data['country']
            region = data['region']

            new_location = Location(event_id=event_id, longitude=longitude, latitude=latitude,country=country,region=region)
            db.session.add(new_location)
            db.session.commit()
            return new_location.to_dict()
        except exc.SQLAlchemyError as e:
            print(type(e))
            return {'errors': ['Cannot Create New Location Please Try again']}, 500