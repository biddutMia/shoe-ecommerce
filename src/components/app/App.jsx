import { Box, Container, CssBaseline } from "@mui/material";

import Home from "../pages/Home/Home";
import Shop from "../pages/shop/Shop";
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
