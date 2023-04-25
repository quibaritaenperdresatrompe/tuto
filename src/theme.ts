import "@fontsource/work-sans";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 14,
      h1: {
        fontSize: "4em",
        fontWeight: 700,
      },
      h2: {
        fontSize: "3em",
        fontWeight: 700,
      },
      h3: {
        fontSize: "2em",
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
      error: { main: "#e796ba" },
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
