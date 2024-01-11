import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { cardImgAndTextContainer, cardImg } from "../../../style.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ imgUrl, imgAlt, name, description, price, id }) => {
  const actions = useStoreActions((action) => action);
  const wishList = useStoreState((state) => state);

  return (
    <Box
      className="card"
      sx={{
        boxShadow: "5px 5px 20px grey",
        background: "#e0e0e0",
        margin: "5px",
        borderRadius: "5px",
      }}
    >
      <Box className={cardImgAndTextContainer}>
        <Box sx={{ width: "100%", overflow: "hidden", aspectRatio: "1/0.7" }}>
          {" "}
          <img
            className={cardImg}
            src={imgUrl}
            alt={imgAlt}
            style={{
              width: "100%",
              height: "100%",

              borderRadius: "5px",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box sx={{ marginLeft: "5px" }}>
          <Typography variant="h5"> {name}</Typography>
          <Typography variant="body1"> TK. {price}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={0.4} sx={{ margin: "5px" }}>
          <Button
            sx={{ flexGrow: "1" }}
            variant="contained"
            onClick={() => actions.cart.addToCart(id)}
          >
            ADD TO CART
          </Button>
          <Button
            variant="contained"
            onClick={() => actions.wishList.toggleWishList(id)}
          >
            {wishList.wishList.data.includes(id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
