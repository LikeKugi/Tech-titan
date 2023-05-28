import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import usersService from "../../../services/users.service";
import {useDispatch} from "react-redux";
import {signUp} from "../../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

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
      <form onSubmit={handleSubmit(logIn)}>
        <input type="text"
               {...register('email', {required: true})}
               placeholder='Логин'/>
        <input type="password"
               {...register('password', {required: true})}
               placeholder='Пароль'/>
        <button type="submit">{title}</button>
      </form>
  );
}

export default LoginForm;