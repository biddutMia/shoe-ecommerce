import {
  BottomNavigation,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import TopHeader from "../main-menu/MainMenu";
import SubMenu from "../sub-menu/SubMenu";
import { useStoreState } from "easy-peasy";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "../Footer/Footer";
import { cartTitle } from "../../../style.module.css";
import { Link } from "react-router-dom";

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

const CartAndWishLists = ({ title, isCart, products, addToCart }) => {
  const { shop } = useStoreState((state) => state);

  let productArr;

  if (!Array.isArray(products)) {
    productArr = Object.keys(products);
  } else {
    productArr = products;
  }

  const tableData = shop.shopItems.reduce((prev, curr) => {
    productArr.forEach((item) => {
      if (item == curr.id) {
        const { id, name, price } = curr;

        const cartDataItem = {
          id,
          name,
          price,
          item: products[id]?.item,
        };

        prev.push(cartDataItem);
      }
    });

    return prev;
  }, []);

  const subTotalCalc = tableData.reduce((prev, curr) => {
    const { price, item } = curr;
    return prev + price * item;
  }, 0);

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth="md">
        <Box sx={{ marginTop: "120px" }}>
          {/* products title */}
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
            {title}
          </Box>

          {/* products display table */}
          <Box sx={{ marginTop: "40px", marginBottom: "20px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>product name</StyledTableCell>
                    <StyledTableCell align="right">price</StyledTableCell>
                    {isCart ? (
                      <>
                        <StyledTableCell align="right">
                          quantity
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          total price
                        </StyledTableCell>
                      </>
                    ) : (
                      <StyledTableCell align="right">products</StyledTableCell>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => {
                    const { name, price, item, id } = row;

                    return (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{price}</StyledTableCell>
                        {isCart ? (
                          <>
                            <StyledTableCell align="right">
                              {item}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {price * item}
                            </StyledTableCell>
                          </>
                        ) : (
                          <>
                            <StyledTableCell align="right">
                              <Button
                                onClick={() => addToCart(id)}
                                variant="contained"
                                size="small"
                              >
                                add to cart
                              </Button>
                            </StyledTableCell>
                          </>
                        )}
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Checkout Box */}
          {isCart && (
            <Box>
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
                    <Link to="/log-in">
                      <Button variant="contained" size="small">
                        checkout
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          )}
          <Box></Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default CartAndWishLists;
