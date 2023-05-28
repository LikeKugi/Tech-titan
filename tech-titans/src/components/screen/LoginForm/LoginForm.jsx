import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import usersService from "../../../services/users.service";
import {useDispatch} from "react-redux";
import {signUp} from "../../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

import './LoginForm.css'

const LoginForm = ({title}) => {
  const navigate = useNavigate();
  const {register, reset, handleSubmit} = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const {mutate} = useMutation(['logIn'], (data) => usersService.logIn(data), {
    onSuccess: (data) => {
      dispatch(signUp(data));
      reset();
    },
  });
  const logIn = (data) => {
    mutate(data);
    navigate('/');
  }

  return (
      <form onSubmit={handleSubmit(logIn)} className='login'>
        <label className='login__label'>
          <span className='login__text'>Логин: </span>
          <input className='login__input' type="text" autoFocus
                 {...register('email', {required: true})}
                 placeholder='Логин'/>
        </label>
        <label className='login__label'>
          <span className='login__text'>Пароль: </span>
          <input className='login__input' type="password"
                 {...register('password', {required: true})}
                 placeholder='Пароль'/>
        </label>

        <button type="submit" className='login__btn'>{title}</button>
      </form>
  );
}

export default LoginForm;