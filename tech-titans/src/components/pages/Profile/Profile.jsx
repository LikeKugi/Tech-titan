import {useSelector} from "react-redux";
import {selectUserRole} from "../../../store/slices/userSlice";
import Intern from "../../roles/Intern/Intern/Intern";

const Profile = (props) => {
  const currentRole = useSelector(selectUserRole);
  return (
      <section>
        <h2>Profile page</h2>
        <p>{currentRole}</p>
        {currentRole === 'intern' && <Intern />}
      </section>
  );
}
export default Profile;