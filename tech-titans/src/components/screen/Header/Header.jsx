import {useDispatch, useSelector} from "react-redux";
import {logOut, selectIsLoggedIn} from "../../../store/slices/userSlice";
import {Link} from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Container from "../Container/Container";

import './Header.css'

const Header = () => {
  const dispatch = useDispatch();
  const currentLogged = useSelector(selectIsLoggedIn);
  const logOutUser = () => {
    console.log('header logout');
    dispatch(logOut());
  }
  return (
      <header className='header'>
        <Container>
          <div className='header__bar'>
            <NavBar/>
            {!currentLogged && <Link to={'/login'}>Войти</Link>}
            {currentLogged && (<div className="header__box-log">
              <Link to={'/profile'} style={{marginRight: '1rem'}}>Profile</Link>
              <button type="button" onClick={logOutUser}>Выйти</button>
            </div>)}
          </div>
        </Container>
      </header>
  );
}
export default Header;