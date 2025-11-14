import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = ["home", "skills", "projects", "experience", "contact"];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={styles.appBar} elevation={0}>
        <Toolbar sx={styles.toolbar}>
          {/* Logo as text */}
          <Box sx={styles.logo} onClick={() => handleNavClick("home")}>
            {"<"}It's me{" "}
            <Box component="span" sx={styles.logoHighlight}>
              JP!{">"}
            </Box>
          </Box>

          {/* Desktop nav links */}
          <Box sx={styles.navLinksContainer}>
            {navLinks.map((link) => (
              <Button
                key={link}
                sx={styles.navButton}
                onClick={() => handleNavClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={styles.hamburger}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={styles.drawer} onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={styles.drawerListItem}
                  onClick={() => handleNavClick(text)}
                >
                  {text.charAt(0).toUpperCase() + text.slice(1)}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;

const styles = {
  appBar: {
    bgcolor: "#122620",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
  },
  logoHighlight: {
    color: "#bbbbbb", // light gray
  },
  navLinksContainer: {
    display: { xs: "none", md: "flex" },
    gap: 3,
  },
  navButton: {
    color: "#F4EBD0",
    fontWeight: "bold",
    transition: "all 0.3s ease", // smooth animation
    "&:hover": {
      transform: "translateY(-5px)", // move up by 2px
    },
  },
  hamburger: {
    display: { xs: "block", md: "none" },
  },
  drawer: {
    width: 250,
    bgcolor: "#F4EBD0", // light background
    height: "100%",
  },
  drawerListItem: {
    color: "#111", // dark text visible on light drawer
    fontWeight: "bold",
    fontSize: "1rem",
    "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
  },
};
