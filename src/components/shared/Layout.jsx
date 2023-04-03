import React from "react";
// import { useLocation } from "react-router-dom";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import GlobalStyles from "@mui/material/GlobalStyles";

import Footer from "./Footer";
import Navbar from "./Navbar";
import theme from "../../utils/theme";
import ThemeProvider from "../../providers/ThemeContext";

// const routesWithNoFooter = ["/groups"];
const Layout = ({ children }) => {
  //   const location = useLocation();
  //   console.log(location);
  //   const isFooterHidden = routesWithNoFooter.includes(location.pathname);
  return (
    <ThemeProvider>
      <CssBaseline />
      <GlobalStyles
        styles={{
          a: {
            textDecoration: "none",
            color: "inherit",
            ":hover, :active, :visited": {
              color: "inherit",
            },
          },
          ul: {
            listStyle: "none",
            marginBlock: 0,
            paddingInline: 0,
          },
        }}
      />
      <Stack minHeight="100vh">
        <Navbar />
        <Container sx={{ flex: 1, my: 2 }} component="main">
          {children}
        </Container>
        {/* {!isFooterHidden && <Footer />} */}
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
