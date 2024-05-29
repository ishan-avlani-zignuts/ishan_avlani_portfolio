import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/data/constants";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 4);

  const handleViewMore = () => {
    setShowAllProjects(true);
  };

  const handleViewLess = () => {
    setShowAllProjects(false);
  };

  return (
    <Box
      id="Projects"
      sx={{
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "0 16px",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1100px",
          gap: "12px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "52px",
            textAlign: "center",
            fontWeight: 600,
            marginTop: "20px",
            color: "wheat",
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            fontWeight: 600,
            color: "wheat",
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "28px",
            flexWrap: "wrap",
          }}
        >
          {projectsToShow.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
        {projects.length > 4 && !showAllProjects && (
          <button
            onClick={handleViewMore}
            style={{
              backgroundColor: "wheat",
              color: "black",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            View More
          </button>
        )}
        {showAllProjects && (
          <button
            onClick={handleViewLess}
            style={{
              backgroundColor: "wheat",
              color: "black",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            View Less
          </button>
        )}
      </div>
    </Box>
  );
};

export default Projects;
