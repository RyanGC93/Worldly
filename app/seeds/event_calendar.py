
from app.models import db, EventCalendar

# Adds a demo user, you can add other users here if you want
def seed_event_calendar():

    demo = EventCalendar(id=1,event_id=1,date="1980-01-01",time="2019-04-02 11:44:24.801046")

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_event_calendar():
    db.session.execute('TRUNCATE event_calendar CASCADE;')
    db.session.commit()
