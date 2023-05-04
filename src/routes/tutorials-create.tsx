import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import BackButton from "../components/BackButton";

export default function TutorialsCreate() {
  return (
    <Box maxWidth="md">
      <Toolbar component={Stack} direction="row" spacing={2}>
        <BackButton size="small" variant="outlined">
          Annuler
        </BackButton>
      </Toolbar>
      <Typography variant="h1" mb={8}>
        Nouveau tuto
      </Typography>
    </Box>
  );
}
