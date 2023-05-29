import * as React from "react";
import { Box, Grid, Link } from "@mui/material";
import { useState, useContext } from "react";

import Button from "@mui/material/Button";
import { Avatar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { LocalPhone } from "@mui/icons-material";
import GithubContext from "../Context/github/GithubContext";
import UserItem from "./users/UserItem";

const UserCard = ({ user }) => {
  const { users, searchUser, clearUser } = useContext(GithubContext);

  // const { data } = useGetData(1, "taxpayers");
  // console.log(data?.data.fullName);
  return (
    <Box>
      {users.map((user) => (
        <Box
          sx={{
            pt: 1,
            mt: 1,
            backgroundColor: "#0F0D0D",
            borderRadius: 2,
            color: "white",
            fontSize: "bold",
            mt: 5,
            maxWidth: "30%",
          }}
        >
          <Box sx={{ mt: -3 }}>
            <Avatar
              src={user.avatar_url}
              sx={{ left: "50%", mt: "-10" }}
              size='large'
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "bold",
              }}
            >
              {/* {`Mr. ${data?.data.fullName}`} */}
              {user?.login}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "bold",
              }}
            >
              {<LocalPhone />}
              {/* {data?.data.phoneNumber} */}
              +251-925-673-592
            </Typography>

            <Button
              variant='contained'
              type='Link'
              href={user.html_url}
              to={`{user.url}`}
              sx={{
                opacity: "0.6",
                m: 2,
                color: "White",
                backgroundColor: "#00ABB6",
                fontWeight: "bold",
              }}
            >
              Visit Profile
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default UserCard;
