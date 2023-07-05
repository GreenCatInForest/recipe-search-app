import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const RecipeCard = ({ recipe }) => {
  console.log(recipe);

  const percentCarbs = recipe.nutrition.caloricBreakdown.percentCarbs;
  const percentFat = recipe.nutrition.caloricBreakdown.percentFat;
  const percentProtein = recipe.nutrition.caloricBreakdown.percentProtein;

  const totalCalories = recipe.nutrition.nutrients[0].amount;
  const percentOfDailyNeedCalories =
    recipe.nutrition.nutrients[0].percentOfDailyNeeds;

  const diets = recipe.diets.toString();
  console.log(diets);

  const createData = (name, value) => {
    return { name, value };
  };

  const rows = [
    createData("Total calories", totalCalories),
    createData("Percent of your daily calories", percentOfDailyNeedCalories),
    createData("Carbons", percentCarbs),
    createData("Fat", percentFat),
    createData("Protein", percentProtein),
    createData("Type of diets", diets),
  ];

  const itemsFromLS = getFromLocalStorage("recipes");

  const [isRecipesInLs, setIsRecipesInLs] = useState(
    itemsFromLS.find((itemFromLS) => {
      return itemFromLS.id === recipe.id;
    })
  );

  const handleAddRecipeToMyPlans = () => {
    const newItems = [...itemsFromLS, recipe];
    localStorage.setItem("recipes", JSON.stringify(newItems));
    setIsRecipesInLs(true);
  };

  const handleRemoveRecipeFromMyPlans = () => {
    const newItems = itemsFromLS.filter((itemsFromLS) => {
      return itemsFromLS.id !== recipe.id;
    });
    localStorage.setItem("recipes", JSON.stringify(newItems));
    setIsRecipesInLs(false);
  };

  return (
    <Card sx={{ maxWidth: 345, textAlign: "center" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h6">{recipe.title}</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent sx={{ flexDirection: "row", justifyContent: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Read the recipe:
          <IconButton aria-label="link go to recipe">
            <Link
              variant="outlined"
              aria-labelledby="heading-demo"
              href={recipe.sourceUrl}
              fontSize="md"
              borderRadius="sm"
              target="_blank"
            >
              <MenuBookIcon />
            </Link>
          </IconButton>
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 340 }} size="small" aria-label="a dense table">
            <TableHead></TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>

      <CardActions disableSpacing>
        {!isRecipesInLs ? (
          <IconButton
            aria-label="add to favorites"
            onClick={handleAddRecipeToMyPlans}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="add to favorites"
            onClick={handleRemoveRecipeFromMyPlans}
          >
            <FavoriteIcon />
          </IconButton>
        )}

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
