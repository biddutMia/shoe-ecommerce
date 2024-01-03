import { Box, Container, CssBaseline } from "@mui/material";
import TopHeader from "../shared/main-menu/MainMenu";
import Home from "../pages/Home";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Home />
      <Container maxWidth="md"></Container>
    </Box>
  );
};

export default App;
