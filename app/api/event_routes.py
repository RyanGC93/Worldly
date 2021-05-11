
from flask import Blueprint, request
import json
from app.models import db, Event, Location, Ambassador, User, Review, PhotoGallery, EventCalendar, BookingCalendar
from flask_login import current_user, login_required
event_routes = Blueprint('events', __name__)


# Gets A single Event info
@event_routes.route('/bookings/<int:eventId>')
@login_required
def single_event(eventId):

    event_keys = ['event_id', 'title', 'description',
                  'region', 'country', 'firstname']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(
        Event.id == eventId, Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).first()
    zipped = dict(zip(event_keys, event_values))

    events_info = {"events_info": zipped}

    photo_gallery_keys = ['photo_id', 'event_id',
                          'photo_description', 'url']
    photo_gallery_values = db.session.query(PhotoGallery.id, PhotoGallery.event_id,
                                            PhotoGallery.description, PhotoGallery.url).filter(PhotoGallery.event_id == eventId).all()
    photo_gallery = {"photo_gallery": [
        dict(zip(photo_gallery_keys, photo)) for photo in photo_gallery_values]}

    event_calendar_keys = ['event_calendar_id', 'event_id', 'date', 'time']
    event_calendar_values = db.session.query(EventCalendar.id, EventCalendar.event_id,
                                             EventCalendar.date, EventCalendar.time).filter(EventCalendar.event_id == eventId).all()
    events_calendar = {"event_calendar": [dict(
        zip(event_calendar_keys, event_time)) for event_time in event_calendar_values]}

    review_keys = ['review_id', 'event_id',
                   'user_name', 'rating', 'comment', 'created_at']
    review_values = db.session.query(Review.id, Review.event_id, User.user_name, Review.rating, Review.comment,
                                     Review.date_created).filter(Review.event_id == eventId, Review.user_id == User.id).all()
    reviews = {"reviews": [dict(zip(review_keys, review))
                           for review in review_values]}

    events = {'events': [events_info, photo_gallery, events_calendar, reviews]}
    return json.dumps(events,  sort_keys=True, default=str)


# Gets All the events
@event_routes.route('/<string:param>')
# @login_required
def events(param):

    if param == 'all':
        events = db.session.query(Event.id, Event.title).all()
        event_ids = [event[0]for event in events]

    else:
        query_dict = {
            "africa": "Africa",
            "europe": "Europe",
            "asia": "Asia",
            "southamerica": "South America",
            "northamerica": "North America",
            "latinamerica": "Latin America"
        }
        query_term = query_dict.get(param)
        
        events = db.session.query(Location.event_id, Location.region).filter(
            Location.region == query_term, Location.event_id == EventCalendar.event_id).all()
        event_ids = [event[0]for event in events]

    event_keys = ['event_id', 'title', 'description',
                  'region', 'country', 'firstname']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(
        Event.id.in_(event_ids), Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()
    events_info = {"events_info": [
        dict(zip(event_keys, event)) for event in event_values]}

    photo_gallery_keys = ['photo_id', 'event_id',
                          'photo_description', 'photo_url']
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

    events = {'events': [events_info, photo_gallery, events_calendar, reviews]}
    return json.dumps(events,  sort_keys=True, default=str)

# ! Post Request
@event_routes.route('/', methods=['POST'])
def new_event():
    id = 30
    if current_user.is_authenticated:
        ambassador = Ambassador.query.filter(
            Ambassador.user_id == current_user.id).first()

    if(ambassador):
        ambassador_dict = ambassador.to_dict()
        user_ambassador_id = ambassador_dict.get('ambassador_id')
    data = request.get_json()
    description = data['description']
    title = data['title']
    cost = data['cost']
    new_event = Event(id=id,ambassador_id=user_ambassador_id, description=description, title=title,
                      cost=cost)
    db.session.add(new_event)
    db.session.commit()
    id+=1
    return(new_event.to_dict())


# TODO Redo the routing of the
@event_routes.route('/user')
@login_required
def user_events():

    event_keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname',
                  'date', 'time', 'location_longitude', 'location_latitude', 'booking_id']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name, EventCalendar.date, EventCalendar.time, Location.longitude, Location.latitude, BookingCalendar.id).filter(
        BookingCalendar.user_id == current_user.id, BookingCalendar.timeslot == EventCalendar.id, EventCalendar.event_id == Event.id, Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()

    event_ids = [event[0]for event in event_values]

    user_events_info = {"user_events_info": [
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

    events = {'events': [user_events_info,
                         photo_gallery, events_calendar, reviews]}
    return json.dumps(events,  sort_keys=True, default=str)


# DELETES USER EVENT BOOKINg
# @event_routes.route('/user/<int:id>', methods=['DELETE'])
# @login_required
# def delete_booking(id):
#     print(id, 'saddasdsa')
#     booking = BookingCalendar.query.filter(id == BookingCalendar.id).first()

#     db.session.delete(booking)
#     db.session.commit()
#     return 'Booking Deleted'

# DELETES EVENT
@event_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_event(id):
    print(id, 'saddasdsa')
    event = Event.query.filter(id == Event.id).first()

    db.session.delete(event)
    db.session.commit()
    return 'Booking Deleted'