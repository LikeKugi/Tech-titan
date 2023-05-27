import {NavLink, Outlet} from "react-router-dom";
import './Intern.css';

const Intern = (props) => {

  return (
      <div className='profile'>
        <nav className="profile__nav controls">
          <ul className="controls__list">
            <li className="controls__item"><NavLink className='controls__link' to={'phonetic'} > Phonetic </NavLink></li>
            <li className="controls__item"><NavLink className='controls__link' to={'career'} > Career </NavLink></li>
            <li className="controls__item"><NavLink className='controls__link' to={'test'} > Test </NavLink></li>
            <li className="controls__item"><NavLink className='controls__link' to={'news'} > News </NavLink></li>
          </ul>
        </nav>
        <div className="profile__content">
          <Outlet />
        </div>
      </div>
  );
}
export default Intern;