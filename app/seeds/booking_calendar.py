
from app.models import db, BookingCalendar

# Adds a demo user, you can add other users here if you want
def seed_booking_calendar():

    demo = BookingCalendar(id=1,user_id=1,timeslot=1)

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_booking_calendar():
    db.session.execute('TRUNCATE booking_calendar;')
    db.session.commit()
