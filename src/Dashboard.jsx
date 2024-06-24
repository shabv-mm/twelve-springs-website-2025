import React from "react";
import Intro from "./pages/Components-Folder/Intro";
import Expertise from "./pages/Components-Folder/Expertise";
import { Box } from "@mui/material";
import Solution from "./pages/Components-Folder/Solutions";
import Technologies from "./pages/Components-Folder/Technologies";
import Aboutus from "./pages/Components-Folder/Aboutus";
import OurProcess from "./pages/Components-Folder/OurProcess";
import LatestArticles from "./pages/Components-Folder/LatestArticles";
import Testimonials from "./pages/Components-Folder/Testimonials";
import Contactus from "./pages/Components-Folder/Contactus";
import Footer from "./pages/Components-Folder/Footer";
import "./index.css";
import Header from "./pages/Components-Folder/Header";
import ScrollToTopButton from "./pages/Components-Folder/ScrollToBottom";

function Dashboard() {
  return (
    <>
      <Header />
      <Box>
        <div id="intro">
          <Intro />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="solution">
          <Solution />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="aboutus">
          <Aboutus />
        </div>
        <div id="ourprocess">
          <OurProcess />
        </div>
        {/*<div id="blog">
          <LatestArticles />
        </div>*/}
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contactus">
          <Contactus />
        </div>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Dashboard;
