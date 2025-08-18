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
        <Box id="intro" sx={{ background: "linear-gradient(180deg, #FFFFFF 5% ,#FFF7EE 100%)" }}>
          <Intro />
        </Box>
        <Box id="expertise" sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFF7EE 100%)" }}>
          <Expertise />
        </Box>
        <Box id="solution" sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFF7EE 100%)" }}>
          <Solution />
        </Box>
        <div id="technologies">
          <Technologies />
        </div>
        <Box id="aboutus" sx={{ background: "linear-gradient(90deg, #FFF7EE 0%, #FFFFFF 100%)" }}>
          <Aboutus />
        </Box>
        <Box id="ourprocess" sx={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #FFF7EE 100%)" }}>
          <OurProcess />
        </Box>
        {/*<div id="blog">
          <LatestArticles />
        </div>*/}
      <Box id="testimonials" sx={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFF3E6 100%)" }}>
          <Testimonials />
        </Box>
      <Box id="contactus" sx={{ background: "linear-gradient(190deg, #FFFFFF 0%, #FFF3E6 100%)" }}>
          <Contactus />
        </Box>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Dashboard;
