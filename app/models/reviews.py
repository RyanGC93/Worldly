from .db import db
from flask_login import UserMixin

class Reviews(db.Model, UserMixin):
  __tablename__ = 'reviews'

  userId = db.Column(db.Integer, primary_key = True)
  eventId = db.Column(db.String(40), nullable = False, unique = True)
  value = db.Column(db.String(255), nullable = False, unique = True)
#   Bonus
  tags = db.Column(db.Integer, nullable = False)
  


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }
