import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";

import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";
export const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <AppRoutes />
      </Box>
    </BrowserRouter>
  );
};
