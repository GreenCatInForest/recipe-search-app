import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// import { useNavigate } from "react-router-dom";
import * as React from 'react';

export const Banner = () => {
  // const navigate = useNavigate();
  
  return (
    <Paper elevation={3}>
      <Stack
        alignContent="center"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Typography component="h1" variant="h5">
          Title
        </Typography>
        <Typography component="h2" variant="caption">
         Sub-Title
        </Typography>
        <Typography>
          Review-Text
        </Typography>                
      </Stack>
    </Paper>
  );
};