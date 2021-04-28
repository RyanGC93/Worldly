from app.models import db, Review
from faker import Faker
fake = Faker()


reviewList = ["The classes use videos or step-by-step written instructions and photos to help you master recipes and techniques. Worldly is one of the best virtual online cooking classes in the game !","Very satisfied Traveler here !","Endless inspiration. I made a traditional Asian dish my grandmother made for me while growing up and the finished meal tasted exactly like my grandmother's. I Also really love the fact that I get to read about the history of the dish. I am learning a,lot about my own cultural cuisines.","This is site is perfect for a nice indoor date. My partner is from Peru and I loved the fact that we made authentic food from her country ! got a taste of Peru without leaving the US.","I am obsessed with accumulating miles fREQUENT fLYER HERE !!!!!!!","THE MOST UNDERRATED SITE","I love the fact that chefs are from the region the dishes are home to way to be authentic worldly !","I recommended this site to my family and they loved it! shipping was crazy fast","Costumer service is amazing. Had a issue with my order; I was sent the wrong ingredient box and I was allowed to keep the box and offered a free class! the right box came within two days of speaking to a costumer service agent. ","The jollof rice recipe is unmatched ","I can't see myself using any other virtual cooking class","As a college student, I love the affordability and accessibility of it. this gives me a chance to treat myself to a homemade meal that isn't cafeteria food or ramen.","THIS SITE  RULES !!","Cooking made fun and easy with fresh quality ingredients ","No virtual site can compete. simply the best!","shocked at how flavorful my dish came out. Guidelines were so easy to follow and I didn't burn my meal !"]

def seed_reviews():
    seed_list = []
    for _ in range(500):
        demo = Review(event_id=fake.random_int(min=3, max=34, step=1),user_id=fake.random_int(min=3, max=34, step=1), rating=fake.random_int(min=3, max=5, step=1), comment=reviewList[fake.random_int(min=0, max=13, step=1)])
        seed_list.append(demo)
    db.session.add_all(seed_list)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()
