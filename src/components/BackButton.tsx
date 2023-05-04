import { useNavigate } from "react-router-dom";
import { MouseEvent, useCallback } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

function BackButton({ children = "Retour", ...props }: ButtonProps) {
  const navigate = useNavigate();
  const handleGoBack = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate(-1);
    },
    [navigate]
  );
  return (
    <Button
      variant="contained"
      onClick={handleGoBack}
      sx={{ mb: 2 }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default BackButton;
