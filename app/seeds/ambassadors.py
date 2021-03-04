
from app.models import db, Ambassador

# Adds a demo user, you can add other users here if you want
def seed_ambassadors():

    demo = Ambassador(id=1,user_id=1)

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_ambassadors():
    db.session.execute('TRUNCATE ambassadors CASCADE;')
    db.session.commit()
