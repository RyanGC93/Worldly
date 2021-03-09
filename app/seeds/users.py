from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker
fake = Faker()

def f_firstname():
    return fake.first_name()




def seed_users():
    demo = User( id=1, first_name='Demo',last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    featured = User( id=2, first_name='Phoebe',last_name='Ajayi',user_name='Phoebe_Ajayi', email='pheebs@aa.io',password='password',phone_number="970439923")
    Demo3=User(id=3, first_name="Dre",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo4=User(id=4, first_name="Kahlani",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo5=User(id=5, first_name="Destiny",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo6=User(id=6, first_name="Amira",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo7=User(id=7, first_name="Chef Su",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo8=User(id=8, first_name="Ola",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo9=User(id=9, first_name="Chef Akiko ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo10=User(id=10, first_name="Monalisa ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo11=User(id=11, first_name="Asani",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo12=User(id=12, first_name="Nyala",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo13=User(id=13, first_name="Thomas",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo14=User(id=14, first_name="Chao ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo15=User(id=15, first_name="Rolland ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo16=User(id=16, first_name="Amaterasu",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo17=User(id=17, first_name="Oke ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo18=User(id=18, first_name="Christine ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo19=User(id=19, first_name="Chloe ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo20=User(id=20, first_name="Joleyn ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo21=User(id=21, first_name="Martin ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo22=User(id=22, first_name="Samantha ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo23=User(id=23, first_name="Giada",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo24=User(id=24, first_name="Rudolph ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo25=User(id=25, first_name="Fannizo ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo26=User(id=26, first_name="Mary ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo27=User(id=27, first_name="Emmanuel ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo28=User(id=28, first_name="Diana ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo29=User(id=29, first_name="Coco ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo30=User(id=30, first_name="Joe",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo31=User(id=31, first_name="Jules ",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo32=User(id=32, first_name="Dominque",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo33=User(id=33, first_name="Ryan Motilinjou",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
    Demo34=User(id=34, first_name="Carmen Sandiego",last_name=fake.last_name(),user_name=fake.user_name(), email=fake.email(),password=fake.password(),phone_number=fake.phone_number())
  
    
    
    db.session.add_all([demo, featured, Demo3,Demo4,Demo5,Demo6,Demo7,Demo8,Demo9,Demo10,Demo11,Demo12,Demo13,Demo14,Demo15,Demo16,Demo17,Demo18,Demo19,Demo20,Demo21,Demo22,Demo23,Demo24,Demo25,Demo26,Demo27,Demo28,Demo29,Demo30,Demo31,Demo32,Demo33, Demo34])
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
