import {NavLink} from "react-router-dom";

import './nav.css';

const NavBar = (props) => {
  const navClasses = props.parent ? `${props.parent}__nav nav` : 'nav';
  return (
      <nav className={navClasses}>
        <ul className='nav__list'>
          <li className='nav__item'><NavLink className='nav__link' to={'/'}>Main</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' to={'/news'}>News</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' to={'/career'}>Career</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' to={'/vacancies'}>Vacancies</NavLink></li>
        </ul>
      </nav>
  );
}
export default NavBar;

