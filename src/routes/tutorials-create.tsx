import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Tutorial } from "../types/tutorial";
import BackButton from "../components/BackButton";

export default function TutorialsCreate() {
  const { handleSubmit } = useForm<Tutorial>();
  const onValid = (data: Tutorial) => {};
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
      <Stack
        component="form"
        onSubmit={handleSubmit(onValid)}
        spacing={2}
        my={8}
      ></Stack>
    </Box>
  );
}
