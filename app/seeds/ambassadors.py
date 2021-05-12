
from app.models import db, Ambassador

# Adds a demo user, you can add other users here if you want
def seed_ambassadors():
    db.session.commit()

    demo1 = Ambassador(user_id=1)
    demo2 = Ambassador(user_id=1)
    Demo3=Ambassador(user_id=1)
    Demo4=Ambassador(user_id=4)
    Demo5=Ambassador(user_id=5)
    Demo6=Ambassador(user_id=6)
    Demo7=Ambassador(user_id=7)
    Demo8=Ambassador(user_id=8)
    Demo9=Ambassador(user_id=9)
    Demo10=Ambassador(user_id=10)
    Demo11=Ambassador(user_id=11)
    Demo12=Ambassador(user_id=12)
    Demo13=Ambassador(user_id=13)
    Demo14=Ambassador(user_id=14)
    Demo15=Ambassador(user_id=15)
    Demo16=Ambassador(user_id=1)
    Demo17=Ambassador(user_id=1)
    Demo18=Ambassador(user_id=1)
    Demo19=Ambassador(user_id=1)
    Demo20=Ambassador(user_id=2)
    Demo21=Ambassador(user_id=2)
    Demo22=Ambassador(user_id=2)
    Demo23=Ambassador(user_id=2)
    Demo24=Ambassador(user_id=2)
    Demo25=Ambassador(user_id=2)
    Demo26=Ambassador(user_id=2)
    Demo27=Ambassador(user_id=27)
    Demo28=Ambassador(user_id=28)
    Demo29=Ambassador(user_id=29)
    Demo30=Ambassador(user_id=30)
    Demo31=Ambassador(user_id=31)
    Demo32=Ambassador(user_id=32)
    Demo33=Ambassador(user_id=33)
    Demo34=Ambassador(user_id=34)


    db.session.add_all([demo1, demo2, Demo3,Demo4,Demo5,Demo6,Demo7,Demo8,Demo9,Demo10,Demo11,Demo12,Demo13,Demo14,Demo15,Demo16,Demo17,Demo18,Demo19,Demo20,Demo21,Demo22,Demo23,Demo24,Demo25,Demo26,Demo27,Demo28,Demo29,Demo30,Demo31,Demo32,Demo33, Demo34])
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_ambassadors():
    db.session.execute('TRUNCATE ambassadors CASCADE;')
    db.session.commit()
