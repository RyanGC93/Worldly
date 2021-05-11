from .db import db
class Ambassador(db.Model):
    __tablename__ = 'ambassadors'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)

    event = db.relationship('Event', back_populates='ambassador')
    
    def to_dict(self):
        return {
        "ambassador_id": self.id,
        "user_id": self.user_id,   
        }
