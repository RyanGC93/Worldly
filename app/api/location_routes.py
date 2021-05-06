from flask import Blueprint, jsonify, request
import json
from app.models import location
from flask_login import current_user, login_required
location_routes = Blueprint('location', __name__)

@location_routes.route('/', methods=['POST'])
def new_event():
    if current_user.is_authenticated:
 

        data = request.get_json()
        description = data['description']
        title = data['title']
        cost = data['cost']
        new_event = Event(ambassador_id=user_ambassador_id, description=description, title=title,
                        cost=cost)
        db.session.add(new_event)
        db.session.commit()
        return(new_event.to_dict())
