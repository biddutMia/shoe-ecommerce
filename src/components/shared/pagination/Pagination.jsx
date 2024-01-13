import { Box, Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const ProducPagination = ({ setPage, page, numberOfPagination }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Pagination
          count={numberOfPagination}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default ProducPagination;
