import { useState } from "react";
import LoginAndSignIn from "../../shared/loginAndSignIn/LoginAndSignIn";

const formData = {
  firstName: {
    placeholder: "first name",
    value: "",
    type: "text",
  },
  lastName: {
    placeholder: "second name",
    value: "",
    type: "text",
  },
  email: {
    placeholder: "example@gmail.com",
    value: "",
    type: "email",
  },
  password: {
    placeholder: "password",
    value: "",
    type: "password",
  },
  mobile: {
    placeholder: "mobile no",
    value: "",
    type: "number",
  },
};

const SingIn = () => {
  const [state, setState] = useState(JSON.parse(JSON.stringify(formData)));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData", state);
    setState(JSON.parse(JSON.stringify(formData)));
  };

  return (
    <LoginAndSignIn
      formData={formData}
      handleSubmit={handleSubmit}
      state={state}
      setState={setState}
    />
  );
};
export default SingIn;
