// import React from "react";
// import { Typography, Button } from "@mui/material";
// import Typewriter from "typewriter-effect";
// import { Box } from "@mui/system";
// import { Bio } from "../assets/data/constants";
// import HeroImg from "../assets/images/hero.jpeg";
// import Navbar from "../components/Navbar";
// import resume from "../assets/Ishan Sandip Avlani Resume.pdf";

import { ReplayCircleFilledTwoTone } from "@mui/icons-material";

// import { FaFileDownload } from "react-icons/fa";
// const Hero = () => {
//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>

//       <Box id="About" >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             position: "relative",
//             paddingTop: "100px",
//             zIndex: 0,
//             backgroundColor: "black",
//             color: "white",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               width: "100%",
//               maxWidth: 1200,
//             }}
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 order: { xs: 2, md: 1 },
//                 display: "flex",
//                 gap: 2,
//                 flexDirection: "column",
//                 alignItems: "center",
//                 marginBottom: { xs: "30px", md: "80px" },
//                 textAlign: { xs: "center", md: "left" },
//               }}
//             >
//               <Typography variant="h4" sx={{ fontWeight: 700 }}>
//                 Hi, 👋 I am <span style={{color:"wheat"}}>{Bio.name}</span>
//               </Typography>
//               <Box
//                 sx={{
//                   fontWeight: 600,
//                   fontSize: 32,
//                   display: "flex",
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
//               <Typography variant="body1" sx={{ fontSize: 20 }}>
//                 {Bio.description}
//               </Typography>

//     <div style={{ textAlign: "center" }}>
// <Button
//   variant="contained"
//   color="primary"
//   href={resume}
//   download="Ishan Sandip Avlani Resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   endIcon={<FaFileDownload />}
// >
//   Download Resume
// </Button>
//     </div>
//   </Box>

// <Box
//   sx={{
//     width: "100%",
//     order: { xs: 1, md: 2 },
//     display: "flex",
//     justifyContent: "flex-end",
//   }}
// >
//   <img
//     src={HeroImg}
//     alt="Ishan Avlani"
//     style={{
//       maxWidth: 350,
//       maxHeight: 350,
//       border: "5px solid white",
//     }}
//   />
// </Box>
// </div>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Hero;

// import React from "react";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import Navbar from "../components/Navbar";
// import { Bio } from "../assets/data/constants";
// import Typewriter from "typewriter-effect";
// import HeroImg from "../assets/images/hero.jpeg";
// import resume from "../assets/Ishan Sandip Avlani Resume.pdf";
// import { FaFileDownload } from "react-icons/fa";

// const Home = () => {
//   return (
//     <Box>
//       <Box>
//         <Navbar />
//       </Box>
//       <Box id="About">
//         <Box
//           height={"800px"}
//           sx={{
//             backgroundColor: "black",
//             display: "flex",
//             flexDirection: "row",
//           }}
//         >
//           <Grid container>
//             <Grid item style={{ paddingTop: "220px" , paddingLeft:"250px"}} md={6}>
//               <Typography variant="h4" sx={{ fontWeight: 700, color: "white" }}>
//                 Hi, 👋 I am <span style={{ color: "wheat" }}>{Bio.name}</span>
//               </Typography>
//               <Box
//                 sx={{
//                   fontWeight: 600,
//                   fontSize: 32,
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
//                   style={{ color: "blue" }}
//                 />
//               </Box>
//               <Typography variant="body1" sx={{ fontSize: 20, color: "white" }}>
//                 {Bio.description}
//               </Typography>
//               <Box marginTop={"20px"}>
//                 <Button
//                   variant="contained"
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

//             <Grid item md={6}>
//               <Box
//                 sx={{
//                   width: "100%",
//                   // order: { xs: 1, md: 2 },
//                   display: "flex",
//                   // justifyContent: "flex-end",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingTop: "200px",
//                 }}
//               >
//                 <img
//                   src={HeroImg}
//                   alt="Ishan Avlani"
//                   style={{
//                     maxWidth: 350,
//                     maxHeight: 350,
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

// export default Home;




import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { Bio } from "../assets/data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../assets/images/hero.jpeg";
import resume from "../assets/Ishan Sandip Avlani Resume.pdf";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <Box id="home">
      <Box>
        <Navbar />
      </Box>
      <Box id="About">
        <Box
          height={{ xs: "auto", md: "800px" }}
          sx={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            padding: { xs: "20px", md: 0 },
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                paddingTop: { xs: "120px", md: "220px" },
                paddingLeft: { xs: "20px", md: "270px" },
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, color: "white" }}>
                Hi, 👋 I am <span style={{ color: "wheat" }}>{Bio.name}</span>
              </Typography>
              <Box
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 24, md: 32 },
                  display: "flex",
                  color: "white",
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                I am a &nbsp;
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                  style={{ color: "blue" }}
                />
              </Box>
              <Typography variant="body1" sx={{ fontSize: 20, color: "white" }}>
                {Bio.description}
              </Typography>
              <Box marginTop={"20px"}>
                <Button
                  variant="contained"
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

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: { xs: "40px", md: "200px" },
                }}
              >
                <img
                  src={HeroImg}
                  alt="Ishan Avlani"
                  style={{
                    width: "100%",
                    maxWidth: 350,
                    border: "5px solid white",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
