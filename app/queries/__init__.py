from flask.cli import AppGroup
from app.models import db, Event, Location, Ambassador, User, Review, PhotoGallery, EventCalendar

# Creates a query group to hold our commands
# So we can type `flask query --help`
query_commands = AppGroup('query')

# Get last id from table
@query_commands.command('last')
def query_last():
    last_id = db.session.query(Event.id,).order_by(Event.id.desc()).first()
    print(last_id)


@query_commands.command('ambassador_events')
def query_ambassador_events():
    events = db.session.query(Event.id).filter(Event.ambassador_id == 1).all()
    event_ids = [event[0]for event in events]
    print(event_ids)
    
    event_values = db.session.query(Event.id, Event.title, Event.description).filter(Event.id.in_(event_ids), Location.event_id == Event.id).all()   
    print(event_values)


@query_commands.command('event')
def query_event():

    x = db.session.query(Event.id, Event.title, Event.description , Location.region, Location.country, User.user_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all() 
    keys = ['event_id', 'title', 'description', 'region', 'country', 'username']
    values = list(x[0])
    row = dict(zip(keys,values))
    
@query_commands.command('eventid')
def query_event():

    events = db.session.query(Event.id, Event.title).all() 
    event_ids = [event[0]for event in events]
    print(event_ids)        
    
@query_commands.command('ambassador')
def query_ambassador():

    x = Ambassador.query().filter(Ambassador.id == '1').all()
    keys = ['event_id', 'title', 'description', 'region', 'country', 'username']
    values = list(x[0])
    row = dict(zip(keys,values))
        
    
    
@query_commands.command('event-limited')
def query_comments():
    x =db.session.query(EventCalendar).filter(EventCalendar.date <="2021-04-01").count()

username = 'demo'
    
@query_commands.command('user-protected')
def query_comments():
    x = db.session.query(User.phone_number, User.email).filter(User.user_name == 'sbutler').first() 




@query_commands.command('events-id')
def query_comments():
    
    region_param ='Africa'
    events = db.session.query(Location.event_id, Location.region).filter(Location.region == region_param).all() 
    event_ids = [event[0]for event in events]

    event_keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Event.id.in_(event_ids), Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all();
    events_info = {"events": [dict(zip(event_keys,event_values)) for event in event_values]}
    
    
    photo_gallery_keys = ['photo_id','event_id','photo_description','url']
    photo_gallery_values = db.session.query(PhotoGallery.id,PhotoGallery.event_id,PhotoGallery.description,PhotoGallery.url).filter(PhotoGallery.event_id.in_(event_ids)).all()
    photos_gallery = {"photo_gallery": [dict(zip(photo_gallery_keys,photo_gallery_values)) for photo_gallery in photo_gallery_values]}    
    
    event_calendar_keys = ['event_calendar_id','event_id', 'date', 'time']
    event_calendar_values = db.session.query(EventCalendar.id,EventCalendar.event_id,EventCalendar.date,EventCalendar.time).filter(EventCalendar.event_id.in_(event_ids)).all()
    events_calendar = {"event_calendar": [dict(zip(event_calendar_keys,event_calendar_values)) for event_calendar in event_calendar_values]}    
    
    review_keys = ['review_id', 'event_id', 'user_name', 'comment', 'created_at']
    review_values = db.session.query(Review.id,Review.event_id,User.user_name,Review.rating,Review.comment, Review.date_created).filter(Review.event_id.in_(event_ids), Review.user_id == User.id).all()
    reviews = {"reviews": [dict(zip(review_keys,review_values)) for review in review_values]}

    events = {'events':[events_info,photos_gallery,events_calendar,reviews]} 
    return events
