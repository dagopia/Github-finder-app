import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import UserCard from "../componenet/User";
function Contact({ title, desc, Address, phoNumber }) {
  return (
    <>
      <Paper
        sx={{
          maxWidth: "500px",
          p: 4,
          ml: "20%",
          mt: "5%",
          bgcolor: "#263A29",

          color: "white",
        }}
      >
        <Box sx={{ mx: 2 }}>
          <Typography sx={{ fontFamily: "roboto", fontWeight: "bold", my: 2 }}>
            {title} <GitHubIcon sx={{ mx: 1, opacity: "0.7", mb: -1 }} />
          </Typography>
        </Box>
        <Typography sx={{ opacity: "0.5", mx: 2, my: 2 }}>{desc}</Typography>
        <Typography sx={{ opacity: "0.5", mx: 2, my: 2 }}>
          {Address}
          {phoNumber}
        </Typography>
      </Paper>
      <UserCard />
    </>
  );
}

export default Contact;
