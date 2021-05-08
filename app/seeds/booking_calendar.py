
from app.models import db, BookingCalendar
from faker import Faker
fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_booking_calendar():
    db.session.execute("ALTER SEQUENCE booking_calendar_id_seq RESTART WITH 1")
    db.session.commit()

    seed_list = []
    count = 0
    for _ in range(100):
        count+=1
        demo2 = BookingCalendar(user_id=fake.random_int(min=1, max=34, step=1),timeslot=fake.random_int(min=1, max=50, step=1))
        seed_list.append(demo2)
    for _ in range(10):
        count+=1
        demo2 = BookingCalendar(user_id=1,timeslot=fake.random_int(min=1, max=50, step=1))
        seed_list.append(demo2)        

    db.session.add_all(seed_list)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_booking_calendar():
    db.session.execute('TRUNCATE booking_calendar;')
    db.session.commit()
