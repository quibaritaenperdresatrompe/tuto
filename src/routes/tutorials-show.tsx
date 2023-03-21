import { Link, useLoaderData, useFetcher } from "react-router-dom";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Done from "@mui/icons-material/Done";

import { Tutorial } from "../types/tutorial";
import Code from "../components/Code";
import { useUserContext } from "../providers/UserProvider";

export default function TutorialShow() {
  const user = useUserContext();
  const { tutorial } = useLoaderData() as { tutorial: Tutorial };
  const fetcher = useFetcher();
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    if (tutorial.done) {
      setActiveStep(tutorial.instructions.length);
    }
  }, [tutorial.id, tutorial.instructions.length, tutorial.done]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    if (user) {
      fetcher.submit(null, {
        method: "post",
        action: `/tutorials/${tutorial.id}/reset`,
      });
    }
  };
  const handleFinish = () => {
    setActiveStep(tutorial.instructions.length);
    if (user) {
      fetcher.submit(null, {
        method: "post",
        action: `/tutorials/${tutorial.id}/finish`,
      });
    }
  };
  const handleShare = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.href);
  };
  const isFinish = activeStep === tutorial.instructions.length;
  const hasInstruction =
    tutorial.instructions && tutorial.instructions.length > 0;
  const [anchorLogin, setAnchorLogin] = useState<HTMLButtonElement | null>(
    null
  );
  const handleOpenLoginPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorLogin(event.currentTarget);
    handleFinish();
    setTimeout(() => {
      setAnchorLogin(null);
    }, 3000);
  };
  const handleCloseLoginPopover = () => {
    setAnchorLogin(null);
  };
  const openLoginPopover = Boolean(anchorLogin);
  const idLoginPopover = openLoginPopover ? "login-popover" : undefined;
  return (
    <Box maxWidth="md">
      <Toolbar component={Stack} direction="row" spacing={2}>
        <Button
          variant="outlined"
          size="small"
          component={Link}
          to="/tutorials"
        >
          Tous les tutoriels
        </Button>
      </Toolbar>
      <Typography variant="h1" textAlign="center" mb={2}>
        {tutorial.title}
      </Typography>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        fontStyle="italic"
        textAlign="center"
        mb={2}
      >
        Publié le {tutorial.publishedAt} par {tutorial.publishedBy}
      </Typography>
      <Toolbar
        sx={{ mb: 8 }}
        component={Stack}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        {tutorial.instructions.length > 0 && (
          <>
            <fetcher.Form>
              <Button
                variant="outlined"
                size="small"
                onClick={user ? handleFinish : handleOpenLoginPopover}
                startIcon={isFinish ? <Done /> : null}
                disabled={isFinish}
                aria-describedby={idLoginPopover}
              >
                {isFinish ? "Terminé" : "Marquer comme terminé"}
              </Button>
            </fetcher.Form>
            <Popover
              id={idLoginPopover}
              open={openLoginPopover}
              anchorEl={anchorLogin}
              onClose={handleCloseLoginPopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{ m: 2 }}
            >
              <Stack spacing={2} alignItems="center" maxWidth={320} p={2}>
                <Typography>
                  Pour garder en mémoire les tutoriels terminés il est
                  nécessaire de se connecter.
                </Typography>
                <Button variant="contained" component={Link} to="/login">
                  Se connecter
                </Button>
              </Stack>
            </Popover>
          </>
        )}
        <Button
          variant={open ? "outlined" : "contained"}
          size="small"
          onClick={handleShare}
          disabled={open}
        >
          Partager
        </Button>
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={2000}
          message="Url de partage copiée dans le presse-papier"
        />
      </Toolbar>
      {hasInstruction ? (
        <Stepper activeStep={activeStep} orientation="vertical">
          {tutorial.instructions.map((step, index) => {
            const isLastStep = index === tutorial.instructions.length - 1;
            return (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    isLastStep ? (
                      <Typography variant="caption">Dernière étape</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Stack spacing={2} mb={2}>
                    <Typography>{step.description}</Typography>
                    <Code content={step.command} />
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" onClick={handleNext}>
                        {isLastStep ? "Terminer" : "Continuer"}
                      </Button>
                      <Button disabled={index === 0} onClick={handleBack}>
                        Retour
                      </Button>
                    </Stack>
                  </Stack>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      ) : (
        <Typography>Aucune instruction pour le moment.</Typography>
      )}
      {hasInstruction && activeStep === tutorial.instructions.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography>Tu as terminé le tutoriel, bravo !</Typography>
            <Stack direction="row" spacing={1}>
              <Button
                variant={open ? "outlined" : "contained"}
                onClick={handleShare}
                disabled={open}
              >
                Partager
              </Button>
              <Button onClick={handleReset}>Réinitialiser</Button>
            </Stack>
          </Stack>
        </Paper>
      )}
    </Box>
  );
}
