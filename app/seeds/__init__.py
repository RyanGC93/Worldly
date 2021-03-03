from flask.cli import AppGroup
from .users import seed_users, undo_users
from .events import seed_events, undo_events
from .event_calendar import seed_event_calendar, undo_event_calendar
from .booking_calendar import seed_booking_calendar, undo_booking_calendar
from .locations import seed_location, undo_location
from .photo_gallery import seed_photo_gallery, undo_photo_gallery
from .reviews import seed_reviews, undo_reviews
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
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
    undo_events()
    undo_event_calendar()
    undo_booking_calendar()
    undo_location()
    undo_photo_gallery()
    undo_reviews()
    # Add other undo functions here
