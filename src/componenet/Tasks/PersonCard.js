import { Avatar, Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
function PersonCard() {
  const [user, setUser] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(
      `https://63be80d7f5cfc0949b58fb8b.mockapi.io/aris/v0/users`
    );
    const data = await response.json();
    setUser(data);
    console.log(data);
  };

  return (
    <Box sx={{ p: 5 }}>
      <Paper
        sx={{
          maxWidth: "300px",

          display: "flex",
          flexDirection: "column",
          px: 3,
          bgcolor: "",
        }}
      >
        <Avatar
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
          sx={{ width: 56, height: 56, left: "45%", mt: "-25px" }}
        />

        <Typography sx={{ mx: 2, my: 2 }}>Ms,Dagem Teshome</Typography>

        <Typography sx={{ mx: 4, my: 1 }}>Phone:+251933907735</Typography>
        <Typography sx={{ mx: 4, my: 1 }}>Address:Addis Ababa</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "centetr",
          }}
        >
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <FacebookIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "centetr",
            py: 2,
          }}
        >
          <Button variant='outlined' onClick={fetchUsers} sx={{}}>
            Status
          </Button>
          <Button variant='contained' color='success' sx={{ mx: 2 }}>
            Status
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default PersonCard;
