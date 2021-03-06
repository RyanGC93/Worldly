from .db import db

class EventCalendar(db.Model):
    __tablename__ = 'event_calendar'

    id = db.Column(db.Integer, primary_key = True)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"),nullable=False)
    date = db.Column(db.String(250), nullable=False)
    time = db.Column(db.String(250), nullable = False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    event = db.relationship('Event', back_populates='event_calendar')
    booking_calendar = db.relationship('BookingCalendar', back_populates='event_calendar', cascade="all,delete-orphan")

    def to_dict(self):
        return {
        "id" : self.id,
        "event_id": self.event_id,
        "date": self.date,
        "time": self.time,
        }
        
