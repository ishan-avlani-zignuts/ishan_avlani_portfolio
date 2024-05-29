import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../assets/data/constants";
import ExperienceCard from "../components/ExperienceCard";
import { Box, Typography} from "@mui/material";

const Experience = () => {
  return (
    <Box
      id="Experience"
      sx={{
        paddingTop: "100px",
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
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "1100px",
          "@media (max-width: 960px)": {
            flexDirection: "column",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", md: "52px" },
            textAlign: "center",
            fontWeight: 600,
            marginTop: { xs: "12px", md: "20px" },
            color: "wheat",
          }}
        >
          Experience
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            textAlign: "center",
            fontWeight: 600,
            color: "wheat",
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </Typography>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Experience;
