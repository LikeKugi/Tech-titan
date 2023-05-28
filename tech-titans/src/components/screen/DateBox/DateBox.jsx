import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './DateBox.css'
import {useReducer} from "react";

const DateBox = () => {
  const [showCalendar, toggle] = useReducer(showCalendar => !showCalendar, false)
  const today = new Date()
  const month = today.toLocaleString('ru-RU', {month: 'long'});
  const year = today.getFullYear();
  const day = today.toLocaleString('ru-RU', {day: '2-digit'});
  const weekday = new Intl.DateTimeFormat('ru-RU', {weekday: "long",}).format(today);
  console.log(weekday);
  return (
      <aside className='datebox'>
        <div className='date'>
          <div className="date__current">
            <p className='date__text date__weekday'>{weekday}</p>
            <p className='date__text date__day'>{day}</p>
            <p className='date__text date__month'>{month}</p>
            <p className='date__text date__year'>{year}</p>
          </div>
          <div className="date__controls">
            <button className="date__toggle" onClick={toggle}>календарь</button>
          </div>

        </div>
        <div className="calendar">
          {showCalendar && <Calendar/>}
        </div>
      </aside>
  );
}
export default DateBox;