import './Authorization.css';
import LoginForm from "../../screen/LoginForm/LoginForm";
import {useState} from "react";
import {Link} from "react-router-dom";

const authState = {
  1: {
    title: 'Вход',
    btn: 'Зарегистрироваться',
  },
  2: {
    title: 'Регистрация',
    btn: 'Уже есть аккаунт',
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
          <Link to={'/'} className='authorization__close'>&#10060;</Link>
          <h2 className='authorization__title'>{authState[auth].title}</h2>
          <LoginForm title={authState[auth].title} handleClick='{}'/>
          <button onClick={btnState} className='authorization__toggle'>{authState[auth].btn}</button>
        </div>
      </div>
  );
}
export default Authorization;