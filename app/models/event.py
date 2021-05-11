from .db import db
class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    ambassador_id = db.Column(db.Integer, db.ForeignKey(
        "ambassadors.id"), nullable=False)
    title = db.Column(db.String(250), nullable=False)
    description = db.Column(db.Text, nullable=False)
    cost = db.Column(db.Integer, nullable=False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    ambassador = db.relationship('Ambassador', back_populates='event')
    location = db.relationship('Location', back_populates='event', cascade="all,delete-orphan")
    review = db.relationship('Review', back_populates='event', cascade="all,delete-orphan")
    photo_gallery = db.relationship('PhotoGallery', back_populates='event', cascade="all,delete-orphan")
    event_calendar = db.relationship('EventCalendar', back_populates='event', cascade="all,delete-orphan")

    def to_dict(self):
        return {
        "id" : self.id,
        "ambassador_id": self.ambassador_id,
        "title": self.title,
        "description": self.description,
        "cost": self.cost, 
        }
        
