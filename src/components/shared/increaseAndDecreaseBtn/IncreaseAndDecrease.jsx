import { Box, Button } from "@mui/material";

const IncreaseAndDecrease = ({ increase, decrease, value = 0 }) => {
  return (
    <Box>
      <Button onClick={increase}>-</Button> {value}{" "}
      <Button onClick={decrease}>+</Button>
    </Box>
  );
};

export default IncreaseAndDecrease;
