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
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default Home;