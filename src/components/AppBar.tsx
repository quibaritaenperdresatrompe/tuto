import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import UserMenu from "./UserMenu";

function AppBar() {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography
          variant="button"
          component={Link}
          to="/"
          sx={{ textDecoration: "none" }}
          color="inherit"
        >
          Tuto
        </Typography>
        <Box flexGrow={1} />
        <UserMenu />
      </Toolbar>
    </MuiAppBar>
  );
}
export default AppBar;
