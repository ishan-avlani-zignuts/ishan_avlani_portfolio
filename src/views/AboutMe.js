import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Navbar from "../components/common/Navbar";
import { Bio } from "../assets/data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../assets/images/hero.jpeg";
import resume from "../assets/Ishan Sandip Avlani Resume.pdf";
import { FaFileDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Box id="aboutme">
      <Navbar />
      <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
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
              paddingTop: { xs: "125px" },
              paddingLeft: { md: "70px" },
              textAlign: { xs: "center", md: "left" },
              color: "white",
              height: { xs: "auto", md: "100vh" },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
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
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              I am a &nbsp;
              <Box
                component="span"
                sx={{
                  color: "wheat",
                }}
              >
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Box>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 20 }} textAlign={"justify"}>
              {Bio.description}
            </Typography>
            <Box marginTop={"20px"}>
              <Button
                variant="contained"
                endIcon={<FaFileDownload />}
                sx={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
                border: "5px solid wheat",
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
