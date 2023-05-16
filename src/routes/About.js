import { Card, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function About({ title, desc }) {
  return (
    <Box>
      <Paper
        sx={{
          maxWidth: "500px",
          p: 4,
          ml: "20%",
          mt: "5%",

          bgcolor: "#41644A",
          color: "white",
        }}
      >
        <Box sx={{ mx: 2 }}>
          <Typography sx={{ fontFamily: "roboto", fontWeight: "bold", my: 2 }}>
            {title} <GitHubIcon sx={{ mx: 1, opacity: "0.7", mb: -1 }} />
          </Typography>
        </Box>
        <Typography sx={{ opacity: "0.5", mx: 2, my: 2 }}>{desc}</Typography>
      </Paper>
    </Box>
  );
}

export default About;
