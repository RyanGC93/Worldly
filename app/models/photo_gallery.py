from .db import db

class PhotoGallery(db.Model):
    __tablename__ = 'photo_gallery'

    id = db.Column(db.Integer, primary_key = True)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"),nullable=False)
    description = db.Column(db.Text, nullable=False)
    url = db.Column(db.String(100), nullable = False)
