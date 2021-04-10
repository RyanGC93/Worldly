from flask import Blueprint, jsonify
import json
from flask_login import login_required
from app.models import db, Event, Location, Ambassador, User, Review, PhotoGallery, EventCalendar, BookingCalendar

event_routes = Blueprint('events', __name__)

# Gets All the events
@event_routes.route('/<string:param>')
@login_required
def events(param):
    
    if param == 'all':
        events = db.session.query(Event.id, Event.title).all() 
        event_ids = [event[0]for event in events]

    else:
        # Gets the events by country
        events = db.session.query(Location.event_id, Location.region).filter(Location.region == param, Location.event_id == EventCalendar.event_id).all() 
        event_ids = [event[0]for event in events]

    event_keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Event.id.in_(event_ids), Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()
    events_info = {"events_info": [dict(zip(event_keys,event)) for event in event_values]}
    
    
    photo_gallery_keys = ['photo_id','event_id','photo_description','photo_url']
    photo_gallery_values = db.session.query(PhotoGallery.id,PhotoGallery.event_id,PhotoGallery.description,PhotoGallery.url).filter(PhotoGallery.event_id.in_(event_ids)).all()
    photo_gallery = {"photo_gallery": [dict(zip(photo_gallery_keys,photo)) for photo in photo_gallery_values]}    
    
    event_calendar_keys = ['event_calendar_id','event_id', 'date', 'time']
    event_calendar_values = db.session.query(EventCalendar.id,EventCalendar.event_id,EventCalendar.date,EventCalendar.time).filter(EventCalendar.event_id.in_(event_ids)).all()
    events_calendar = {"event_calendar": [dict(zip(event_calendar_keys,event_time)) for event_time in event_calendar_values]}    
    
    review_keys = ['review_id', 'event_id', 'user_name', 'rating', 'comment', 'created_at']
    review_values = db.session.query(Review.id,Review.event_id,User.user_name,Review.rating,Review.comment, Review.date_created).filter(Review.event_id.in_(event_ids), Review.user_id == User.id).all()
    reviews = {"reviews": [dict(zip(review_keys,review)) for review in review_values]}

    events = {'events':[events_info,photo_gallery,events_calendar,reviews]} 
    return json.dumps(events,  sort_keys=True, default=str)

@event_routes.route('/user/<string:user>')
@login_required
def user_events(user):
    user = db.session.query(User.user_name, User.id).filter( User.user_name == user).first()


    event_keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname' , 'location_longitude', 'location_latitude']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name,  Location.longitude, Location.latitude).filter(BookingCalendar.user_id == user[1], BookingCalendar.timeslot == EventCalendar.id, EventCalendar.event_id == Event.id, Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()

    event_ids = [event[0]for event in event_values]
    
    print(event_ids)
                                                                                                   
    user_events_info = {"user_events_info": [dict(zip(event_keys,event)) for event in event_values]}
    
    photo_gallery_keys = ['photo_id','event_id','photo_description','photo_url']
    photo_gallery_values = db.session.query(PhotoGallery.id,PhotoGallery.event_id,PhotoGallery.description,PhotoGallery.url).filter(PhotoGallery.event_id.in_(event_ids)).all()
    photo_gallery = {"photo_gallery": [dict(zip(photo_gallery_keys,photo)) for photo in photo_gallery_values]}    
    
    event_calendar_keys = ['event_calendar_id','event_id', 'date', 'time']
    event_calendar_values = db.session.query(EventCalendar.id,EventCalendar.event_id,EventCalendar.date,EventCalendar.time).filter(EventCalendar.event_id.in_(event_ids)).all()
    events_calendar = {"event_calendar": [dict(zip(event_calendar_keys,event_time)) for event_time in event_calendar_values]}    
    
    review_keys = ['review_id', 'event_id', 'user_name', 'rating', 'comment', 'created_at']
    review_values = db.session.query(Review.id,Review.event_id,User.user_name,Review.rating,Review.comment, Review.date_created).filter(Review.event_id.in_(event_ids), Review.user_id == User.id).all()
    reviews = {"reviews": [dict(zip(review_keys,review)) for review in review_values]}

    events = {'events':[user_events_info,photo_gallery,events_calendar,reviews]} 
    return json.dumps(events,  sort_keys=True, default=str)



@event_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
