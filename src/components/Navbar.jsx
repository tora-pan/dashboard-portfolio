import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import {
  Attachment,
  Home,
  Info,
  MilitaryTech,
  Phone,
} from "@mui/icons-material";

import React, { useState } from "react";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
import HomeSection from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={RouterLink} to="/about">
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={RouterLink} to="/skills">
          <ListItemIcon>
            <MilitaryTech />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component={RouterLink} to="/resume">
          <ListItemIcon>
            <Attachment />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button component={RouterLink} to="/contact">
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Travis Pandos
          </Typography>
          <Tooltip title="let's connect!">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Travis Pandos" src="https://picsum.photos/500/500" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* Here is where I'll put all of my social links */}
            <MenuItem>
              <Button
                component={Link}
                sx={{ textDecoration: "none", color: "inherit" }}
                href="https://linkedin.com/in/travis-pandos"
                target="_blank"
              >
                LinkedIn
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                component={Link}
                sx={{ textDecoration: "none", color: "inherit" }}
                href="https://github.com/tora-pan"
                target="_blank"
              >
                Github
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Navbar;
