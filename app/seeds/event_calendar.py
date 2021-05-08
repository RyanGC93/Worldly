from app.models import db, EventCalendar
from faker import Faker
fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_event_calendar():
    # fake.random_int(min=0, max=9999, step=1)\
    db.session.execute("ALTER SEQUENCE event_calendar_id_seq RESTART WITH 1")
    db.session.commit()

    seed_list = []
    count = 0
    for _ in range(50):
        count+=1
        demo2 = EventCalendar(event_id=fake.random_int(min=3, max=27, step=1),date=fake.future_date(),time=fake.time())
        seed_list.append(demo2)
    for _ in range(50):
        count+=1
        demo2 = EventCalendar(event_id=fake.random_int(min=3, max=27, step=1),date=fake.past_date(),time=fake.time())
        seed_list.append(demo2)
    for _ in range(5):
        count+=1
        demo2 = EventCalendar(event_id=fake.random_int(min=3, max=27, step=1),date=fake.future_date(),time=fake.time())
        seed_list.append(demo2) 
    for _ in range(5):
        count+=1
        demo2 = EventCalendar(event_id=fake.random_int(min=3, max=27, step=1),date=fake.future_date(),time=fake.time())
        seed_list.append(demo2)                     
    db.session.add_all(seed_list)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_event_calendar():
    db.session.execute('TRUNCATE event_calendar CASCADE;')
    db.session.commit()
