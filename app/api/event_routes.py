from flask import Blueprint, jsonify
import json
from flask_login import login_required
from app.models import db, Event, Location, Ambassador, User, Review, PhotoGallery, EventCalendar, BookingCalendar

event_routes = Blueprint('events', __name__)

# Gets All the events
@event_routes.route('/')
@login_required
def events():
    
    # Gets the events by country
    region_param ='Africa'
    events = db.session.query(Location.event_id, Location.region).filter(Location.region == region_param, Location.event_id == EventCalendar.event_id, EventCalendar.date >= '2021-04-01').all() 
    event_ids = [event[0]for event in events]
    # print(event_ids) # ALL EVENT IDS

    event_keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Event.id.in_(event_ids), Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()
    events_info = {"events_info": [dict(zip(event_keys,event)) for event in event_values]}
    
    
    photo_gallery_keys = ['photo_id','event_id','photo_description','photo_url']
    photo_gallery_values = db.session.query(PhotoGallery.id,PhotoGallery.event_id,PhotoGallery.description,PhotoGallery.url).filter(PhotoGallery.event_id.in_(event_ids)).all()
    photo_gallery = {"photo_gallery": [dict(zip(photo_gallery_keys,photo)) for photo in photo_gallery_values]}    
    # print(photos_gallery) 
    
    event_calendar_keys = ['event_calendar_id','event_id', 'date', 'time']
    event_calendar_values = db.session.query(EventCalendar.id,EventCalendar.event_id,EventCalendar.date,EventCalendar.time).filter(EventCalendar.event_id.in_(event_ids)).all()
    events_calendar = {"event_calendar": [dict(zip(event_calendar_keys,event_time)) for event_time in event_calendar_values]}    
    # print(events_calendar) 
    
    review_keys = ['review_id', 'event_id', 'user_name', 'rating', 'comment', 'created_at']
    review_values = db.session.query(Review.id,Review.event_id,User.user_name,Review.rating,Review.comment, Review.date_created).filter(Review.event_id.in_(event_ids), Review.user_id == User.id).all()
    reviews = {"reviews": [dict(zip(review_keys,review)) for review in review_values]}
    # print(reviews) 

    events = {'events':[events_info,photo_gallery,events_calendar,reviews]} 
    # print(events)
    return json.dumps(events,  sort_keys=True, default=str)

@event_routes.route('/user/<string:user>')
@login_required
def user_events(user):
    user = db.session.query(User.user_name, User.id).filter( User.user_name == user).first()
    # event_ids = [event[0]for event in events]
    # # print(event_ids) # ALL EVENT IDS
    print(user[1])

    event_keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname' ,'date','time', 'location_longitude', 'location_latitude']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name, EventCalendar.date, EventCalendar.time, Location.longitude, Location.latitude).filter(BookingCalendar.user_id == user[1], BookingCalendar.timeslot == EventCalendar.id, EventCalendar.event_id == Event.id, Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all()
    print('''
          sads
          ds
          sd
          sad
          asdsa
          descriptionsadad''')
    print(event_values) 
    event_ids = [event[0]for event in event_values]
                                                                                                   
    user_events_info = {"user_events_info": [dict(zip(event_keys,event)) for event in event_values]}
    
    photo_gallery_keys = ['photo_id','event_id','photo_description','photo_url']
    photo_gallery_values = db.session.query(PhotoGallery.id,PhotoGallery.event_id,PhotoGallery.description,PhotoGallery.url).filter(PhotoGallery.event_id.in_(event_ids)).all()
    photo_gallery = {"photo_gallery": [dict(zip(photo_gallery_keys,photo)) for photo in photo_gallery_values]}    
    # print(photos_gallery) 
    
    event_calendar_keys = ['event_calendar_id','event_id', 'date', 'time']
    event_calendar_values = db.session.query(EventCalendar.id,EventCalendar.event_id,EventCalendar.date,EventCalendar.time).filter(EventCalendar.event_id.in_(event_ids)).all()
    events_calendar = {"event_calendar": [dict(zip(event_calendar_keys,event_time)) for event_time in event_calendar_values]}    
    # print(events_calendar) 
    
    review_keys = ['review_id', 'event_id', 'user_name', 'rating', 'comment', 'created_at']
    review_values = db.session.query(Review.id,Review.event_id,User.user_name,Review.rating,Review.comment, Review.date_created).filter(Review.event_id.in_(event_ids), Review.user_id == User.id).all()
    reviews = {"reviews": [dict(zip(review_keys,review)) for review in review_values]}
    # print(reviews) 

    events = {'events':[user_events_info,photo_gallery,events_calendar,reviews]} 
    # print(events)
    return json.dumps(events,  sort_keys=True, default=str)



@event_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
