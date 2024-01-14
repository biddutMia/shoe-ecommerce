import { Box, Container, CssBaseline } from "@mui/material";

import Shop from "../pages/shop/Shop";
import Home from "../pages/home/Home";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Box>
  );
};

export default App;
