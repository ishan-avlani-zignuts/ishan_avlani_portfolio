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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import StarsIcon from "@mui/icons-material/Stars";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { FaFileDownload } from "react-icons/fa";
import resume from "../../assets/Ishan Sandip Avlani Resume.pdf";
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

  const handleLinkClick = (href) => () => {
    window.location.href = href;
    setOpenDrawer(false);
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
        width: "100%",
      }}
      py={"11px"}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1800px",
          width: "100%",
          margin: "0 auto",
          padding: { xs: "10px", md: "10px 20px" },
        }}
      >
        <Typography
          variant="h5"
          paddingLeft={"15px"}
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          {"<Ishan Sandip Avlani />"}
        </Typography>

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            flex: 1,
            justifyContent: "center",
          }}
        >
          <NavigationLinks />
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "flex-end",
            paddingRight: "25px",
          }}
        >
          <Button
            variant="contained"
            endIcon={<FaFileDownload />}
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              },
            }}
            href={resume}
            download="Ishan Sandip Avlani Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "block", lg: "none" },
            paddingRight: "25px",
          }}
        >
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#232F3A",
            color: "white",
          },
        }}
      >
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
              {
                text: "Contact Me",
                icon: <ContactMailIcon />,
                href: "#contacts",
              },
            ].map((item) => (
              <ListItem
                button
                key={item.text}
                component="a"
                href={item.href}
                onClick={handleLinkClick(item.href)}
              >
                <ListItemIcon sx={{ color: "wheat" }}>{item.icon}</ListItemIcon>
                <ListItemText sx={{ color: "wheat" }} primary={item.text} />
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
      {
        text: "Contact Me",
        icon: <ContactMailIcon />,
        href: "#contacts",
      },
    ].map((item) => (
      <Link
        key={item.text}
        href={item.href}
        sx={{
          textDecoration: "none",
          color: "wheat",
          marginRight: {xs:1 , sm:1,md:1, lg:1,xl:2},
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          {item.icon}
          <Typography sx={{ marginLeft: 1, color: "wheat" }}>
            {item.text}
          </Typography>
        </Box>
      </Link>
    ))}
  </>
);

export default Navbar;
