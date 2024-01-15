import { Box, Container, CssBaseline } from "@mui/material";

import Shop from "../pages/shop/Shop";
import Home from "../pages/home/Home";

import { Route, Routes } from "react-router-dom";
import CartAndWishLists from "../pages/cartAndWishLists/CartAndWishLists";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartAndWishLists />} />
      </Routes>
    </Box>
  );
};

export default App;
