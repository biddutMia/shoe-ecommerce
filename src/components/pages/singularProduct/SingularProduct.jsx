import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TopHeader from "../../shared/main-menu/MainMenu";
import SubMenu from "../../shared/sub-menu/SubMenu";
import Footer from "../../shared/Footer/Footer";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams, useSearchParams } from "react-router-dom";
import IncreaseAndDecrease from "../../shared/increaseAndDecreaseBtn/IncreaseAndDecrease";

const SingularProduct = () => {
  const { index } = useParams();
  const store = useStoreState((state) => state);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("store-title");
  const { id, name, imgURL, imgALt, description, price } =
    store[queryParam].shopItems[index];
  const { incrementCartItem, decrementCartItem, addToCart } = useStoreActions(
    (actions) => actions.cart
  );

  // console.log("in", incrementCartItem, "de", decrementCartItem);

  return (
    <Box>
      <TopHeader />
      <SubMenu />

      <Container maxWidth={"md"} sx={{ marginTop: "120px" }}>
        <Grid container sx={{ background: "#F2F4F4" }}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                padding: "20px",
                aspectRatio: "1/1",
                borderRadius: "5px",
              }}
            >
              <img
                src={imgURL}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} sx={{ padding: "20px" }}>
            <Box sx={{ background: "white", padding: "1px" }}>
              <Box sx={{ margin: "20px" }}>
                <Typography variant="h4" sx={{ marginTop: "10px" }}>
                  {name}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{ margin: "10px 0px", color: "blue" }}
                >
                  Tk. {price}
                </Typography>

                <Typography variant="body2"> {description}</Typography>

                <Box
                  sx={{
                    margin: "20px 0px",
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <IncreaseAndDecrease
                    increase={incrementCartItem}
                    decrease={decrementCartItem}
                    id={id}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => addToCart(id)}
                  >
                    add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default SingularProduct;
