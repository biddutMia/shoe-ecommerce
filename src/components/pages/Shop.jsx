import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useStoreState } from "easy-peasy";
import TopHeader from "../shared/main-menu/MainMenu";
import SubMenu from "../shared/sub-menu/SubMenu";
import Footer from "../shared/Footer/Footer";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ProductCard from "../shared/card/Card";
import ShowProduct from "../shared/showProduct/ShowProduct";
import ProducPagination from "../shared/pagination/Pagination";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const categories = ["man", "woman", "kid"];

const Shop = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/shop?page=${page}`);
  }, [page]);

  const pageNo = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 0;
  const startInd = pageNo ? (pageNo - 1) * 9 : 0;
  const endInd = startInd + 9;

  const { shop } = useStoreState((state) => state);
  const shopItems = shop.shopItems.slice(startInd, endInd);
  const numberOfPagination = Math.ceil(shop.shopItems.length / 9);

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth="md" sx={{ marginTop: "130px" }}>
        <Stack direction={"row"}>
          <Box sx={{ flexGrow: "1" }}></Box>
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={categories}
              sx={{ width: 200 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="FILTER" />}
            />
          </Box>
        </Stack>

        <Box sx={{ marginTop: "20px" }}>
          <ProducPagination
            setPage={setPage} 
            page={page}
            numberOfPagination={numberOfPagination}
          />
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <ShowProduct products={shopItems} show={true} />
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <ProducPagination
            setPage={setPage}
            page={page}
            numberOfPagination={numberOfPagination}
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Shop;
