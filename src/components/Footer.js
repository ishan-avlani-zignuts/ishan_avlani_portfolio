import React from 'react'
import {
  Box,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

import { FaFacebook,FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#232F3A",
        color: "white",
        padding:"20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
   
    >
      <Typography
        sx={{
          flex: 1,
          fontSize: "18px",
          textAlign: { xs: "center", sm: "left" },
          mb: { xs: 1, sm: 0 },
          color: "wheat",
        }}
      >
        &copy; 2024 Ishan Sandip Avlani. All rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Link href="https://facebook.com" target="_blank" rel="noopener">
          <IconButton sx={{ color: "wheat" }}>
            <FaFacebook />
          </IconButton>
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener">
          <IconButton sx={{ color: "wheat" }}>
            <FaInstagram />
          </IconButton>
        </Link>
        <Link
          href="https://in.linkedin.com/in/ishan-avlani-24517b246"
          target="_blank"
          rel="noopener"
        >
          <IconButton sx={{ color: "wheat" }}>
            <FaLinkedin />
          </IconButton>
        </Link>
        <Link
          href="https://github.com/ishan-avlani-zignuts"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <IconButton sx={{ color: "wheat" }}>
            <FaGithub />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer
