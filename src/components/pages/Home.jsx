import { Box, Button, Container, Typography } from "@mui/material";
import TopHeader from "../shared/main-menu/MainMenu";
import SubMenu from "../shared/sub-menu/SubMenu";
import { bannerTextContainer } from "../../style.module.css";

const Home = () => {
  return (
    <Box>
      <TopHeader />
      <SubMenu />

      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          sx={{
            height: "auto",
            width: "100%",
          }}
          alt="The house from the offer."
          src="/img/bannerShoe.jpg"
        />
        <Box>
          <Container maxWidth="md">
            <Box className={bannerTextContainer}>
              <Box sx={{ color: "red" }}>25% discount</Box>
              <Button variant="contained" sx={{ position: "absolute" }}>
                shop now
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
