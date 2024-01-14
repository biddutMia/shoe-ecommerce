import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useStoreState } from "easy-peasy";
import TopHeader from "../../shared/main-menu/MainMenu";
import SubMenu from "../../shared/sub-menu/SubMenu";
import Footer from "../../shared/Footer/Footer";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ShowProduct from "../../shared/showProduct/ShowProduct";
import ProductPagination from "../../shared/pagination/Pagination";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./shop.css";
const categories = ["all", "man", "woman", "kid"];

const Shop = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(categories[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (e, newValue) => {
    setSearch(newValue);
    console.log("new", newValue);
  };

  useEffect(() => {
    navigate(`/shop?page=${page}&search=${search}`);
  }, [page, search]);

  const pageNo = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 0;

  const searchText = searchParams.get("search");

  const startInd = pageNo ? (pageNo - 1) * 9 : 0;
  const endInd = startInd + 9;

  const { shop } = useStoreState((state) => state);
  let filterShopItems = shop.shopItems.filter(
    (item) => item.type == searchText
  );
  filterShopItems =
    filterShopItems.length > 0 ? filterShopItems : shop.shopItems;

  const shopItems = filterShopItems.slice(startInd, endInd);
  const numberOfPagination = Math.ceil(filterShopItems.length / 9);

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth="md" sx={{ marginTop: "130px" }}>
        <Stack direction={"row"}>
          <Box sx={{ flexGrow: "1" }}>
           
          </Box>
          <Box>
            <div>
              <br />
              <Autocomplete
                size="small"
                search={search}
                onChange={handleChange}
                // inputValue={search}
                id="controllable-states-demo"
                options={categories}
                sx={{ width: "150px" }}
                renderInput={(params) => (
                  <TextField {...params} label="filter" />
                )}
              />
            </div>
          </Box>
        </Stack>

        <Box sx={{ marginTop: "20px" }}>
          <ProductPagination
            setPage={setPage}
            page={page}
            numberOfPagination={numberOfPagination}
          />
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <ShowProduct products={shopItems} show={true} />
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <ProductPagination
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
