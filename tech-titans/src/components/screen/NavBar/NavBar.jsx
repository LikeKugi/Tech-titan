import {Link} from "react-router-dom";

import './nav.css';

const NavBar = (props) => {
  const navClasses = props.parent ? `${props.parent}__nav nav` : 'nav';
  return (
      <nav className={navClasses}>
        <ul className='nav__list'>
          <li className='nav__item'><a className='nav__link' href="https://trudvsem.ru/" target="_blank" rel="noreferrer">Career portal</a></li>
          <li className='nav__item'><Link className='nav__link' to={'/news'}>News</Link></li>
          <li className='nav__item'><Link className='nav__link' to={'/career'}>Career</Link></li>
          <li className='nav__item'><Link className='nav__link' to={'/vacancies'}>Vacancies</Link></li>
        </ul>
      </nav>
  );
}
export default NavBar;