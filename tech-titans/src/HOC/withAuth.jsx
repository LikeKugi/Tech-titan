import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";
import Authorization from "../components/pages/Authorization/Authorization";

const withAuth = (Component) => (props) => {
    const {currentLogged} = useContext(AuthContext);
    if (!currentLogged) {
        return (
            <Authorization />);
    }
  return (
      <Component {...props}/>
  );
}
export default withAuth;