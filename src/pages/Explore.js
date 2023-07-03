import { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import { RecipesContainer } from "../components/RecipesContainer";
import { SearchForm } from "../components/SearchForm";

export const Explore = () => {
  const [recipes, setRecipes] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      const fetchData = async () => {
        try {
          setError(false);
          setIsLoading(true);

          const { data } = await axios.get(
            "https://api.spoonacular.com/recipes/complexSearch",
            {
              params: {
                apiKey: process.env.REACT_APP_X_API_QUOTA_REQUEST,
                searchQuery,
                addRecipeNutrition: true,
                addRecipeInformation: true,
              },
            }
          );

          setIsLoading(false);
          setRecipes(data.results);
        } catch (err) {
          setRecipes();
          setIsLoading(false);
          setError(true);
        }
      };

      fetchData();
    }
  }, [searchQuery]);

  return (
    <Stack spacing={3}>
      <SearchForm setSearchQuery={setSearchQuery} />
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {error && (
        <Alert severity="error">
          Something went wrong. Please try again later.
        </Alert>
      )}
      {recipes && <RecipesContainer recipes={recipes} />}
    </Stack>
  );
};
