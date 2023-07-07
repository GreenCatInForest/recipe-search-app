import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material";

import aDish from "../img/aDish.png";
import severalDishes from "../img/severalDishes.png";
import menu from "../img/menu.png";

export const Features = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Pacifico"].join(","),
    },
  });
  return (
    <Stack spacing={3}>
      <ThemeProvider theme={theme}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          textAlign="center"
          marginTop="20px"
        >
          Features
        </Typography>
      </ThemeProvider>
      <Stack
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Card
          sx={{
            maxWidth: 345,
            justifyContent: "center",
            height: "351",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height={300}
              image={aDish}
              alt="a fancy dish"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="center"
              >
                More than 1000 recipes
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, height: "351" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={280}
              image={severalDishes}
              alt="a fancy dishes"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="center"
              >
                Create your own diet plan
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, height: "351" }}>
          <CardActionArea>
            <CardMedia component="img" image={menu} alt="a menu picture" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="center"
              >
                Keep on track calories & nutrition
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );
};
