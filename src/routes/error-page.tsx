import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ErrorPage() {
  return (
    <Box
      maxWidth="md"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1" mb={8}>
        Oops !
      </Typography>
      <Typography mb={2}>
        Désolé, il y a un souci... cette page n'existe pas.
      </Typography>
      <Button variant="contained" component={Link} to="/tutorials">
        Voir tous les tutoriels
      </Button>
    </Box>
  );
}
