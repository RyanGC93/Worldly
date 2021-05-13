from flask.cli import AppGroup
from app.models import db
from .users import seed_users, undo_users
from .events import seed_events, undo_events
from .event_calendar import seed_event_calendar, undo_event_calendar
from .booking_calendar import seed_booking_calendar, undo_booking_calendar
from .locations import seed_location, undo_location
from .photo_gallery import seed_photo_gallery, undo_photo_gallery
from .reviews import seed_reviews, undo_reviews
from .ambassadors import seed_ambassadors, undo_ambassadors
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_ambassadors()
    seed_events()
    seed_event_calendar()
    seed_booking_calendar()
    seed_location()
    seed_photo_gallery()
    seed_reviews()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_ambassadors()
    undo_events()
    undo_event_calendar()
    undo_booking_calendar()
    undo_location()
    undo_photo_gallery()
    undo_reviews()
    # Add other undo functions here

@seed_commands.command('undoEvents')
def undo_events_seeds():
    # undo_users()
    # undo_ambassadors()
    undo_events()
    # undo_event_calendar()
    # undo_booking_calendar()
    # undo_location()
    # undo_photo_gallery()
    # undo_reviews()


@seed_commands.command('reset')
def reset_seeds():
    db.session.execute("ALTER SEQUENCE ambassadors_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE users_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE locations_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE events_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE users_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE booking_calendar_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE event_calendar_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE photo_gallery_id_seq RESTART WITH 1")
    db.session.execute("ALTER SEQUENCE reviews_id_seq RESTART WITH 1")    
    db.session.commit()
    
@seed_commands.command('set')
def reset_seeds():    
    db.session.execute("SELECT setval('events_id_seq', 35, true)")