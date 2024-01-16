import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import Footer from "../Footer/Footer";
import TopHeader from "../main-menu/MainMenu";
import SubMenu from "../sub-menu/SubMenu";
import InputField from "../inputField/InputField";
import { useState } from "react";

const LoginAndSignIn = ({ handleSubmit, state, setState, isLogin }) => {
  const handleChange = (event) => {
    const { placeholder, value, type } = event.target;

    setState({
      ...state,
      [event.target.name]: {
        placeholder,
        value,
        type,
      },
    });
  };

  return (
    <div>
      <TopHeader />
      <SubMenu />
      <Container maxWidth={"md"} sx={{ marginTop: "120px" }}>
        <Box
          sx={{
            width: isLogin ? "40%" : "60%",
            margin: "20px auto",
            background: "#F4F6F6",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {Object.keys(state).map((item, index) => {
                const { placeholder, value, type } = state[item];

                return (
                  <Grid item xs={12} md={isLogin ? 12 : 6} key={index}>
                    <InputField
                      name={item}
                      placeholder={placeholder}
                      value={value}
                      type={type}
                      handleChange={handleChange}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "30px", width: "200px" }}
            >
              submit
            </Button>
          </form>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default LoginAndSignIn;
