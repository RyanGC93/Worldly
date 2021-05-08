from flask import Blueprint, request
# import json
from app.models import db,PhotoGallery
from flask_login import login_required
from sqlalchemy import exc
photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/', methods=['POST'])
@login_required
def new_photo():
    try: 
        data = request.get_json()
        print(data)
        event_id = data['eventId']
        description = data['description']
        url = data['url']

        new_photo = PhotoGallery(event_id=event_id, description=description, url=url)
        db.session.add(new_photo)
        db.session.commit()
        return new_photo.to_dict()
    except exc.SQLAlchemyError as e:
        print('Deleting Photo Error')
        print(type(e))
        return {'errors': ['Cannot Edit Photo Please Try again']}, 500
# DELETES USER PHOTO
@photo_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_booking(id):
    try: 
        photo = PhotoGallery.query.filter(id == PhotoGallery.id).first()
        db.session.delete(photo)
        db.session.commit()
        return 'Booking Deleted'
    except exc.SQLAlchemyError as e:
        print('Deleting Photo Error')
        print(type(e))
        return {'errors': ['Cannot Edit Photo Please Try again']}, 500

# Edit question
@photo_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_repo(id):
    try: 
        data = request.get_json()
        edit_repo = PhotoGallery.query.get(id)
        edit_repo.description = data['description']
        db.session.commit()
        return edit_repo.to_dict()
    except exc.SQLAlchemyError as e:
        print('Editing Photo Error')
        print(type(e))
        return {'errors': ['Cannot Edit Photo Please Try again']}, 500