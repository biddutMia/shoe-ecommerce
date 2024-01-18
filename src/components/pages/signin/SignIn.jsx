import { useState } from "react";
import Form from "../../shared/form/Form";
import { Box, Container } from "@mui/material";
import TopHeader from "../../shared/main-menu/MainMenu";
import SubMenu from "../../shared/sub-menu/SubMenu";
import Footer from "../../shared/Footer/Footer";

const formData = {
  firstName: {
    placeholder: "first name",
    type: "text",
    validate: {
      required: "this field is required",
    },
  },
  lastName: {
    placeholder: "second name",
    type: "text",
    validate: {
      required: "this field is required",
    },
  },
  email: {
    placeholder: "example@gmail.com",
    type: "email",
    validate: {
      required: "this field is required",
    },
  },
  password: {
    placeholder: "password",
    type: "password",
    validate: {
      required: "this field is required",
      minLength: {
        value: 8,
        message: "password must be at least 8 character",
      },
    },
  },
  mobile: {
    placeholder: "mobile no",
    type: "number",
    validate: {
      required: "this field is required",
    },
  },
};

const SingIn = () => {
  const [state, setState] = useState(JSON.parse(JSON.stringify(formData)));

  const handleSubmit = (data, e) => {
    e.preventDefault();
    console.log("data", data);
    // setState(JSON.parse(JSON.stringify(formData)));
  };

  return (
    <Box>
      <TopHeader />
      <SubMenu />
      <Container maxWidth={"md"} sx={{ marginTop: "120px" }}>
        <Form
          handleSubmit={handleSubmit}
          defaultValue={state}
          state={state}
          setState={setState}
          btnTitle={"sign in"}
        />
      </Container>

      <Footer />
    </Box>
  );
};
export default SingIn;
