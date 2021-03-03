from .db import db

class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key = True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)
    description = db.Column(db.Text, nullable=False)
    # location = db.Column(ARRAY(db.Integer, dimensions=2), nullable = False)
    cost = db.Column(db.Integer, nullable = False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())