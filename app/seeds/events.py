
from app.models import db, Event

# Adds a demo user, you can add other users here if you want
def seed_events():

    featured = Event(id=1, ambassador_id=2,title= 'West African Cooking With Chef Phoebe', description="Jollof Rice is a popular West African dish that is full flavor! Although historians believe this dish originated from Senegal, many West African countries claim to have the original and best Jollof rice. In the class you will be learning how to cook the Nigeruan version of the dish. Flavors of the spiced tmoato stew base and the smoky undertones in this rice dish willl have you asking for more. In this class you will be learning how to be making this iconic african dish wirh Chef Phoebe. Chef Phoebe has taken years to perfect her family recipe and will teach you her award winning recipe." ,cost=23 )
    demo2 = Event(id=2, ambassador_id=1,title="this its the title2", description="demo event description",cost=23, )
    demo3 = Event(id=3, ambassador_id=1,title="this its the title3", description="demo event description",cost=23, )
    demo4 = Event(id=4, ambassador_id=1,title="this its the title4", description="demo event description",cost=23, )
    demo5 = Event(id=5, ambassador_id=1,title="this its the title5", description="demo event description",cost=23, )
    demo6 = Event(id=6, ambassador_id=1,title="this its the title6", description="demo event description",cost=23, )
    demo7 = Event(id=7, ambassador_id=1,title="this its the title7", description="demo event description",cost=23, )
    demo = Event(id=8, ambassador_id=1,title="this its the title9", description="demo event description",cost=23, )
        
    db.session.add(featured)
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
