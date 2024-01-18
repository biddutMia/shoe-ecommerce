import { Box, Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/shop/Shop";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import WishList from "../pages/wishList/WishLish";
import Login from "../pages/login/Login";
import SignIn from "../pages/signin/SignIn";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Box>
  );
};

export default App;
