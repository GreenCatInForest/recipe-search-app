import Stack from "@mui/material/Stack";

import { FoodSearch } from "../containers/FoodSearch";
import { RecipesContainer } from "../components/RecipesContainer";

export const Explore = () => {
  return (
    <Stack spacing={3}>
      <FoodSearch />
      <RecipesContainer />
    </Stack>
  );
};
