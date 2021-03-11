import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
function CalendarModal() {
  const [value, onChange] = useState(new Date());
  const [toggle, setToggle] = useState(false)
  
  const calendarHandler = (value,event) => {
    alert(value)
    setToggle(true)

  }
  
  return (
    <>{!toggle &&
      <div className="calendar-container">
        <header className="header">
          <div> Availabilities</div>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              className="calendar"
              onChange={onChange}
              value={value}
              onClickDay={calendarHandler}
            />
          </main>
        </div>
      </div>
    }
    {toggle &&
      <div className="timeslot-container">
      <header className="header">
        <div> Time Slots </div>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          
        </main>
      </div>
    </div>
    }
    </>
  );
}

export default CalendarModal;
