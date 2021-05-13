from flask import Blueprint, request
from app.models import db,BookingCalendar
from flask_login import login_required, current_user
from sqlalchemy import exc
booking_routes = Blueprint('booking', __name__)


@booking_routes.route('/<int:id>', methods=['POST'])
@login_required
def new_booking(id):
    timeslot = id
    try: 
        data = request.get_json()

        user_id = current_user.id

        new_booking = BookingCalendar(user_id=user_id,timeslot=timeslot)
        db.session.add(new_booking)
        db.session.commit()
        return new_booking.to_dict()
    except exc.SQLAlchemyError as e:
        print('Creating Booking Calendar Error')
        print(type(e))
        return {'errors': ['Could not create Calendar Booking Please Try again']}, 500