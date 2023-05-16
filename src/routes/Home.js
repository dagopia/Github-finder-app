import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import MenuAppBar from "../componenet/AppBar";
import SearchAccount from "../componenet/Search";
import Footer from "../componenet/Footer";
import About from "./About";
import Contact from "./Contact";
function Home() {
  return (
    <BrowserRouter>
      <div>
        <MenuAppBar />
        <SearchAccount />
        <Routes>
          <Route
            path='/about'
            element={
              <About
                title=' Github Finder App'
                desc='This is Github Finder app for finding Github Users by Searching Them'
              />
            }
          />
          <Route
            path='/contact'
            element={
              <Contact
                title=' Contact Me'
                desc='Contact us if you have any Quation!'
                Address='22 Golagole,Addis Ababa Ethiopia'
                phoNumber='+251999887766'
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default Home;
