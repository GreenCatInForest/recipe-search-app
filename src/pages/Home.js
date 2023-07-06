import Stack from "@mui/material/Stack";

import { Banner } from "../components/Banner";
import { Features } from "../components/Features";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <Stack spacing={3}>
      <Banner />
      <Features />
      <AboutUs />
      <Footer />
    </Stack>
  );
};
