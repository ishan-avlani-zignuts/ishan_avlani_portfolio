import React from "react";
import { skills } from "../assets/data/constants";
import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";

const Skills = () => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    sx={{ backgroundColor: "black" }}
    paddingTop={"25px"}
  >
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "32px", md: "52px" },
          textAlign: "center",
          fontWeight: 600,
          marginTop: { xs: "12px", md: "90px" },
          color: "wheat",
        }}
      >
        My Tech Skills
      </Typography>
    </Box>
    <Marquee gradient={false} speed={50} loop={0}>
      <Box
        display="flex"
        justifyContent={"space-between"}
        padding={"25px"}
        gap={2}
        alignItems="center"
      >
        {skills.map((skill) => (
          <Box
            key={skill.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            m={2}
          >
            <Box
              component="img"
              width="auto"
              height="150px"
              alt={skill.desc}
              src={skill.img}
              sx={{
                objectFit: "cover",
                // border:"1px solid red" 
              }}
            />
            <Typography variant="body1" mt={1} color={"white"} style={{fontSize:"20px"}}>
              {skill.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Marquee>
  </Box>
);

export default Skills;
