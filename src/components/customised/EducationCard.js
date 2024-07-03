import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Education = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <Box
          component="img"
          width="100%"
          height="100%"
          alt={education.school}
          src={education.img}
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
        border: "1px solid wheat",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={education.date}
    >
      <Box display="flex" width="100%" maxWidth="100%" gap="12px">
        <Box
          component="img"
          src={education.img}
          sx={{
            width:"auto",
            height: { xs: "40px", sm: "60px", md:"60px" },
            borderRadius: "10px",
            marginTop: "4px",
          }}  
        />
        <Box display="flex" flexDirection="column" width="100%">
          <Typography
            variant="h6"
            fontWeight="600"
            color={"wheat"}
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
            }}
          >
            {education.degree}
          </Typography>
          <Typography
            variant="body2"
            fontWeight="500"
            color={"wheat"}
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            {education.school}
          </Typography>
          <Typography
            variant="body2"
            fontWeight="400"
            sx={{
              fontSize: { xs: "10px", sm: "12px" },
              color:"white"
            }}
          >
            {education.date}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        fontWeight="500"
        color="wheat"
        sx={{
          fontSize: { xs: "12px", sm: "14px" },
        }}
      >
        <b>Grade :</b> {education.grade}
      </Typography>
      <Typography
        variant="body2"
        fontWeight="400"
        color={(theme) => `${theme.palette.text.primary}99`}
        sx={{
          fontSize: { xs: "12px", sm: "15px" },
          marginBottom: "10px",
        }}
      >
        <Box component="span" textAlign={"justify"}>{education.desc}</Box>
      </Typography>
    </VerticalTimelineElement>
  );
};

export default Education;
