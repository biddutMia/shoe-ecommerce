import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ProductCard from "../card/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";

const ShowProduct = ({ title, products, slideItems, isCart, show }) => {
  const slide = useRef(null);

  useEffect(() => {
    // console.log("ref", slide.current);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      {title || slideItems ? (
        <Box>
          {title && (
            <Typography
              variant="h5"
              component="span"
              sx={{
                borderBottom: "2px solid red",
                paddingBottom: "5px",
                display: "inline-block",
              }}
            >
              {title}
            </Typography>
          )}
          {slideItems && (
            <Box position={"relative"} sx={{ marginBottom: "50px" }}>
              <Box
                sx={{
                  position: "absolute",
                  right: "5%",
                  top: "17px",
                  display: "flex",
                  gap: "5px",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => slide.current.slickPrev()}
                >
                  prev
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => slide.current.slickNext()}
                >
                  next
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        ""
      )}

      {!slideItems && (
        <Box>
          <Box sx={{ marginTop: "10px" }}>
            <Grid container>
              {products.length !== 0 &&
                products.map((item, ind) => {
                  const { id, description, imgURL, imgAlt, name, price, type } =
                    item;
                  return (
                    <Grid item md={4} key={id} sm={6} xs={12}>
                      <ProductCard
                        imgUrl={imgURL}
                        id={id}
                        name={name}
                        description={description}
                        price={price}
                        imgAlt={imgAlt}
                        isCart={isCart}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            {!show && (
              <Button variant={"contained"} component={Link} to="/shop">
                {" "}
                show more
              </Button>
            )}
          </Box>
        </Box>
      )}

      {slideItems && (
        <Box>
          <Box sx={{ marginTop: "10px" }}>
            <Slider {...settings} ref={slide}>
              {products.length !== 0 &&
                products.map((item) => {
                  const { id, description, imgURL, imgAlt, name, price, type } =
                    item;

                  return (
                    <Box key={id}>
                      <ProductCard
                        imgUrl={imgURL}
                        id={id}
                        name={name}
                        description={description}
                        price={price}
                        imgAlt={imgAlt}
                        isCart={isCart}
                      />
                    </Box>
                  );
                })}
            </Slider>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ShowProduct;
