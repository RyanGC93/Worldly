from flask import Blueprint, jsonify, request
import json
from app.models import db,Location
from flask_login import current_user, login_required
location_routes = Blueprint('location', __name__)

@location_routes.route('/', methods=['POST'])
def new_location():
    if current_user.is_authenticated:
        print('gfd')

        data = request.get_json()
        print(data)
        event_id = data['id']
        longitude = data['longitude']
        latitude = data['latitude']
        country = data['country']
        region = data['region']

        new_location = Location(event_id=event_id, longitude=longitude, latitude=latitude,
                        country=country,region=region)
        db.session.add(new_location)
        db.session.commit()
        return new_location.to_dict()
