import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "#383838"
            : theme.palette.primary.main,
        color: "white",
        minHeight: 200,
        py: 2,
      }}
    >
      <Container component="footer">
        <Typography variant="h3">
          App Footer {theme.palette.mode === "dark" && "(Dark mode activated)"}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
