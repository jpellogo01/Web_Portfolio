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

const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Works" },
  { id: "experience", label: "Experience" },
  { id: "graphic-design", label: "Design" },
  { id: "contact", label: "Contact" },
];

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
          <Box
            component="button"
            type="button"
            aria-label="Go to home"
            sx={styles.logo}
            onClick={() => handleNavClick("home")}
          >
            {"<"}It's me{" "}
            <Box component="span" sx={styles.logoHighlight}>
              JP!{">"}
            </Box>
          </Box>

          <Box
            component="nav"
            aria-label="Primary navigation"
            sx={styles.navLinksContainer}
          >
            {navLinks.map((link) => (
              <Button
                key={link.id}
                sx={styles.navButton}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
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
            {navLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton
                  sx={styles.drawerListItem}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
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
    borderBottom: "1px solid rgba(214, 173, 96, 0.22)",
    backdropFilter: "blur(14px)",
    zIndex: 1100,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: { xs: 64, md: 76 },
    px: { xs: 2, sm: 4, md: 7 },
  },
  logo: {
    fontSize: { xs: "1.2rem", sm: "1.4rem" },
    fontWeight: "bold",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
    border: 0,
    background: "transparent",
    padding: 0,
    fontFamily: "inherit",
  },
  logoHighlight: {
    color: "#bbbbbb", // light gray
  },
  navLinksContainer: {
    display: { xs: "none", md: "flex" },
    gap: { md: 1, lg: 2 },
  },
  navButton: {
    color: "#F4EBD0",
    fontWeight: "bold",
    minHeight: 44,
    px: { md: 1, lg: 1.5 },
    transition: "color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      color: "#D6AD60",
      transform: "translateY(-2px)",
    },
  },
  hamburger: {
    display: { xs: "block", md: "none" },
  },
  drawer: {
    width: 250,
    bgcolor: "#F4EBD0", // light background
    height: "100%",
    pt: 3,
  },
  drawerListItem: {
    color: "#111", // dark text visible on light drawer
    fontWeight: "bold",
    fontSize: "1rem",
    "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
  },
};
