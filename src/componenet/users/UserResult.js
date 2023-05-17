import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import UserItem from "./UserItem";
import GithubContext from "../../Context/github/GithubContext";

function UserResult() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <Box sx={{ color: "white", opacity: "0.9" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {users.map((user) => (
            <Grid item xs={6} sm={3} md={3}>
              <UserItem key={user.id} user={user} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  } else {
    return (
      <Typography sx={{ color: "white", fontSize: "22px", mt: 5 }}>
        {" "}
        <RotateRightIcon />
        Loading...
      </Typography>
    );
  }
}

export default UserResult;
