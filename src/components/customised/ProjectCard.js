import { Button } from "@mui/material";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; 
const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        maxWidth: "350px",
        width:"100%",
        height: "350px",
        backgroundColor: "#232F3A",
        cursor: "pointer",
        borderRadius: "10px",
        boxShadow: "0 0 12px 4px rgba(0, 0, 0, 0.4)",
        overflow: "hidden",
        padding: "26px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        transition: "all 0.5s ease-in-out",
        border: "1px solid wheat",
      }}
    >
      <img
        src={project.img}
        style={{
          width: "100%",
          minHeight: "180px",
          maxHeight: "180px",
          backgroundColor: "#fff",
          boxShadow: "0 0 16px 2px rgba(0, 0, 0, 0.3)",
        }}
        alt={project.name}
      />
      <div style={{ width: "100%" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "wheat",
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontWeight: 400,
            color: "white",
            overflow: "hidden",
            marginTop: "15px",
            maxWidth: "100%",
            height: "55px",
          }}
        >
          {project.desc}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "auto",
      }}>
        <Button
          variant="contained"
          color="primary"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<FaExternalLinkAlt />}
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
