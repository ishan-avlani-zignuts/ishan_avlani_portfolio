import React from "react";
import { Box, Typography } from "@mui/material";
import { achievements } from "../assets/data/constants";
import AchievementCard from "../components/AchievementsCards";

const Achievements = () => {
  return (
    <Box
      id="achievements"
      sx={{
        paddingTop: "100px",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
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
          Achievements 🏆
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
          Embarking on a journey of growth and self-discovery, my educational
          achievements stand as milestones, each representing a unique triumph
          in my pursuit of excellence.
        </Typography>

        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            img={achievement.img}
            desc={achievement.desc}
            reverse={index % 2 !== 0}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Achievements;
