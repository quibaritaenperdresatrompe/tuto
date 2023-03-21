import { Link, useFetcher } from "react-router-dom";
import { MouseEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Person2Rounded from "@mui/icons-material/Person2Rounded";

import { useUserContext } from "../providers/UserProvider";

function UserMenu() {
  const fetcher = useFetcher();
  const user = useUserContext();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    fetcher.submit(null, { method: "post", action: "/logout" });
  };

  if (!user) {
    return (
      <Button variant="outlined" size="small" component={Link} to="/login">
        Se connecter
      </Button>
    );
  }

  return (
    <Box>
      <Button
        onClick={handleOpenUserMenu}
        variant="outlined"
        size="small"
        startIcon={<Person2Rounded />}
      >
        Mon profil
      </Button>
      <Menu
        sx={{ mt: "45px" }}
        id="usermenu"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        data-testid="menu"
      >
        <MenuItem onClick={handleSignOut}>
          <Typography textAlign="center">Se déconnecter</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default UserMenu;
