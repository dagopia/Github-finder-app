import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function NotFound() {
  return (
    <Box sx={{ mt: "10%", p: 5, display: "flex", flexDirection: "column" }}>
      <Typography sx={{ color: "white", fontSize: "100px" }}>Oops!</Typography>
      <Typography sx={{ color: "white", fontSize: "42px" }}>
        404 - Page not found!{" "}
      </Typography>
      <Box
        sx={{
          p: 1,
          m: 1,
          borderRadius: "7px",
          ml: "45%",
          maxWidth: "150px",
          bgcolor: "White",
        }}
      >
        <Link to='/' type='button'>
          <HomeIcon /> Back to Home
        </Link>
      </Box>
    </Box>
  );
}

export default NotFound;
