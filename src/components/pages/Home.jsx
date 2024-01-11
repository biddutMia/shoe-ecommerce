import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TopHeader from "../shared/main-menu/MainMenu";
import SubMenu from "../shared/sub-menu/SubMenu";
import { bannerTextContainer } from "../../style.module.css";
import Footer from "../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import ProductCard from "../shared/card/Card";

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
              <Typography
                variant="h5"
                component="span"
                sx={{ borderBottom: "4px solid red", paddingBottom: "5px" }}
              >
                Shop Products
              </Typography>
              <Box sx={{ marginTop: "30px" }}>
                <Grid container spacing={1}>
                  {shopProduct.length !== 0 &&
                    shopProduct.map((item, ind) => {
                      const {
                        id,
                        description,
                        imgURL,
                        imgAlt,
                        name,
                        price,
                        type,
                      } = item;
                      return (
                        <Grid item md={4} key={id} sm={6} xs={12} xl={3}>
                          <ProductCard
                            imgUrl={imgURL}
                            id={id}
                            name={name}
                            description={description}
                            price={price}
                            imgAlt={imgAlt}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px 0px",
                }}
              >
                <Button variant={"contained"} component={Link} to="/shop">
                  {" "}
                  show more
                </Button>
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
