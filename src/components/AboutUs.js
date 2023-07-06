import * as React from "react";
import { createTheme, Stack, Typography, ThemeProvider } from "@mui/material";

export const AboutUs = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Pacifico"].join(","),
    },
  });

  return (
    <Stack>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
          component="div"
          textAlign="center"
          marginTop="20px"
        >
          About Us
        </Typography>
      </ThemeProvider>
    </Stack>
  );
};
