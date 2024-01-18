import { Box, Container } from "@mui/material";
import { useState } from "react";
import TopHeader from "../../shared/main-menu/MainMenu";
import SubMenu from "../../shared/sub-menu/SubMenu";
import Footer from "../../shared/Footer/Footer";
import Form from "../../shared/form/Form";
import { useForm, Controller } from "react-hook-form";

const formData = {
  email: {
    placeholder: "example@gmail.com",
    type: "email",
    validate: {
      required: "this field required",
    },
  },
  password: {
    placeholder: "password",
    type: "password",
    validate: {
      required: "this field required",
      minLength: {
        value: 8,
        message: "password must be at least 8 character",
      },
    },
  },
};

const Login = () => {
  const [state, setState] = useState(JSON.parse(JSON.stringify(formData)));

  const handleSubmit = (data, e) => {
    e.preventDefault();
    console.log("data", data);
    console.log("hello");

    setState(JSON.parse(JSON.stringify(formData)));
  };

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth={"md"} sx={{ marginTop: "120px" }}>
        <Form
          handleSubmit={handleSubmit}
          state={state}
          setState={setState}
          isLogin={true}
          btnTitle={"log in"}
          defaultValue={state}
        />
      </Container>

      <Footer />
    </Box>
  );
};
export default Login;
