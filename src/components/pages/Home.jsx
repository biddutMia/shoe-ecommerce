import { Box, Button, Container } from "@mui/material";
import TopHeader from "../shared/main-menu/MainMenu";
import SubMenu from "../shared/sub-menu/SubMenu";
import { bannerTextContainer } from "../../style.module.css";
import Footer from "../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import ShowProduct from "../shared/showProduct/ShowProduct";

const Home = () => {
  const { shop } = useStoreState((state) => state);
  const shopProduct = shop.shopItems.slice(0, 6);

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Box>
        <Box sx={{ position: "relative", marginTop: "98px" }}>
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
                <Button
                  variant="contained"
                  component={Link}
                  sx={{ position: "absolute" }}
                  to="/shop"
                >
                  shop now
                </Button>
              </Box>
            </Container>
            <Container maxWidth="md" sx={{ marginTop: "40px" }}>
              <ShowProduct title="Shop Product" products={shopProduct} />

              <Box sx={{ margin: "100px 0px 20px 0px" }}>
                <ShowProduct
                  title="Best Selling Products"
                  slideItems={true}
                  products={shopProduct}
                />
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
