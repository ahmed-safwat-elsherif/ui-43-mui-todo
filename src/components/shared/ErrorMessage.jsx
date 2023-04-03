import React from "react";

import Box from "@mui/material/Box";

const ErrorMessage = ({ children }) => (
  <Box sx={{ color: (theme) => theme.palette.error.main }}>{children}</Box>
);

export default ErrorMessage;
