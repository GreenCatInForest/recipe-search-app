import { BrowserRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <Stack spacing={3}>
        <NavBar />
        <Box>
          <Container maxWidth="lg">
            <AppRoutes />
          </Container>
        </Box>
      </Stack>
    </BrowserRouter>
  );
};
