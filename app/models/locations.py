from .db import db

class Location(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key = True)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"),nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    country = db.Column(db.String, nullable=False)
    region = db.Column(db.String, nullable=False)

    event = db.relationship('Event', back_populates='location')
    

    def to_dict(self):
        return {
        "id" : self.id,
        "event_id": self.event_id,
        "longitude": self.longitude,
        "latitude": self.latitude,
        "country": self.country, 
        }
        