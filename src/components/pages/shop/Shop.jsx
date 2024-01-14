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
import FilterAndSort from "../../shared/filterAndSort/FilterAndSort";
const filterOptions = ["all", "man", "woman", "kid"];
const sortOptions = ["default", "Low to High", "High to Low"];

const sortProduct = (arr, text) => {
  if (text == "Low to High") {
    arr = arr.toSorted((a, b) => a.price - b.price);
    return arr;
  } else if (text == "High to Low") {
    arr = arr.toSorted((a, b) => b.price - a.price);
    return arr;
  } else {
    return arr;
  }
};

const Shop = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(filterOptions[0]);
  const [sort, setSort] = useState(sortOptions[0]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const pageNo = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 0;

  const filterText = searchParams.get("filter");
  const sortText = searchParams.get("sort");

  const startInd = pageNo ? (pageNo - 1) * 9 : 0;
  const endInd = startInd + 9;

  const { shop } = useStoreState((state) => state);
  let filterShopItems = shop.shopItems.filter(
    (item) => item.type == filterText
  );
  filterShopItems =
    filterShopItems.length > 0 ? filterShopItems : shop.shopItems;

  filterShopItems = sortProduct(filterShopItems, sortText);
  console.log("filterText", filterShopItems);

  const shopItems = filterShopItems.slice(startInd, endInd);
  const numberOfPagination = Math.ceil(filterShopItems.length / 9);

  useEffect(() => {
    navigate(`/shop?page=${page}&sort=${sort}&filter=${filter}`);
  }, [page, filter, sort]);

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth="md" sx={{ marginTop: "130px" }}>
        <Stack direction={"row"}>
          <Box flexGrow={1}></Box>
          <Box>
            <FilterAndSort
              options={sortOptions}
              getData={setSort}
              title="sort"
            />
          </Box>

          <Box sx={{ margin: "0px 40px 0px 10px" }}>
            <FilterAndSort
              options={filterOptions}
              getData={setFilter}
              title="filter"
            />
          </Box>
        </Stack>

        <Box sx={{ marginTop: "10px" }}>
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
