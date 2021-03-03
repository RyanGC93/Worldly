from .db import db

class EventCalendar(db.Model):
    __tablename__ = 'event_calendar'

    id = db.Column(db.Integer, primary_key = True)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"),nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.DateTime, nullable = False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())
