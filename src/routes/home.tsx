import { Link, useLoaderData } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Tutorial } from "../types/tutorial";
import CreateTutorialInvitation from "../components/CreateTutorialInvitation";
import TutorialCard from "../components/TutorialCard";

export default function Home() {
  const { tutorials } = useLoaderData() as { tutorials: Tutorial[] };
  return (
    <Box maxWidth="md">
      <Typography variant="h1" mb={8}>
        Tuto, un jour un tutoriel
      </Typography>
      <Typography mb={2}>Les derniers tutoriels</Typography>
      <Grid container spacing={4} mb={8}>
        {tutorials.map(({ id, title, publishedBy, done }) => (
          <Grid item xs={12} md={3} key={id}>
            <TutorialCard
              id={id}
              title={title}
              publishedBy={publishedBy}
              done={done}
            />
          </Grid>
        ))}
      </Grid>
      <Typography mb={2}>Ce n'est pas assez ?</Typography>
      <Button
        variant="contained"
        component={Link}
        to="/tutorials"
        sx={{ mb: 8 }}
      >
        Voir tous les tutoriels
      </Button>
      <CreateTutorialInvitation />
    </Box>
  );
}
