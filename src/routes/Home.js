import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import MenuAppBar from "../componenet/AppBar";
import SearchAccount from "../componenet/Search";
import Footer from "../componenet/Footer";
import About from "./About";
import Contact from "./Contact";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
function Home() {
  return (
    <Box>
      {/* <Typography>Github Finder</Typography> */}
      <SearchAccount />
    </Box>
  );
}
export default Home;
