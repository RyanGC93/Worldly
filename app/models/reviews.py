from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(550), nullable=False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())
    
    event = db.relationship('Event', back_populates='review')
    user = db.relationship('User', back_populates='review')
    
    def to_dict(self):
        return {
        "id" : self.id,
        "event_id": self.event_id,
        "user_id": self.user_id,
        "comment": self.comment,
        }
        
