import { TextField } from "@mui/material";

const InputField = ({ name, placeholder, value, type, handleChange }) => {
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      value={value}
      size="small"
      type={type}
      onChange={handleChange}
    />
  );
};
export default InputField;
