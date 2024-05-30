// import React, { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Button,
// } from "@mui/material";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";


// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const isMenuOpen = Boolean(anchorEl);

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: "primary.main" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography
//           component={RouterLink}
//           to="/"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             color: "inherit",
//             textDecoration: "none",
//             fontWeight: 500,
//             fontSize: "1.5rem",
//           }}
//         >
//           <Box component="span" sx={{ color: "secondary.main" }}>
//             &lt;
//           </Box>
//           Ishan
//           <Box component="span" sx={{ color: "secondary.main" }}>
//             /
//           </Box>
//           Avlani
//           <Box component="span" sx={{ color: "secondary.main" }}>
//             &gt;
//           </Box>
//         </Typography>

//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//           <Button color="inherit" href="#About">
//             About
//           </Button>
//           <Button color="inherit" href="#Skills">
//             Skills
//           </Button>
//           <Button color="inherit" href="#Experience">
//             Experience
//           </Button>
//           <Button color="inherit" href="#Projects">
//             Projects
//           </Button>
//           <Button color="inherit" href="#Education">
//             Education
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             // href={Bio.github}
//             target="_blank"
//           >
//             Github Profile
//           </Button>
//         </Box>

//         <Box sx={{ display: { xs: "flex", md: "none" } }}>
//           <IconButton color="inherit" onClick={handleMenuOpen}>
//             <MenuRoundedIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//           >
//             <MenuItem onClick={handleMenuClose} component="a" href="#About">
//               About
//             </MenuItem>
//             <MenuItem onClick={handleMenuClose} component="a" href="#Skills">
//               Skills
//             </MenuItem>
//             <MenuItem
//               onClick={handleMenuClose}
//               component="a"
//               href="#Experience"
//             >
//               Experience
//             </MenuItem>
//             <MenuItem onClick={handleMenuClose} component="a" href="#Projects">
//               Projects
//             </MenuItem>
//             <MenuItem onClick={handleMenuClose} component="a" href="#Education">
//               Education
//             </MenuItem>
//             <MenuItem
//               component="a"
//             //   href={Bio.github}
//               target="_blank"
//               sx={{
//                 border: `1px solid`,
//                 borderColor: "primary.main",
//                 color: "primary.main",
//                 borderRadius: 2,
//                 padding: "6px 16px",
//                 transition: "all 0.3s ease-in-out",
//                 "&:hover": {
//                   backgroundColor: "primary.main",
//                   color: "secondary.main",
//                 },
//               }}
//             >
//               Github Profile
//             </MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Link,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";


// const Navbar = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setOpenDrawer(open);
//   };

//   return (
//     <Box
//       display={"flex"}
//       sx={{
//         justifyContent: "space-between",
//         position: "absolute",
//         backgroundColor: "#232F3A",
//         color: "white",
//         width: "100%",
//         maxWidth: "100vw",
//         left: "50%",
//         transform: "translateX(-50%)",

//         zIndex: 1,
//       }}
//     >
//       <Box
//         sx={{
//           display: { xs: "none", lg: "flex", md: "flex", sm: "none" },
//           paddingLeft: "100px",
//         }}
//       >
//         <Typography sx={{ fontSize: "28px", lineHeight: "32.81px" }}>
//           {"<Ishan Avlani>"}
//         </Typography>
//       </Box>

//       <Box
//         sx={{ display: { xs: "block", lg: "none", md: "none", sm: "flex" } }}
//         px={"20px"}
//       >
//         <IconButton onClick={toggleDrawer(true)} color="inherit">
//           <MenuIcon />
//         </IconButton>
//         <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
//           <Box sx={{ width: 250 }}>
//             <List>
//               {["Furniture", "Shop", "About Us", "Contact Us"].map((text) => (
//                 <ListItem button key={text}>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Drawer>
//       </Box>

//       <Box
//         sx={{
//           textDecoration: "none",
//           display: { xs: "none", lg: "flex", md: "flex", sm: "none" },
//           lineHeight: "21.09px",
//           textAlign: "center",
//           alignItems: "center",
//         }}
//         gap={7}
//       >
//         <a
//           href="#home"
//           style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
//           display={"flex"}
//         >
//           About Me
//         </a>
//         <a
//           style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
//           href="#education"
//         >
//           Education
//         </a>
//         <a
//           style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
//           href="#experience"
//         >
//           Experience
//         </a>
//         <a
//           style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
//           href="#skills"
//         >
//           Skills
//         </a>
//         <a
//           style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
//           href="#projects"
//         >
//           Projects
//         </a>
//         <a
//           style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
//           href="#achievements"
//         >
//           Achievements
//         </a>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;
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
        <Typography variant="h5">{"<Ishan Sandip Avlani>"}</Typography>

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
              { text: "About Me", icon: <HomeIcon />, href: "#home" },
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
      { text: "About Me", icon: <HomeIcon />, href: "#home" },
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

