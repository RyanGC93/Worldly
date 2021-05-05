
from app.models import db, Ambassador

# Adds a demo user, you can add other users here if you want
def seed_ambassadors():

    demo = Ambassador(id=1,user_id=1)
    demo2 = Ambassador(id=2,user_id=1)
    Demo3=Ambassador(id=3,user_id=1)
    Demo4=Ambassador(id=4,user_id=4)
    Demo5=Ambassador(id=5,user_id=5)
    Demo6=Ambassador(id=6,user_id=6)
    Demo7=Ambassador(id=7,user_id=7)
    Demo8=Ambassador(id=8,user_id=8)
    Demo9=Ambassador(id=9,user_id=9)
    Demo10=Ambassador(id=10,user_id=10)
    Demo11=Ambassador(id=11,user_id=11)
    Demo12=Ambassador(id=12,user_id=12)
    Demo13=Ambassador(id=13,user_id=13)
    Demo14=Ambassador(id=14,user_id=14)
    Demo15=Ambassador(id=15,user_id=15)
    Demo16=Ambassador(id=16,user_id=1)
    Demo17=Ambassador(id=17,user_id=1)
    Demo18=Ambassador(id=18,user_id=1)
    Demo19=Ambassador(id=19,user_id=1)
    Demo20=Ambassador(id=20,user_id=2)
    Demo21=Ambassador(id=21,user_id=2)
    Demo22=Ambassador(id=22,user_id=2)
    Demo23=Ambassador(id=23,user_id=2)
    Demo24=Ambassador(id=24,user_id=2)
    Demo25=Ambassador(id=25,user_id=2)
    Demo26=Ambassador(id=26,user_id=2)
    Demo27=Ambassador(id=27,user_id=27)
    Demo28=Ambassador(id=28,user_id=28)
    Demo29=Ambassador(id=29,user_id=29)
    Demo30=Ambassador(id=30,user_id=30)
    Demo31=Ambassador(id=31,user_id=31)
    Demo32=Ambassador(id=32,user_id=32)
    Demo33=Ambassador(id=33,user_id=33)
    Demo34=Ambassador(id=34,user_id=34)


    db.session.add_all([demo, demo2, Demo3,Demo4,Demo5,Demo6,Demo7,Demo8,Demo9,Demo10,Demo11,Demo12,Demo13,Demo14,Demo15,Demo16,Demo17,Demo18,Demo19,Demo20,Demo21,Demo22,Demo23,Demo24,Demo25,Demo26,Demo27,Demo28,Demo29,Demo30,Demo31,Demo32,Demo33, Demo34])
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_ambassadors():
    db.session.execute('TRUNCATE ambassadors CASCADE;')
    db.session.commit()
