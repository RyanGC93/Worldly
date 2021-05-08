from flask import Blueprint, request
# import json
from app.models import db,EventCalendar
from flask_login import login_required
from sqlalchemy import exc
event_calendar_routes = Blueprint('event_calendars', __name__)


#! event_id	date	time
@event_calendar_routes.route('/', methods=['POST'])
@login_required
def new_event_calendar():
    try: 
        data = request.get_json()
        print(data)
        event_id = data['eventId']
        date = data['date']
        time = data['time']

        new_event_calendar = EventCalendar(event_id=event_id, date=date, time=time)
        db.session.add(new_event_calendar)
        db.session.commit()
        return new_event_calendar.to_dict()
    except exc.SQLAlchemyError as e:
        print('Creating Event Calendar Error')
        print(type(e))
        return {'errors': ['Could not create Calendar Event Please Try again']}, 500
# DELETES USER PHOTO
@event_calendar_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_calendar(id):
    try: 
        event_calendar = EventCalendar.query.filter(id == EventCalendar.id).first()
        db.session.delete(event_calendar)
        db.session.commit()
        return 'Calendar Deleted'
    except exc.SQLAlchemyError as e:
        print('Deleting Calendar Error')
        print(type(e))
        return {'errors': ['Cannot Edit Calendar Please Try again']}, 500

# Edit question
@event_calendar_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_repo(id):
    try: 
        data = request.get_json()
        edit_repo = EventCalendar.query.get(id)
        edit_repo.date = data['date']
        db.session.commit()
        return edit_repo.to_dict()
    except exc.SQLAlchemyError as e:
        print('Editing Photo Error')
        print(type(e))
        return {'errors': ['Cannot Edit Photo Please Try again']}, 500