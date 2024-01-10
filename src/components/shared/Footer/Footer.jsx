import { Stack, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";

const FooterItem = ({ item }) => {
  return (
    <Typography
      variant="subtitle1"
      sx={{ color: "#64b5f6", textDecoration: "underline" }}
    >
      {item}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box sx={{ marginTop: "10px" }}>
      <Box sx={{ background: "#37474f", color: "white" }}>
        <Container maxWidth="md">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ padding: "10px 0px", flexWrap: "wrap" }}
          >
            <Box>
              <Typography variant="h6">Categories</Typography>
              {["Man", "Woman", "Kid"].map((item, ind) => (
                <FooterItem key={ind} item={item} />
              ))}
            </Box>
            <Box>
              <Typography variant="h6">Services</Typography>
              {["Support", "Help center", "FAQ", "Product return"].map(
                (item, ind) => (
                  <FooterItem key={ind} item={item} />
                )
              )}
            </Box>
            <Box>
              <Typography variant="h6">Social Links</Typography>

              {["Facebook", "Twitter", "WhatsApp", "Telegram"].map(
                (item, ind) => (
                  <FooterItem key={ind} item={item} />
                )
              )}
            </Box>
            <Box>
              <Typography variant="h6">Pages</Typography>

              {["Home", "Shop", "Blog", "Contact us", "About us"].map(
                (item, ind) => (
                  <FooterItem key={ind} item={item} />
                )
              )}
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          background: "#3f51b5",
          color: "white",
          padding: "5px 0px",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          &copy; copyright 2023-present, All rights reserved.{" "}
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
