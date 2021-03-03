from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(40), nullable = True)
  last_name = db.Column(db.String(40), nullable = True)  
  user_name = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  phone_number = db.Column(db.String(15), nullable = False, unique = True)
  bio = db.Column(db.Text, nullable=True)
  mileage = db.Column(db.Integer, nullable = False, default = 0)
  hashed_password = db.Column(db.String(255), nullable = False)


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
      "first_name": self.first_name,
      "last_name": self.last_name,
      "username": self.user_name,
      "bio": self.bio      
    }

  # TODO: add a setter property to update mileage