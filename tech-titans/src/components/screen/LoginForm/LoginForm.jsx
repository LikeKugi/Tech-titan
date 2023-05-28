import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import usersService from "../../../services/users.service";
import {useDispatch} from "react-redux";
import {signUp} from "../../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

import './LoginForm.css'
import {useState} from "react";

const LoginForm = ({title, registration}) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {register, reset, handleSubmit, formState: { errors }, clearErrors} = useForm({
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
    console.log(errors);
    if (registration) {
      if (data.password !== data.confirmPassword) {
        setError('Пароли должны совпадать');
        return;
      }
    }
    clearErrors()
    mutate(data);
    navigate('/');
  }

  return (
      <form onSubmit={handleSubmit(logIn)} className='login'>
        <label className='login__label'>
          <span className='login__text'>Логин: </span>
          <input className='login__input' type="text" autoFocus
                 {...register('nickname', {required: 'Нужен логин'})}
                 placeholder='Логин'/>
        </label>

        <label className='login__label'>
          <span className='login__text'>Пароль: </span>
          <input className='login__input' type="password"
                 {...register('password', {required: true})}
                 placeholder='Пароль'/>

        </label>
        {registration && <label className='login__label'>
          <span className='login__text'>Подтверждение пароля: </span>
          <input className='login__input'
                 type="password"
                 {...register('confirmPassword', {required: true})}
                 placeholder='Подтверждение пароля'/>

        </label>}

        {error && <p className='login__error'>{error}</p>}
        {errors.nickname && <p className='login__error input-error'>{'Нужен логин'}</p>}
        {errors.password && <p className='login__error input-error'>{'Нужен пароль'}</p>}
        {errors.confirmPassword && <p className='login__error input-error'>{'Подтвердите пароль'}</p>}

        <button type="submit" className='login__btn'>{title}</button>
      </form>
  );
}

export default LoginForm;