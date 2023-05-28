import {NavLink, Outlet} from "react-router-dom";
import './Intern.css';

const Intern = () => {

  return (
      <div className='profile'>
        <nav className="profile__nav controls">
          <ul className="controls__list">
            <li className="controls__item"><NavLink className='controls__link'
                                                    to={'phonetic'}> Анкета на стажировку </NavLink></li>
            <li className="controls__item"><NavLink className='controls__link'
                                                    to={'career'}> Карьера </NavLink></li>
            <li className="controls__item"><NavLink className='controls__link'
                                                    to={'test'}> Тестирование </NavLink></li>
          </ul>
        </nav>
        <div className="profile__content">
          <Outlet/>
        </div>
      </div>
  );
}
export default Intern;