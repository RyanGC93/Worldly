import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import styles from "./styles.module.css";
import { MdAddBox } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

const ordinalSuffix = (strNum) => {
  if (strNum.endsWith("1")) return `${strNum}st`;
  if (strNum.endsWith("2")) return `${strNum}nd`;
  if (strNum.endsWith("3")) return `${strNum}rd`;
  if (strNum.endsWith("14")) return `${strNum}teenth`;
  if (strNum.endsWith("15")) return `${strNum}teenth`;
  if (strNum.endsWith("17")) return `${strNum}teenth`;
  if (strNum.endsWith("18")) return `${strNum}teenth`;
  if (strNum.endsWith("19")) return `${strNum}teenth`;
  if (strNum.endsWith("20")) return `${strNum}teenth`;
  return `${strNum}th`;
};

const DateRow = ({ date, setSortedArray, sortedArray, timesArray,setTimesArrays }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [rowDate, setRowDate] = useState({});
  const [time, setTime] = useState("");
  const [ordinalNum, setOrdinalNum] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  const handleTrash = (e) => {
    console.log(timesArray,'sds')
    // languages.splice(1, 1, 'Python');
    // console.log("dsdsdsdsd", sortedArray, date);
    // let copyArr = sortedArray[date.key];
    // console.log("copied", copyArr);
    let filtered = timesArray.filter((item) => item.key !== date.key);
    console.log(filtered)
    setTimesArrays(filtered)
    // console.log(sortedArray.splice(date.index, 1, filtered));
    // console.log(sortedArray,'here')
    // setSortedArray(sortedArray);
};

  useEffect(() => {
    console.log(timesArray, "timesArray");
    setRowDate(date.dateObj);
    let dayNum = date.dateObj.getDay();
    let dateNum = date.dateObj.getDate();
    let day = days[dayNum];
    let ordirnal = ordinalSuffix(dateNum.toString());
    let time = date.dateObj.toUTCString().split(" ")[4];
    setDayOfWeek(day);
    setTime(time);
    setOrdinalNum(ordirnal);
  }, );

  return (
    <>
      <div className={styles.timeRow}>
        {/* <div>{`${days[rowDate.getDay()]} ${rowDate.toUTCString().split(' ')[4]}`} </div> */}
        <div className={styles.dateTime}>
          {`${dayOfWeek} the ${ordinalNum} @ ${time}`}{" "}
        </div>
        <BsFillTrashFill onClick={handleTrash} className={styles.timeTrash} />
      </div>
    </>
  );
};

const MonthDates = ({ month, upcomingArrays, setUpcomingArrays }) => {
  let [name, setName] = useState("");
  let [dates, setDates] = useState([]);
  const [moreArrays, setMoreArrays] = useState();

  let monthCalendar = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  // useEffect(() => {
  //   console.log(month,'dfsdfdfdsfsdfd');
  //   if (month[0]) {
  //     name = month[0].dateObj.getMonth();
  //     setName(monthCalendar[name]);
  //   }
  //   setDates(month);

  // });

  return (
    <>
      <div>
        <div className={styles.monthTitle}>{name}</div>
        <div className={styles.timesContainer}>
          {month.map((date, i) => (
            <DateRow
              upcomingArrays={upcomingArrays}
              setUpcomingArrays={setUpcomingArrays}
              date={date}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default function DateForm({setFormStep}) {
  const [timesArray, setTimesArrays] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [value, onChange] = useState(new Date());
  let [increment, setIncrement] = useState(0);

  const dateHandler = () => {
    let dateToday = new Date();
    if (dateToday > value) return alert("Can't pick a past date");
    let month = value.getMonth();

    let dateObject = {
      month: month,
      dateObj: value,
      key: increment
    };
    setIncrement((increment += 1));
    setTimesArrays(timesArray.push(dateObject));
    console.log(timesArray,'dfdsfdf')
    splitFunc();
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!timesArray[0]) return null;
		setFormStep(4);
  }

  const splitFunc = () => {
    let dateToday = new Date();
    let sortedArr = timesArray.sort((a, b) => b.date - a.date);
    setTimesArrays(sortedArr);
    let month = dateToday.getMonth();
    let newArr = [];
    for (let i = month; i < month + 4; i++) {
      let filtered = timesArray.filter((item) => item.month === i);
      newArr.push(filtered);
    }
    setSortedArray(newArr);
    console.log(newArr)
  };

  useEffect(() => {
    if(!timesArray) return
    console.log(timesArray)
    splitFunc()
  },[timesArray])

  return (
    <div className="Sample">
      <div className={styles.timeOptions}>
        <DateTimePicker
          amPmAriaLabel="Select AM/PM"
          calendarAriaLabel="Toggle calendar"
          clearAriaLabel="Clear value"
          dayAriaLabel="Day"
          hourAriaLabel="Hour"
          maxDetail="hour"
          minuteAriaLabel="Minute"
          monthAriaLabel="Month"
          nativeInputAriaLabel="Date and time"
          onChange={onChange}
          secondAriaLabel="Second"
          value={value}
          yearAriaLabel="Year"
        />
        <MdAddBox
          onClick={dateHandler}
          height={"100%"}
          className={styles.rowIcon}
        />
      </div>
      <div className={styles.dateGrid}>
        {sortedArray.map((month, i) => (
          <>
              {month.map((date) =>(
                      <>
                      <DateRow setTimesArrays={setTimesArrays} timesArray={timesArray} setSortedArray={setSortedArray} sortedArray={sortedArray} date={date} />
                      </>
              ))}   

          </>
        ))}
        
      </div>
      {sortedArray && (
        <>
          <div onClick={handleClick}>next</div>
        </>  
      )}
    </div>
  );
}


