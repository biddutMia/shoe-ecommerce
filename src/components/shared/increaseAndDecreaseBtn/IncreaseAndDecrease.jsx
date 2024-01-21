import { Box, Button, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";

const IncreaseAndDecrease = ({ increase, decrease, value = 0, id }) => {
  const { data } = useStoreState((state) => state.cart);

  return (
    <Box>
      <Button
        size="small"
        variant="outlined"
        onClick={() => decrease(id)}
        disabled={!data[id] || data[id]?.item<1}
      >
        -
      </Button>
      <Typography
        variant="body1"
        component={"span"}
        sx={{ margin: "0px 10px" }}
      >
        {data[id]?.item ? data[id].item : 0}
      </Typography>
      <Button
        size="small"
        variant="outlined"
        onClick={() => increase(id)}
        disabled={!data[id]}
      >
        +
      </Button>
    </Box>
  );
};

export default IncreaseAndDecrease;
