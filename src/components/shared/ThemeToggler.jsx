import React, { useContext } from "react";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "../../providers/ThemeContext";

const ThemeToggler = () => {
  // get theme toggler
  const { toggleMode } = useContext(ThemeContext);
  return (
    <Box>
      <Switch color="secondary" onChange={toggleMode} />
    </Box>
  );
};

export default ThemeToggler;
