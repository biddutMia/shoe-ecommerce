import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import TopHeader from "../shared/main-menu/MainMenu";
import SubMenu from "../shared/sub-menu/SubMenu";
import Footer from "../shared/Footer/Footer";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ProductCard from "../shared/card/Card";

const top100Films = ["man", "woman", "kid"];

const Shop = () => {
  const { shop } = useStoreState((state) => state);
  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth="md" sx={{ marginTop: "120px" }}>
        {/* <Stack direction={"row"}>
          <Box sx={{ flexGrow: "1" }}></Box>
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label="FILTER" />}
            />
          </Box>
        </Stack> */}
        <Box sx={{ marginTop: "20px" }}>
          <Grid container>
            {shop.shopItems.length !== 0 &&
              shop.shopItems.map((item) => {
                const { id, description, imgURL, imgAlt, name, price, type } =
                  item;

                return (
                  <Grid item xs={12} sm={6} md={4} key={id}>
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
      </Container>
      <Footer />
    </Box>
  );
};

export default Shop;
