import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { RecipeCard } from "../components/RecipeCard";

export const RecipesContainer = ({ recipes }) => {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>
        Recipes
      </Typography>

      <Divider />

      <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </Stack>
    </Stack>
  );
};
