import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Container from "../Container/Container";

import './Header.css'

const Header = (props) => {
  return (
      <header className='header'>
        <Container>
          <h2 className='header__title'>Header</h2>
          <div className='header__bar'>
            <NavBar/>
            <Link to={'/login'}>Login</Link>
          </div>
        </Container>
      </header>
  );
}
export default Header;