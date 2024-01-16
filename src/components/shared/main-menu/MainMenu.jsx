import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const { cart, wishList } = useStoreState((state) => state);

  return (
    <Box
      sx={{ flexGrow: 1, position: "fixed", top: 0, width: "100%", zIndex: 1 }}
    >
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
            shoeEcommerce
          </Typography>

          <Box>
            <Stack direction={"row"} spacing={2.5}>
              <Badge
                badgeContent={wishList.data.length ? wishList.data.length : "0"}
                color="secondary"
              >
                <Link to="/wishList">
                  <FavoriteIcon />
                </Link>
              </Badge>
              <Badge
                badgeContent={
                  Object.keys(cart.data).length
                    ? Object.keys(cart.data).length
                    : "0"
                }
                color="secondary"
              >
                <Link to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </Badge>

              <PersonPinRoundedIcon />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopHeader;
