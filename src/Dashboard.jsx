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
      <Box
        sx={{
          // Use a single repeating gradient for a seamless effect
          background: `
            repeating-linear-gradient(
              180deg,
              #FFF7EE 0%,
              #FFFFFF 50%,
              #FFF7EE 100%
            )
          `,
          backgroundSize: '100% 200vh', // Sets the size of one complete, repeating gradient wave
        }}
      >
        <Box id="intro">
          <Intro />
        </Box>
        <Box id="expertise">
          <Expertise />
        </Box>
        <Box id="solution">
          <Solution />
        </Box>
        <div id="technologies">
          <Technologies />
        </div>
        <Box id="aboutus">
          <Aboutus />
        </Box>
        <Box id="ourprocess">
          <OurProcess />
        </Box>
        {/*<div id="blog">
          <LatestArticles />
        </div>*/}
        <Box id="testimonials">
          <Testimonials />
        </Box>
        <Box id="contactus">
          <Contactus />
        </Box>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Dashboard;