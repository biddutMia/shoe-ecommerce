import { Box, Container, CssBaseline } from "@mui/material";

import Shop from "../pages/shop/Shop";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";

import { Route, Routes } from "react-router-dom";
import WishList from "../pages/wishList/WishLish";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </Box>
  );
};

export default App;
