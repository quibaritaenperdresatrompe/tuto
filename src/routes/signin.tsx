import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import PasswordInput from "../components/PasswordInput";

type Credentials = { email: string; password: string };

export default function SignIn() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    watch,
    register,
    setError,
    formState: { errors },
  } = useForm<Credentials>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onValid = async (data: Credentials) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate(-1);
    } catch (error) {
      setError("root", {
        type: "custom",
        message: "Oops !",
      });
    }
  };

  const disabled =
    watch("email").length === 0 || watch("password").length === 0;

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" textAlign="center" mb={8}>
        Envie de nous rejoindre ?
      </Typography>
      <Typography textAlign="center" mb={2}>
        Pour accéder à davantage de fonctionnalités tu dois créer un compte.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        component={Link}
        to="/"
        sx={{ mb: 2 }}
      >
        Revenir à l'accueil
      </Button>
      <Stack
        component="form"
        onSubmit={handleSubmit(onValid)}
        spacing={2}
        my={8}
      >
        <TextField
          id="email"
          type="email"
          label="Adresse e-mail"
          variant="outlined"
          size="small"
          {...register("email")}
          inputProps={{ "data-testid": "email-input" }}
          error={Boolean(errors.root)}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput {...field} error={Boolean(errors.root)} />
          )}
        />
        {Boolean(errors.root) && (
          <Typography color="error">{errors.root?.message}</Typography>
        )}
        <Button type="submit" variant="contained" disabled={disabled}>
          Créer mon compte
        </Button>
      </Stack>
    </Container>
  );
}
