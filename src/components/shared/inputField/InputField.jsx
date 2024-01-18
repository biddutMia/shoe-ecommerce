import { TextField } from "@mui/material";
import React from "react";

const InputField = React.forwardRef(({ placeholder, field, type }, ref) => (
  <TextField
    {...field}
    type={type}
    ref={ref}
    placeholder={placeholder}
    size="small"
  />
));

export default InputField;
