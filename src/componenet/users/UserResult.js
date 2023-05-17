import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import UserItem from "./UserItem";
import GithubContext from "../../Context/github/GithubContext";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function UserResult() {
  const { users, loading, fetchUsers } = useContext(GithubContext);
  useEffect(() => {
    fetchUsers();
  }, []);

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
