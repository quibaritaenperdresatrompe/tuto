import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useUserContext } from "../providers/UserProvider";

function CreateTutorialInvitation() {
  const user = useUserContext();
  if (!user) return null;
  return (
    <>
      <Typography mb={2}>Tu as l'âme d'un écrivain ?</Typography>
      <Button variant="contained" component={Link} to="/tutorials/new">
        Rédiger un tuto
      </Button>
    </>
  );
}

export default CreateTutorialInvitation;
