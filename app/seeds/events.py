
from app.models import db, Event

# Adds a demo user, you can add other users here if you want
def seed_events():

    demo1 = Event(id=1, ambassador_id=1,title="this its the title1", description="demo event description",cost=23, type='dance')
    demo2 = Event(id=2, ambassador_id=1,title="this its the title2", description="demo event description",cost=23, type='dance')
    demo3 = Event(id=3, ambassador_id=1,title="this its the title3", description="demo event description",cost=23, type='dance')
    demo4 = Event(id=4, ambassador_id=1,title="this its the title4", description="demo event description",cost=23, type='dance')
    demo5 = Event(id=5, ambassador_id=1,title="this its the title5", description="demo event description",cost=23, type='art')
    demo6 = Event(id=6, ambassador_id=1,title="this its the title6", description="demo event description",cost=23, type='art')
    demo7 = Event(id=7, ambassador_id=1,title="this its the title7", description="demo event description",cost=23, type='art')
    demo = Event(id=8, ambassador_id=1,title="this its the title9", description="demo event description",cost=23, type='dance')
        
    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_events():
    db.session.execute('TRUNCATE events CASCADE;')
    db.session.commit()
