import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { MyPlans } from "./pages/MyPlans";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/my-plans" element={<MyPlans />} />
    </Routes>
  );
};
