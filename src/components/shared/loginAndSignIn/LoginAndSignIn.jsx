import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import Footer from "../Footer/Footer";
import TopHeader from "../main-menu/MainMenu";
import SubMenu from "../sub-menu/SubMenu";
import InputField from "../inputField/InputField";
import { useState } from "react";
import { loginAndSignin, loginAndSigninBtn } from "../../../style.module.css";

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
    <Box >
      <TopHeader />
      <SubMenu />
      <Container maxWidth={"md"} sx={{ marginTop: "120px" }}>
        <Box
          className={loginAndSignin}
          sx={{
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
              sx={{ marginTop: "30px" }}
              className={loginAndSigninBtn}
            >
              submit
            </Button>
          </form>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default LoginAndSignIn;
