import LoginAndSignIn from "../../shared/loginAndSignIn/LoginAndSignIn";
import { useState } from "react";

const formData = {
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
};

const Login = () => {
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
      isLogin={true}
    />
  );
};
export default Login;
