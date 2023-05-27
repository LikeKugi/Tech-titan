import {selectUserRole, selectIsLoggedIn} from "../../../store/slices/userSlice";
import {useSelector} from "react-redux";

const HomePage = (props) => {
  const currentRole = useSelector(selectUserRole)
  const currentLogged = useSelector(selectIsLoggedIn)
  return (
      <section>
        <h2>Main</h2>
        <p>{currentRole}</p>
        <p>{currentLogged.toString()}</p>
      </section>);
}
export default HomePage;

// redirect("/login")