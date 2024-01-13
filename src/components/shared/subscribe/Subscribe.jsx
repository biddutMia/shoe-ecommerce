import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, Stack, TextField } from "@mui/material";

const Subscribe = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
      <TextField
        id="outlined-multiline-flexible"
        label="Provide your email..."
        multiline
        size="small"
        sx={{ marginRight: "10px", width: "50%" }}
      />
      <Button variant="contained" size="large">
        Subscribe
      </Button>
    </Stack>
  );
};

export default Subscribe;
