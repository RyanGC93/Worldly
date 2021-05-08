from .db import db

class PhotoGallery(db.Model):
    __tablename__ = 'photo_gallery'

    id = db.Column(db.Integer, primary_key = True)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"),nullable=False)
    description = db.Column(db.Text, nullable=False)
    url = db.Column(db.String(400), nullable = False)

    event = db.relationship('Event', back_populates='photo_gallery')
    
    def to_dict(self):
        return {
        "id" : self.id,
        "event_id": self.event_id,
        "description": self.description,
        "url": self.url,
        }
    
