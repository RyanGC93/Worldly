from .db import db

class Ambassador(db.Model):
    __tablename__ = 'ambassadors'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)
