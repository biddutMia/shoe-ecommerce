import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useStoreActions } from "easy-peasy";

const ProductCard = ({ imgUrl, imgAlt, name, description, price, id }) => {
  const actions = useStoreActions((action) => action);
  console.log("action", actions.cart.addToCart);

  return (
    <Card sx={{ width: "100%", boxShadow: "5px 5px 10px grey" }}>
      <CardActionArea>
        <CardMedia
          sx={{ border: "1px solid gray" }}
          component="img"
          height="140"
          image={imgUrl}
          alt={imgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            TK.{price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{ width: "100%" }}
          color="primary"
          onClick={() => actions.cart.addToCart(id)}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
