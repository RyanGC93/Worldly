
from app.models import db, PhotoGallery

# Adds a demo user, you can add other users here if you want
def seed_photo_gallery():

    demo = PhotoGallery(id=1,event_id=1, description="this is a photo", url="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg")

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_photo_gallery():
    db.session.execute('TRUNCATE photo_gallery;')
    db.session.commit()
