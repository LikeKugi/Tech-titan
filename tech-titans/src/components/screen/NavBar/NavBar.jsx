import {NavLink} from "react-router-dom";

import './nav.css';

const NavBar = (props) => {
  const navClasses = props.parent ? `${props.parent}__nav nav` : 'nav';
  return (
      <nav className={navClasses}>
        <ul className='nav__list'>
          <li className='nav__item'><NavLink className='nav__link' to={'/'}>Главная</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' to={'/news'}>Новости</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' to={'/career'}>Карьера</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' to={'/vacancies'}>Вакансии</NavLink></li>
        </ul>
      </nav>
  );
}
export default NavBar;

