import {createContext} from "react";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../store/slices/userSlice";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const currentLogged = useSelector(selectIsLoggedIn);
  return (
      <AuthContext.Provider value={{currentLogged}}>
          {children}
      </AuthContext.Provider>
  );
}
export default AuthProvider;