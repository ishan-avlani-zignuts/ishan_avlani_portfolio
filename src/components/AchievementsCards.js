import React from "react";
import { Box, Typography } from "@mui/material";

const AchievementCard = ({ img, desc, reverse }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: reverse ? "row-reverse" : "row" },
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "40px",
        width: "100%",
        maxWidth: "1200px",
        backgroundColor: "#232F3A",
        borderRadius: "20px",
        border: "1px solid wheat",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: { xs: "350px", sm: "350px" } }}>
        <img
          src={img}
          alt="achievement"
          style={{
            width: "350px",
            height: "350px",
            objectFit: "cover",
            borderRadius: {
              xs: "20px 20px 0 0",
              sm: reverse ? "0 20px 20px 0" : "20px 0 0 20px",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          padding: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "18px", sm: "24px" },
            textAlign: "center",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default AchievementCard;
