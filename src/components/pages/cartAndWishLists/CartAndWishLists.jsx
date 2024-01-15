import { Box, Button, Container, Stack, Typography } from "@mui/material";
import TopHeader from "../../shared/main-menu/MainMenu";
import SubMenu from "../../shared/sub-menu/SubMenu";
import { useStoreState } from "easy-peasy";
import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "../../shared/Footer/Footer";
import { cartTitle } from "../../../style.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CartAndWishLists = (pageTitle) => {
  const { shop } = useStoreState((state) => state);
  const { cart } = useStoreState((state) => state);
  const cartProductArr = Object.keys(cart.data);

  const cartData = shop.shopItems.reduce((prev, curr) => {
    cartProductArr.forEach((item) => {
      if (item == curr.id) {
        const { id, name, price } = curr;

        const cartDataItem = {
          id,
          name,
          price,
          item: cart.data[id].item,
        };

        prev.push(cartDataItem);
      }
    });

    // if (curr.id == cartProductArr[ind]) {
    //   const { id, name, price } = curr;

    //   const cartDataItem = {
    //     id,
    //     name,
    //     price,
    //     item: cart.data[id].item,
    //   };

    //   prev.push(cartDataItem);
    // }
    return prev;
  }, []);

  const subTotalCalc = cartData.reduce((prev, curr) => {
    const { price, item } = curr;
    return prev + price * item;
  }, 0);

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth="md">
        <Box sx={{ marginTop: "120px" }}>
          <Box
            className={cartTitle}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              aspectRatio: "1/0.2",
              background: "#EAECEE ",
              margin: "0 auto",
            }}
          >
            Your Shoping Cart Products
          </Box>

          {/* cart display table */}
          <Box sx={{ marginTop: "40px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>product name</StyledTableCell>
                    <StyledTableCell align="right">price</StyledTableCell>
                    <StyledTableCell align="right">quantity</StyledTableCell>
                    <StyledTableCell align="right">total price</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartData.map((row) => {
                    const { name, price, item } = row;

                    return (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{price}</StyledTableCell>
                        <StyledTableCell align="right">{item}</StyledTableCell>
                        <StyledTableCell align="right">
                          {price * item}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Checkout Box */}
          <Box sx={{ marginTop: "20px" }}>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box
                sx={{
                  background: "#EAECEE ",
                  width: "250px",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="body1">
                    sub total: Tk. {subTotalCalc}
                  </Typography>

                  <Button variant="contained" size="small">
                    checkout
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box></Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default CartAndWishLists;
