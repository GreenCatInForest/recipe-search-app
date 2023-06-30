import { Stack } from "@mui/material";
import { SearchForm } from "../components/SearchForm";
import { useEffect, useState } from "react";
import axios from "axios";

export const FoodSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=",
          {
            params: {
              searchQuery,
            },
            headers: {
              "X-API-Quota-Request": process.env.X_API_QUOTA_REQUEST,
            },
          }
        );
      };
      fetchData();
      console.log(fetchData());
    }
  }, [searchQuery]);

  return (
    <Stack>
      <SearchForm setSearchQuery={setSearchQuery} />
    </Stack>
  );
};
