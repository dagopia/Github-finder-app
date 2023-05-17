import { Paper, Typography } from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <Paper
      sx={{
        display: "flex",
        px: 5,
        bgcolor: "#454545",

        color: "white",
      }}
    >
      <Box sx={{}}>
        <img
          src={avatar_url}
          alt='profile'
          width='90px'
          height='90px'
          style={{ borderRadius: "50%", padding: "1px" }}
        />
      </Box>

      <Box sx={{ mx: 2, my: 3, color: "white" }}>
        <Typography sx={{ opacity: "1" }}>{login}</Typography>{" "}
        <Box sx={{ opacity: "0.6" }}>
          <Link to={`/users/${login}`} underline='none'>
            Visit profile
          </Link>
        </Box>
      </Box>
    </Paper>
  );
}

export default UserItem;
