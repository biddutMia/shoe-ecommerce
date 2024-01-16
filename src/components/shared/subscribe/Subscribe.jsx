import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, Stack, TextField } from "@mui/material";
import { Form } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const Subscribe = () => {
  const [state, setState] = React.useState("");
  const { addToSubscriber } = useStoreActions((action) => action.subscribe);
  const { subscribers } = useStoreState((state) => state.subscribe);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subscribers.includes(state)) {
      alert("Already this email subscribed");
    } else {
      setState("")
      addToSubscriber(state);
      alert("Successfully subscribe");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <TextField
          id="outlined-multiline-flexible"
          label="Provide your email..."
          type="email"
          onChange={handleChange}
          name="email"
          value={state}
          size="small"
          sx={{ marginRight: "10px", width: "50%" }}
        />
        <Button variant="contained" size="large" type="submit">
          Subscribe
        </Button>
      </Stack>
    </form>
  );
};

export default Subscribe;
