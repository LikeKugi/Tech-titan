import {useSelector} from "react-redux";
import {selectUserRole} from "../../../store/slices/userSlice";
import Intern from "../../roles/Intern/Intern/Intern";
import './Profile.css'

const Profile = () => {
  const currentRole = useSelector(selectUserRole);
  return (
      <section className='profile'>
        <h2>Профиль</h2>
        <p>Статус: {currentRole}</p>
        {currentRole === 'intern' && <Intern />}
      </section>
  );
}
export default Profile;