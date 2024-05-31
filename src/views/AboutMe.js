// import React from "react";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import Navbar from "../components/Navbar";
// import { Bio } from "../assets/data/constants";
// import Typewriter from "typewriter-effect";
// import HeroImg from "../assets/images/hero.jpeg";
// import resume from "../assets/Ishan Sandip Avlani Resume.pdf";
// import { FaFileDownload } from "react-icons/fa";

// const AboutMe = () => {
//   return (
//     <Box id="aboutme">
//       <Box>
//         <Navbar />
//       </Box>
//       <Box id="About">
//         <Box
//           height={{ xs: "auto", md: "800px" }}
//           sx={{
//             backgroundColor: "black",
//             display: "flex",
//             flexDirection: "row",
//             padding: { xs: "20px", md: 0 },
//           }}
//         >
//           <Grid container>
//             <Grid
//               item
//               xs={12}
//               md={6}
//               sx={{
//                 paddingTop: { xs: "120px", md: "220px" },
//                 paddingLeft: { xs: "20px", md: "270px" },
//               }}
//             >
//               <Typography variant="h4" sx={{ fontWeight: 700, color: "white" }}>
//                 Hi, 👋 I am <span style={{ color: "wheat" }}>{Bio.name}</span>
//               </Typography>
//               <Box
//                 sx={{
//                   fontWeight: 600,
//                   fontSize: { xs: 24, md: 32 },
//                   display: "flex",
//                   color: "white",
//                   marginTop: "25px",
//                   marginBottom: "25px",
//                 }}
//               >
//                 I am a &nbsp;
//                 <Typewriter
//                   options={{
//                     strings: Bio.roles,
//                     autoStart: true,
//                     loop: true,
//                   }}
//                 />
//               </Box>
//               <Typography variant="body1" sx={{ fontSize: 20, color: "white" }}>
//                 {Bio.description}
//               </Typography>
//               <Box marginTop={"20px"}>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   href={resume}
//                   download="Ishan Sandip Avlani Resume.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   endIcon={<FaFileDownload />}
//                 >
//                   Download Resume
//                 </Button>
//               </Box>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   width: "100%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingTop: { xs: "40px", md: "200px" },
//                 }}
//               >
//                 <img
//                   src={HeroImg}
//                   alt="Ishan Avlani"
//                   style={{
//                     width: "100%",
//                     maxWidth: 350,
//                     border: "5px solid white",
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AboutMe;
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { Bio } from "../assets/data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../assets/images/hero.jpeg";
import resume from "../assets/Ishan Sandip Avlani Resume.pdf";
import { FaFileDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Box id="aboutme">
      <Navbar />
      <Box id="About" sx={{ backgroundColor: "black", minHeight: "100vh" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              padding: { xs: "20px", md: "0 0 0 60px" },      
              paddingTop:{xs:"125px"},
              paddingLeft:{md:"70px"},
              textAlign: { xs: "center", md: "left" },
              color: "white",
              height: { xs: "auto", md: "100vh" },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Hi, 👋  I am <span style={{ color: "wheat" }}>{Bio.name}</span>
            </Typography>
            <Box
              sx={{
                fontWeight: 600,
                fontSize: { xs: 24, md: 32 },
                display: "flex",
                color: "white",
                marginTop: "25px",
                marginBottom: "25px",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              I am a &nbsp;
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ fontSize: 20 }}>
              {Bio.description}
            </Typography>
            <Box marginTop={"20px"}>
              <Button
                variant="outlined"
                color="primary"
                href={resume}
                download="Ishan Sandip Avlani Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<FaFileDownload />}
              >
                Download Resume
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: "40px 20px", md: "0" },
            }}
          >
            <img
              src={HeroImg}
              alt="Ishan Avlani"
              style={{
                width: "100%",
                maxWidth: 350,
                border: "5px solid white",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;
