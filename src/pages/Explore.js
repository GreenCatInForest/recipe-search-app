import Stack from "@mui/material/Stack";

import { Footer } from "../components/Footer";
import { SearchForm } from "../components/SearchForm";
import { RecipesContainer } from "../components/RecipesContainer";

export const Explore = () => {
  return (
    <Stack spacing={3}>
      <SearchForm />
      <RecipesContainer />
    </Stack>
  );
};
