// import React from 'react'

// const ProjectCard = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ProjectCard
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        width: "330px",
        height: "290px",
        backgroundColor: "#fff",
        cursor: "pointer",
        borderRadius: "10px",
        boxShadow: "0 0 12px 4px rgba(0, 0, 0, 0.4)",
        overflow: "hidden",
        padding: "26px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <img
        src={project.img}
        style={{
          width: "100%",
          maxHeight: "180px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 16px 2px rgba(0, 0, 0, 0.3)",
        }}
        alt={project.name}
      />
      <div style={{ width: "100%" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "black",
            overflow: "hidden",
            display: "-webkit-box",
            maxWidth: "100%",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontWeight: 400,
            color: "#666",
            overflow: "hidden",
            marginTop: "8px",
            display: "-webkit-box",
            maxWidth: "100%",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {project.desc}
        </div>
      </div>
      <a
        href={project.link}
        style={{
          color: "#007bff",
          textDecoration: "none",
          fontWeight: 600,
          textAlign: "center",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
