// import React from 'react'
// import Navbar from '../components/Navbar'
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
// const Home = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Typography>
//         Hello I'm Ishan Avlani <br/> A Software Developer
//       </Typography>
//     </div>
//   )
// }

// export default Home
import React from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import { Box } from "@mui/system";
import { Bio } from "../assets/data/constants";
import HeroImg from "../assets/images/ishan.jpeg";
import { Tilt } from "react-tilt";
// import Navbar from "../components/Navbar";
// import EducationCard from "./Education";
import resume from "../assets/Ishan Sandip Avlani Resume.pdf";
const Hero = () => {
  return (
    <>  
      {/* <div>
        <Navbar />
      </div> */}

      <div id="About">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            padding: "80px 30px",
            zIndex: 0,
            backgroundColor: "black",
            color: "white",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              maxWidth: 1100,
            }}
          >
            <Box
              sx={{
                width: "100%",
                order: { xs: 2, md: 1 },
                display: "flex",
                gap: 6,
                flexDirection: "column",
                alignItems: "center",
                marginBottom: { xs: "30px", md: "80px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h2"
                sx={{ fontWeight: 700, lineHeight: "68px" }}
              >
                Hi, I am <br /> {Bio.name}
              </Typography>
              <Box
                sx={{
                  fontWeight: 600,
                  fontSize: 32,
                  display: "flex",
                  gap: 1,
                  lineHeight: "68px",
                }}
              >
                I am a
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ fontSize: 20, lineHeight: "32px", marginBottom: "42px" }}
              >
                {Bio.description}
              </Typography>
              <a
                href={resume}
                // target="_blank"
                download="Ishan Sandip Avlani Resume.pdf"
              >
                <Button
                  variant="contained"
                  sx={{ width: "95%", maxWidth: 300 }}
                >
                  Download Resume
                </Button>
              </a>
            </Box>

            <Box
              sx={{
                width: "100%",
                order: { xs: 1, md: 2 },
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Tilt>
                <img
                  src={HeroImg}
                  alt="Rishav Chanda"
                  style={{
                    borderRadius: "50%",
                    maxWidth: 400,
                    maxHeight: 400,
                    border: "2px solid primary.main",
                  }}
                />
              </Tilt>
            </Box>
          </motion.div>
        </Box>
      </div>
      {/* <div>
        <EducationCard/>
      </div> */}
    </>
  );
};

export default Hero;
