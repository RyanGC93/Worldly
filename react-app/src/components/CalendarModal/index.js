import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';
import { IoChevronBackCircle } from 'react-icons/io5';

function CalendarModal({ event, setShowModal }) {
	const dates = useSelector((state) => {
		return Object.values(state.eventCalendar).filter((date) => date.event_id === event.event_id);
	});

	const [value, setValue] = useState(new Date());
	const [toggle, setToggle] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const [timeslot, setTimeSlot] = useState('');
	const [dateArr, setDateArr] = useState([]);

	const calendarHandler = (values) => {
		let dateView = dates.filter((date) => date.dateObj.toDateString() == values.toDateString());
		setDateArr(dateView);
		setToggle(true);
	};
	const timeSlotHandler = (e, slot) => {
		setTimeSlot(`${e.target.id}`);
		setConfirm(true);
		setToggle(false);
	};
	const goBack = (e) => {
		if (confirm) {
			setConfirm(false);
			setToggle(true);
		} else {
			setToggle(false);
		}
	};

	function onChange(nextValue) {
		setValue(nextValue);
	}

	const handleCancel = () => {
		setShowModal(false)
	}

	const handleConfirmation = async () => {
		const optionsCalendar = {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify(timeslot),
		};
		const res = await fetch(`/api/booking/${timeslot}`, optionsCalendar);
		if(res.ok) setShowModal(false)
	};

	function isSameDay(a, b) {
		return a.dateObj.toDateString() == b.toDateString();
	}
	function tileClassName({ date, view }) {
		// Add class to tiles in month view only
		if (view === 'month') {
			// Check if a date React-Calendar wants to check is on the list of dates to add class to
			if (dates.find((dDate) => isSameDay(dDate, date))) {
				return 'tileStyle';
			}
		}
	}

	return (
		<div className="booking-container">
			{!toggle && !confirm && (
				<>
					<header className="header">Dates</header>
					<Calendar
						// tileContent={tileContentTwo}
						tileClassName={tileClassName}
						className="calendar"
						onChange={onChange}
						value={value}
						onClickDay={calendarHandler}
					/>
				</>
			)}
			{toggle && (
				<>
					<div className="header-row">
						<IoChevronBackCircle className="backIcon" onClick={goBack} />
						<header className="header">Time Slots </header>
					</div>
					<div className="time-container">
						{dateArr &&
							dateArr.map((slot) => (
								<div key={slot.event_calendar_id} className="slot-container btn1">
									<div
										className="blue"
										id={slot.event_calendar_id}
										onClick={(slot) => timeSlotHandler(slot)}
									>
										{slot.time}
									</div>
								</div>
							))}
					</div>
				</>
			)}
			{confirm && (
				<>
					<div className="header-row">
						<IoChevronBackCircle onClick={goBack} />
						<header className="header">Confirm </header>
					</div>
					<div className="confirmContainer">
						<div className="confirmTitle">Would You Like to Confirm</div>

						<div className="blue" onClick={handleConfirmation}>
							Confirm
						</div>
						<div className="blue" onClick={handleCancel}>
							Cancel
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default CalendarModal;
