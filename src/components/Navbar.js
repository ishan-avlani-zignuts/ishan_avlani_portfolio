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
import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
      display={"flex"}
      sx={{
        justifyContent: "space-between",
        position: "absolute",
        backgroundColor: "blue",
        color: "white",
        width: "100%",
        maxWidth: "100vw",
        left: "50%",
        transform: "translateX(-50%)",
        
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex", md: "flex", sm: "none" },
          paddingLeft: "100px",
        }}
      >
        <Typography sx={{ fontSize: "28px", lineHeight: "32.81px" }}>
          Panto
        </Typography>
      </Box>

      <Box
        sx={{ display: { xs: "block", lg: "none", md: "none", sm: "flex" } }}
        px={"20px"}
      >
        <IconButton onClick={toggleDrawer(true)} color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              {["Furniture", "Shop", "About Us", "Contact Us"].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          textDecoration: "none",
          display: { xs: "none", lg: "flex", md: "flex", sm: "none" },
          lineHeight: "21.09px",
          textAlign: "center",
          alignItems: "center",
        }}
        gap={7}
      >
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          display={"flex"}
        >
          Furniture
          <div>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "18px",
                textAlign: "center",
                alignItems: "center",
              }}
            />
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/products"
        >
          Shop
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/whychooseus"
        >
          About Us
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/footer"
        >
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
