import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import { IoChevronBackCircle } from "react-icons/io5";
function CalendarModal() {
  const [value, onChange] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [timeslot, setTimeslot] = useState("");

  const calendarHandler = (value, event) => {
    alert(value);
    setToggle(true);
  };
  const timeSlotHandler = (e) => {
    alert(e.target.innerHTML);
    setTimeslot(e.target.innerHTML);
    setConfirm(true);
    setToggle(false);
  };
  const goBack = (e) => {
    if(confirm){
      setConfirm(false)
      setToggle(true)
    }else{
     setToggle(false)
    }
  };

  const handleConfirmation = () => {
    let year = value.getFullYear();
     let mes = value.getMonth()+1;
let dia = value.getDate();
    alert('year', year,'mt,' , mes, dia);
    alert(value)
    alert(timeslot);
  };

  const time = [
    "4:30",
    "5:30",
    "2:00",
    "4:30",
    "5:30",
    "2:00",
    "2:00",
    "4:30",
    "5:30",
    "2:00"
  ];

  return (
    <div className="booking-container">
      {!toggle && !confirm && (
        <>
          <header className="header">Dates</header>
          <Calendar
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
            <IoChevronBackCircle onClick={goBack} />
            <header className="header">Time Slots </header>
          </div>
          <div className="time-container">
            {time.map((slot) => (
              <div className="slot-container btn1">
                <div className="btn" onClick={timeSlotHandler}>
                  {slot}{" "}
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
          <div className="Sample__container">
            <div>Would You Like to Confirm</div>
            <div>EVENTNAME</div>
            <div>At</div>
            <div>TIME</div>
            <div className="btn" onClick={handleConfirmation}>
              confirm
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CalendarModal;
