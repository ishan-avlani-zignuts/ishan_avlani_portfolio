import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import ProjectCard from "../components/customised/ProjectCard";
import { projects } from "../assets/data/constants";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
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
      id="projects"
      sx={{
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
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
          Projects 🎯
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
          I have undertaken a wide variety of projects. Here are a few notable
          examples of my work.
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > 4 && !showAllProjects && (
          <div style={{ textAlign: "center", marginTop: "auto" }}>
            <Button
              onClick={handleViewMore}
              variant="contained"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<MdExpandMore />}
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              View More
            </Button>
          </div>
        )}
        {showAllProjects && (
          <Button
            onClick={handleViewLess}
            variant="contained"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<MdExpandLess />}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            View Less
          </Button>
        )}
      </div>
    </Box>
  );
};

export default Projects;
