import { forwardRef, MouseEvent, Ref, useState } from "react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordInput = forwardRef(function PasswordInput(
  props: OutlinedInputProps,
  ref: Ref<HTMLInputElement>
) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor="password">Mot de passe</InputLabel>
      <OutlinedInput
        id="password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={`${showPassword ? "Voir" : "Cacher"} le mot de passe`}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              data-testid="toggle-visibility-button"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Mot de passe"
        ref={ref}
        {...props}
        inputProps={{ "data-testid": "password-input" }}
      />
    </FormControl>
  );
});

export default PasswordInput;
