import {
  AppBar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Team", to: "/agent" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        color="#fff"
        elevation={0}
        sx={{
          boxShadow: "none",
          bgcolor: "#000000",
          borderBottom: "none",
          py: 2,
          px: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Company Name */}
          <Box
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.ayzenntechnologies.com/img/ayzen.png"
              alt="Ayzenn Tech Logo"
              style={{ height: "40px" }} // adjust size if needed
            />
          </Box>

          {/* Menu Links (Desktop)*/}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {links.map((item) => (
              <Button
                key={item.to}
                component={Link}
                to={item.to}
                sx={{
                  textTransform: "none",
                  color: location.pathname === item.to ? "#FBA505" : "#fff",
                  "&:hover": { color: "#FBA505" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Menu Button (Mobile)*/}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
             <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </AppBar>

      {/* Drawer (Mobile)*/}
      <Drawer
        anchor="top"
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: { width: "100%", height: "400px", bgcolor: "black" },
        }}
      >
        {/* Close icon */}
        <Box sx={{ p: 2, textAlign: "right" }}>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* List of links */}
        <List sx={{ px: 4 }}>
          {links.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={handleDrawerClose}
                sx={{ color: "white" }}
              >
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
