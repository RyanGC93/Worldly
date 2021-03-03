
from app.models import db, Event

# Adds a demo user, you can add other users here if you want
def seed_events():

    demo = Event(id=1, owner_id=1,description="demo event description",cost=23)

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_events():
    db.session.execute('TRUNCATE events CASCADE;')
    db.session.commit()
