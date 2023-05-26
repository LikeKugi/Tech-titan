import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

const Intern = (props) => {
  return (
      <Box sx={{
          width: '100%',
          height: '100%',
      }}>
          <Outlet />
      </Box>
  );
}
export default Intern;