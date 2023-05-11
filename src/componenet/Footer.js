import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import GitHubIcon from "@mui/icons-material/GitHub";
const pages = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Footer() {
  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: "#000000",
        height: "20%",
        marginBottom: "0px",
        marginTop: "35%",
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            sx={{
              mx: 2,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            Github Finder
          </Typography>

          <Box sx={{}}></Box>
          <Typography
            sx={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Copyright@2023 By DAgem
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
