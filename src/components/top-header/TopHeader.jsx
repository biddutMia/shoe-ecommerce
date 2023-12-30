import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const TopHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            shoeEcommerce
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              alignItems: "flex-end",
              margin: "0px 5px",
            }}
          >
            <SearchIcon sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              variant="standard"
              placeholder="search product"
            />
          </Box>

          <Box>
            <Stack direction={"row"} spacing={2.5}>
              <Badge badgeContent={1} color="secondary">
                <FavoriteIcon />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
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
