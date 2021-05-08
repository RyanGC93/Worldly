from flask import Blueprint, jsonify, request
import json
from app.models import db,PhotoGallery
from flask_login import current_user, login_required
photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/', methods=['POST'])
def new_photo():
    if current_user.is_authenticated:
        data = request.get_json()
        print(data)
        event_id = data['eventId']
        description = data['description']
        url = data['url']


        new_photo = PhotoGallery(event_id=event_id, description=description, url=url)
        db.session.add(new_photo)
        db.session.commit()
        return new_photo.to_dict()


# DELETES USER PHOTO
@photo_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_booking(id):
    photo = PhotoGallery.query.filter(id == PhotoGallery.id).first()
    db.session.delete(photo)
    db.session.commit()
    return 'Booking Deleted'
