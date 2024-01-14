import { Autocomplete, Box, TextField } from "@mui/material";
import "./filterAndSort.css";
import { useState } from "react";

const FilterAndSort = ({ options, title, getData }) => {
  const [state, setState] = useState();

  const handleChange = (_, value) => {
    setState(value);
    getData(value);
  };

  return (
    <Autocomplete
      size="small"
      search={state}
      onChange={handleChange}
      id="controllable-states-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
};

export default FilterAndSort;
