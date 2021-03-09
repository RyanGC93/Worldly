from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker
fake = Faker()

f_firstname = fake.first_name()
f_phone_number = fake.phone_number()
f_email = fake.email()
f_username = fake.user_name()
f_lastname = fake.last_name()
f_password = fake.password()
# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User( id=1, first_name='Demo',last_name='Demo',user_name='Demo', email='demo@aa.io',password='password',phone_number="9704819923")
    featured = User( id=2, first_name='Phoebe',last_name='Ajayi',user_name='Phoebe_Ajayi', email='pheebs@aa.io',password='password',phone_number="970439923")
    db.session.add(demo)
    db.session.add(featured)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
