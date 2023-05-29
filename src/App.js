import logo from "./logo.svg";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { GithubProvider } from "./Context/github/GithubContext";
import Home from "./routes/Home";
import MenuAppBar from "./componenet/AppBar";
import SearchAccount from "./componenet/Search";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./componenet/Footer";
import NotFound from "./routes/NotFound";
import PersonCard from "./componenet/Tasks/PersonCard";
function App() {
  return (
    <GithubProvider>
      <div className='App'>
        <BrowserRouter>
          <div>
            <MenuAppBar />

            <Routes>
              <Route path='/' element={<Home />} />
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
              <Route path='/person' element={<PersonCard />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </GithubProvider>
  );
}

export default App;
