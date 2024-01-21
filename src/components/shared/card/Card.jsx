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
import { Link } from "react-router-dom";

const ProductCard = ({
  imgUrl,
  imgAlt,
  name,
  description,
  price,
  id,
  isCart = true,
  index,
  storeTitle,
}) => {
  const actions = useStoreActions((action) => action);
  const wishList = useStoreState((state) => state);

  return (
    <Box
      className="card"
      sx={{
        border: "1px solid #ABB2B9",
        borderRadius: "5px",
        margin: "5px 10px 5px 0px",
        background: "#F2F3F4",
      }}
    >
      <Box className={cardImgAndTextContainer}>
        <Link
          to={`/shop/${index}?store-title=${storeTitle}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box sx={{ width: "100%", overflow: "hidden", aspectRatio: "1/0.7" }}>
            {" "}
            <img
              className={cardImg}
              src={imgUrl}
              alt={imgAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box sx={{ marginLeft: "5px" }}>
            <Typography variant="h5"> {name}</Typography>
            <Typography variant="body1"> TK. {price}</Typography>
            <Typography>{description}</Typography>
          </Box>
        </Link>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={0.4} sx={{ margin: "5px" }}>
          {isCart && (
            <Button
              sx={{ flexGrow: "1" }}
              variant="contained"
              onClick={() => actions.cart.addToCart(id)}
            >
              ADD TO CART
            </Button>
          )}
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
