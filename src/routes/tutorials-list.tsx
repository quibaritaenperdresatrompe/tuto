import { useLoaderData } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Tutorial } from "../types/tutorial";
import TutorialCard from "../components/TutorialCard";

export default function TutorialsList() {
  const { tutorials } = useLoaderData() as { tutorials: Tutorial[] };
  return (
    <Box maxWidth="md">
      <Typography variant="h1" mb={8}>
        Tous les tutoriels
      </Typography>
      <Typography mb={2}>{tutorials.length} tutoriel(s)</Typography>
      <Grid container spacing={4} flexWrap="wrap">
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
    </Box>
  );
}
