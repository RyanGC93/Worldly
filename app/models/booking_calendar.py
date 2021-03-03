from .db import db

class BookingCalendar(db.Model):
    __tablename__ = 'booking_calendar'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    timeslot = db.Column(db.Integer, db.ForeignKey("event_calendar.id"),nullable=False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())
