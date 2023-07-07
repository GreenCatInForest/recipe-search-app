import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Image from "mui-image";

import foodHomePicture from "../img/foodHomePicture.png";

// import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

export const Banner = () => {
  // const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: ["Pacifico"].join(","),
    },
  });

  return (
    <Paper elevation={5}>
      <Stack
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ p: 3 }}
        spacing={3}
      >
        <Image src={foodHomePicture} width={200} />

        <Stack
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          spacing={2}
        >
          <ThemeProvider theme={theme}>
            <Typography sx={{ fontSize: "3.5rem" }}>
              Happy & Healthy Recipes
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Typography component="h1">Love your food every day!</Typography>
          </ThemeProvider>
          <Typography component="h2">
            Make your own collection of recipes with calories and nutrition
            value.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
