from .db import db
from flask_login import UserMixin

class Passport(db.Model, UserMixin):
  __tablename__ = 'passports'

  id = db.Column(db.Integer, primary_key = True)
  trips = db.Column(db.String(40), nullable = False, unique = True)
  totalMileage = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.Integer, nullable = False)
  


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
