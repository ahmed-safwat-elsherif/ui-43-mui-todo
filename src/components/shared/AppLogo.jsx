import React from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Typography from "@mui/material/Typography";

const AppLogo = (props) => {
  const { sx } = props;
  return (
    <Stack
      sx={sx}
      direction="row"
      alignItems="center"
      justifyContent={{ xs: "center", md: "flex-start" }}
      flex={{ xs: 1, md: 0 }}
      component={Link}
      to="/"
    >
      <FormatListBulletedIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Todo
      </Typography>
    </Stack>
  );
};

export default AppLogo;
