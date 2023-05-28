import {selectUserRole} from "../../../store/slices/userSlice";
import {useSelector} from "react-redux";

const HomePage = () => {
  const currentRole = useSelector(selectUserRole)
  return (
      <section>
        <h2>Главная страница</h2>
        {currentRole && <p>Добро пожаловать, {currentRole}</p>}
      </section>);
}
export default HomePage;
