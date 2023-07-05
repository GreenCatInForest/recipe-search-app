import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { RecipeCard } from "../components/RecipeCard";

export const MyPlans = () => {
  const [myRecipes, setMyRecipes] = useState(getFromLocalStorage("recipes"));

  return (
    <Stack>
      {myRecipes.length === 0 ? (
        <Box>
          <Typography>
            You don't have any recipes, please add some recipes to your plan.
          </Typography>
        </Box>
      ) : (
        myRecipes.map((myRecipe) => <RecipeCard recipe={myRecipe} />)
      )}
    </Stack>
  );
};
