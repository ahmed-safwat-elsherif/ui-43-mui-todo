import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import AppLogo from "./AppLogo";
import BurgerIconButton from "./BurgerIconButton";
import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

const navLinks = [
  {
    label: "Groups",
    to: "/groups",
  },
  {
    label: "Create Group",
    to: "/groups/create",
  },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppLogo sx={{ display: { xs: "none", md: "flex" } }} />
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <BurgerIconButton onClick={() => setDrawerOpen(true)} />
            </Box>
            <AppLogo sx={{ display: { xs: "flex", md: "none" } }} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navLinks.map(({ label, to }) => (
                <Button
                  component={Link}
                  key={label}
                  to={to}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {label}
                </Button>
              ))}
            </Box>
            <ThemeToggler />
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box minWidth={250}>
          <List>
            {navLinks.map(({ label, to }) => (
              <ListItem key={label} sx={{ px: 0 }}>
                <ListItemButton
                  component={Link}
                  to={to}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default Navbar;
