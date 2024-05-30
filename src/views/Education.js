import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { education } from "../assets/data/constants";
import EducationCard from "../components/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1100px",
          gap: "12px",
          "@media (max-width: 960px)": {
            flexDirection: "column",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", sm: "52px" },
            textAlign: "center",
            fontWeight: 600,
            marginTop: { xs: "12px", sm: "20px" },
            color: "wheat",
          }}
        >
          Education 🎓
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "16px", sm: "18px" },
            textAlign: "center",
            fontWeight: 600,
            color: "wheat",
            marginBottom: "40px",
          }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Typography>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Education;
