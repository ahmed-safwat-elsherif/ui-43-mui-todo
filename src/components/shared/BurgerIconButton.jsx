import React from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const BurgerIconButton = (props) => {
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      {...props}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default BurgerIconButton;
