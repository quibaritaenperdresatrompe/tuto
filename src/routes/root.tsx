import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import AppBar from "../components/AppBar";

export default function Root() {
  return (
    <>
      <AppBar />
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 8,
        }}
      >
        <Outlet />
      </Container>
      <Box
        component="footer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={8}
        px={2}
        bgcolor="primary.dark"
      >
        <Typography variant="caption" color="textSecondary">
          Tuto 2023
        </Typography>
      </Box>
    </>
  );
}
