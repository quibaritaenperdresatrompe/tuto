import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Tutorial } from "../types/tutorial";

export default function TutorialCard({
  id,
  title,
  publishedBy,
  done,
}: Pick<Tutorial, "id" | "title" | "publishedBy" | "done">) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: " column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1}>
          <Typography>{title}</Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            fontStyle="italic"
          >
            par {publishedBy}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button
          variant={done ? "outlined" : "contained"}
          component={Link}
          to={`/tutorials/${id}`}
        >
          {done ? "Lire à nouveau" : "Lire"}
        </Button>
      </CardActions>
    </Card>
  );
}
