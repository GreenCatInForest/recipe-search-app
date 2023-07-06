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
    <Paper elevation={3}>
      <Stack
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "flex-start",
          }}
        >
          <Image src={foodHomePicture} />
        </Stack>
        <Stack
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography component="h1" variant="h5">
            Happy Recipes
          </Typography>
          <ThemeProvider theme={theme}>
            <Typography component="h2">Love your food every day!</Typography>
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
