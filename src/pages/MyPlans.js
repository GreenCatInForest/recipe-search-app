import Stack from "@mui/material/Stack";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { useState } from "react";

export const MyPlans = () => {
  const [myRecipes, setMyRecipes] = useState(getFromLocalStorage("recipes"));

  return <Stack>My Plans</Stack>;
};
