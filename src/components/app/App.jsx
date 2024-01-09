import { Box, Container, CssBaseline } from "@mui/material";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import { Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog/Blog";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Box>
  );
};

export default App;
