import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";

import { Banner } from "./components/Banner";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";
export const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Banner title="Recipies App" subTitle="Burn your calories" />
        <AppRoutes />
      </Box>
    </BrowserRouter>
  );
};
