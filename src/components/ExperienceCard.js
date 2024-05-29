import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Box, Typography} from "@mui/material";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <Box
          component="img"
          width="100%"
          height="100%"
          alt={experience.school}
          src={experience.img}
          sx={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "white",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      <Box display="flex" width="100%" maxWidth="100%" gap="12px">
        <Box
          component="img"
          src={experience.img}
          alt={experience.school}
          sx={{
            height: { xs: "40px", sm: "50px" },
            borderRadius: "10px",
            marginTop: "4px",
          }}
        />
        <Box display="flex" flexDirection="column" width="100%">
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 600, color: "white" }}
          >
            {experience.role}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ fontWeight: 500, color: "white" }}
          >
            {experience.company}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{ fontWeight: 400, color: "white" }}
          >
            {experience.date}
          </Typography>
        </Box>
      </Box>
      <Box mt={2}>
        {experience?.desc && (
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "white", marginBottom: 1 }}
          >
            {experience.desc}
          </Typography>
        )}
        {experience?.skills && (
          <Box>
            <Typography
              variant="body2"
              component="div"
              sx={{ fontWeight: 500, color: "white", paddingBottom: "20px" }}
            >
              Skills:
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mt={-1}>
              {experience.skills.map((skill, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  component="span"
                  sx={{ color: "white" }}
                >
                  • {skill}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
