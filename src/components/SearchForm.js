import * as React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

export const SearchForm = ({ setSearchQuery }) => {
  const onSubmit = ({ searchTerm }) => {
    setSearchQuery(searchTerm);
  };

  const formik = useFormik({
    initialValues: { searchTerm: "" },
    onSubmit,
    validationSchema: Yup.object({
      searchTerm: Yup.string().required("Please enter a product name"),
    }),
  });

  return (
    <Stack component="form" onSubmit={formik.handleSubmit} spacing={2}>
      <TextField
        error={formik.touched.searchTerm && !!formik.errors.searchTerm}
        helperText={formik.errors.searchTerm}
        name="searchTerm"
        type="search"
        label="Enter search term"
        value={formik.values.searchTerm}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" type="submit">
        Explore
      </Button>
    </Stack>
  );
};
