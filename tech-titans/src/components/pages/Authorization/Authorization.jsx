import './Authorization.css';
import LoginForm from "../../screen/LoginForm/LoginForm";
import {useState} from "react";
import {Link} from "react-router-dom";

const authState = {
  1: {
    title: 'Войти',
    btn: 'Зарегистрироваться',
  },
  2: {
    title: 'Зарегистрироваться',
    btn: 'уже есть аккаунт',
  },
};

const Authorization = () => {
  const [auth, setAuth] = useState(1);
  const login = () => {
    setAuth(1);
  }
  const register = () => {
    setAuth(2);
  }
  const btnState = () => {
    if (auth === 1) {
      register();
    } else if (auth === 2) {
      login();
    }
  }
  return (
      <div className='back'>
        <div className='authorization'>
          <h2>{authState[auth].title}</h2>
          <LoginForm title={authState[auth].title} handleClick='{}'/>
          <button onClick={btnState}>{authState[auth].btn}</button>
          <Link to={'/'}>Close</Link>
        </div>
      </div>
  );
}
export default Authorization;