from flask.cli import AppGroup
from app.models import db, Event, Location, Ambassador, User, Review, PhotoGallery, EventCalendar

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
query_commands = AppGroup('query')

@query_commands.command('event')
def query_event():

    # y = db.session.query.query(CommentLike) 
    # for c, u, l in db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment):
    x = db.session.query(Event.id, Event.title, Event.description , Location.region, Location.country, User.user_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all() 
    keys = ['event_id', 'title', 'description', 'region', 'country', 'username']
    print(x[0])
    values = list(x[0])
    row = dict(zip(keys,values))
    # print(values)
    # print(row)
    
@query_commands.command('event-limited')
def query_comments():
    x =db.session.query(EventCalendar).filter(EventCalendar.date <="2021-04-01").count()
    print(x)

username = 'demo'
    
@query_commands.command('user-protected')
def query_comments():
    x = db.session.query(User.phone_number, User.email).filter(User.user_name == 'sbutler').first() 
    # keys = ['event_id', 'title', 'description', 'region', 'country', 'username']
    # values = list(x[0])
    # row = dict(zip(keys,values))
    # print(values)
    print(x)




@query_commands.command('events-id')
# Have to pass user and date
def query_comments():
    
    # Gets the events by country
    region_param ='Africa'
    events = db.session.query(Location.event_id, Location.region).filter(Location.region == region_param).all() 
    event_ids = [event[0]for event in events]
    # print(event_ids) # ALL EVENT IDS

    event_keys = ['event_id', 'title', 'description', 'region', 'country', 'firstname']
    event_values = db.session.query(Event.id, Event.title, Event.description, Location.region, Location.country, User.first_name).filter(Event.id.in_(event_ids), Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all();
    events_info = {"events": [dict(zip(event_keys,event_values)) for event in event_values]}
    # print(events_info)
    
    
    photo_gallery_keys = ['photo_id','event_id','photo_description','photo_url']
    photo_gallery_values = db.session.query(PhotoGallery.id,PhotoGallery.event_id,PhotoGallery.description,PhotoGallery.url).filter(PhotoGallery.event_id.in_(event_ids)).all()
    photos_gallery = {"photo_gallery": [dict(zip(photo_gallery_keys,photo_gallery_values)) for photo_gallery in photo_gallery_values]}    
    print(photos_gallery) 
    
    event_calendar_keys = ['event_calendar_id','event_id', 'date', 'time']
    event_calendar_values = db.session.query(EventCalendar.id,EventCalendar.event_id,EventCalendar.date,EventCalendar.time).filter(EventCalendar.event_id.in_(event_ids)).all()
    events_calendar = {"event_calendar": [dict(zip(event_calendar_keys,event_calendar_values)) for event_calendar in event_calendar_values]}    
    # print(events_calendar) 
    
    review_keys = ['review_id', 'event_id', 'user_name', 'comment', 'created_at']
    review_values = db.session.query(Review.id,Review.event_id,User.user_name,Review.rating,Review.comment, Review.date_created).filter(Review.event_id.in_(event_ids), Review.user_id == User.id).all()
    reviews = {"reviews": [dict(zip(review_keys,review_values)) for review in review_values]}
    # print(reviews) 

    events = {'events':[events_info,photos_gallery,events_calendar,reviews]} 
    # print(events)
    return events
