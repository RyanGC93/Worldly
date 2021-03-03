
from app.models import db, Location

# Adds a demo user, you can add other users here if you want
def seed_location():

    demo = Location(id=1,event_id=1,longitude=-105.084419, latitude=40.585258, city="Fort Collins", country="USA")

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_location():
    db.session.execute('TRUNCATE locations;')
    db.session.commit()
