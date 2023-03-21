import "@fontsource/work-sans";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 14,
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      button: {
        fontWeight: 700,
      },
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#f2ff26",
      },
      secondary: {
        main: "#6bffb3",
      },
      background: {
        default: "#172713",
        paper: "#172713",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            fontWeight: 700,
          },
        },
      },
    },
  })
);

export default theme;
