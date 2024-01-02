import { Box, Container, CssBaseline } from "@mui/material";
import TopHeader from "../top-header/TopHeader";
import Home from "../pages/Home";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Home />
      <Container maxWidth="md">test</Container>
    </Box>
  );
};

export default App;
