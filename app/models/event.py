from .db import db

class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key = True)
    ambassador_id = db.Column(db.Integer, db.ForeignKey("ambassadors.id"),nullable=False)
    description = db.Column(db.Text, nullable=False)
    cost = db.Column(db.Integer, nullable = False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())
    
    user = relationship('User', back_populates='event')
    location = relationship('Location', back_populates='event')
    review = relationship('Location', back_populates='event')

    event_calendar = relationship('EventCalendar', back_populates='event')