import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import StarsIcon from "@mui/icons-material/Stars";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#232F3A",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
        }}
      >
        <Typography variant="h5">{"<Ishan Sandip Avlani />"}</Typography>

        <Box
          sx={{
            display: { xs: "block", lg: "none" },
          }}
        >
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
          }}
        >
          <NavigationLinks />
        </Box>
      </Box>

      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            paddingTop: "20px",
          }}
        >
          <List>
            {[
              { text: "About Me", icon: <HomeIcon />, href: "#aboutme" },
              { text: "Education", icon: <SchoolIcon />, href: "#education" },
              { text: "Experience", icon: <WorkIcon />, href: "#experience" },
              { text: "Skills", icon: <CodeIcon />, href: "#skills" },
              { text: "Projects", icon: <BuildIcon />, href: "#projects" },
              {
                text: "Achievements",
                icon: <StarsIcon />,
                href: "#achievements",
              },
            ].map((item) => (
              <ListItem button key={item.text} component="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

const NavigationLinks = () => (
  <>
    {[
      { text: "About Me", icon: <HomeIcon />, href: "#aboutme" },
      { text: "Education", icon: <SchoolIcon />, href: "#education" },
      { text: "Experience", icon: <WorkIcon />, href: "#experience" },
      { text: "Skills", icon: <CodeIcon />, href: "#skills" },
      { text: "Projects", icon: <BuildIcon />, href: "#projects" },
      { text: "Achievements", icon: <StarsIcon />, href: "#achievements" },
    ].map((item) => (
      <Link
        key={item.text}
        href={item.href}
        sx={{ textDecoration: "none", color: "inherit", marginRight: 2 }}
      >
        <Box display="flex" alignItems="center">
          {item.icon}
          <Typography sx={{ marginLeft: 1 }}>{item.text}</Typography>
        </Box>
      </Link>
    ))}
  </>
);

export default Navbar;

