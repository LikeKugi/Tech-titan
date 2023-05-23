import {useState} from "react";

const LoginForm = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
      <form>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='Password'/>
        <button onClick={handleClick}>{title}</button>
      </form>
  );
}
export default LoginForm;