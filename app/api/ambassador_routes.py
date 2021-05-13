
from flask import Blueprint
from flask_login import current_user, login_required
import json


from app.models import db, Event, Location, Ambassador, User, Review, PhotoGallery, EventCalendar

ambassador_routes = Blueprint('ambassadors', __name__)


@ambassador_routes.route('/')
# @login_required
def ambassadors():
    if current_user.is_authenticated:
        ambassador = db.session.query(Ambassador).filter(
            Ambassador.user_id ==  current_user.id).first()

        if(ambassador):
            events = db.session.query(Event.id).filter(Event.ambassador_id == current_user.id).all()
            event_ids = [event[0]for event in events]


            event_keys = ['event_id', 'title', 'description',
                  'region', 'country', 'firstname']
            event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Event.id.in_(event_ids), Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()

            ambassador_events_info = {"ambassador_events_info": [
                dict(zip(event_keys, event)) for event in event_values]}

            photo_gallery_keys = ['photo_id', 'event_id',
                                'photo_description', 'url']
            photo_gallery_values = db.session.query(PhotoGallery.id, PhotoGallery.event_id, PhotoGallery.description, PhotoGallery.url).filter(
                PhotoGallery.event_id.in_(event_ids)).all()
            photo_gallery = {"photo_gallery": [
                dict(zip(photo_gallery_keys, photo)) for photo in photo_gallery_values]}

            event_calendar_keys = ['event_calendar_id', 'event_id', 'date', 'time']
            event_calendar_values = db.session.query(EventCalendar.id, EventCalendar.event_id, EventCalendar.date, EventCalendar.time).filter(
                EventCalendar.event_id.in_(event_ids)).all()
            events_calendar = {"event_calendar": [dict(
                zip(event_calendar_keys, event_time)) for event_time in event_calendar_values]}

            review_keys = ['review_id', 'event_id',
                        'user_name', 'rating', 'comment', 'created_at']
            review_values = db.session.query(Review.id, Review.event_id, User.user_name, Review.rating, Review.comment, Review.date_created).filter(
                Review.event_id.in_(event_ids), Review.user_id == User.id).all()
            reviews = {"reviews": [dict(zip(review_keys, review))
                                for review in review_values]}

            events = {'events': [ambassador_events_info,
                                photo_gallery, events_calendar, reviews]}
            return json.dumps(events,  sort_keys=True, default=str)


@ambassador_routes.route('/<string:ambassador_name>')
@login_required
def ambassador(ambassador_name):
    sensitive_info = db.session.query(User.phone_number, User.email).filter(
        User.ambassador_name == ambassador_name).first()
    keys = ['phone_number', 'email']
    ambassador_dict = dict(zip(keys, sensitive_info))
    return(ambassador_dict)




