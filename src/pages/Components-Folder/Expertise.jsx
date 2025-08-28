import React from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import ExpertiseImg from "../../assets/Expertise.png";
import Deepfake from "../../assets/Deepfake.svg";
import DataSci from "../../assets/Datascience.svg";
import cloud from "../../assets/cloud.svg";
import website from "../../assets/Website.svg";
import APIimg from "../../assets/API.svg";
import ManageServices from "../../assets/ManageServices.svg";
import iot from "../../assets/IOT.svg";
import mobApp from "../../assets/mobApp.svg";
import Widget from "../../assets/Widget.svg";
import Search from "../../assets/Search.svg";
import ColorSwatches from "../../assets/ColorSwatches.svg";
import User from "../../assets/User.svg";
import frameSVG from "../../assets/FrameSVG.svg";

const services = [
  { img: Deepfake, title: "Machine Learning & AI", description: "Transform your goals with our expert AI and machine learning solutions." },
  { img: DataSci, title: "Data Science Solutions", description: "Elevate your strategy with advanced intelligent data science solutions." },
  { img: cloud, title: "Cloud Services", description: "Optimize your operations with Azure, Google, and Amazon cloud services." },
  { img: website, title: "Web Development", description: "Enhance your digital footprint with professional web development services." },
  { img: APIimg, title: "API Integration", description: "Seamless API integration with robust security measures." },
  { img: ManageServices, title: "Managed Services", description: "Streamlined managed services for your business needs." },
  { img: iot, title: "IoT Development", description: "Innovative IoT development solutions for smarter connectivity." },
  { img: mobApp, title: "Mobile App Development", description: "Custom mobile app development tailored to your needs." },
  { img: Widget, title: "Software Development", description: "Expert software development for scalable, innovative solutions." },
  { img: Search, title: "Software Quality Engineering", description: "Advanced software quality engineering for robust, reliable solutions." },
  { img: User, title: "Dedicated Teams", description: "Specialized teams for focused project delivery." },
  { img: ColorSwatches, title: "UI/UX Design", description: "Crafting intuitive UI/UX designs for exceptional user experiences." },
];

const ServiceCard = ({ img, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/landing");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate("/landing");
    }
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Go to ${title}`}
        sx={{
          elevation: 3,
          py: 4,
          pl: 3,
          pr: 1,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.4)",
          borderRadius: 0,
          border: "1px solid #f6fbff",
          cursor: "pointer",
          userSelect: "none",
          transition: "transform .18s ease, box-shadow .18s ease, background-image .18s ease",
          ":hover": {
            boxShadow: "4px 4px 12px 0px #0C507714",
            backgroundImage: "linear-gradient(120deg, #00cbcc, #00bbdf)",
            color: "white",
            transform: "translateY(-4px)",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img src={img} alt={title} style={{ marginBottom: 13 }} />
        <Box sx={{ height: 85 }}>
          <Typography
            gutterBottom
            sx={{
              fontWeight: 500,
              fontFamily: "poppins",
              fontSize: 16,
              mb: 1.5,
            }}
          >
            {title}
          </Typography>

          <Typography sx={{ fontWeight: 300, fontFamily: "poppins", fontSize: 12 }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

const Expertise = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      pt: 10,
      pb: 10,
    }}
  >
    <Box
      component="img"
      src={frameSVG}
      alt="Top left image"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "auto",
        width: { xs: "0px", md: "300px" },
      }}
    />

    <Typography sx={{ color: "#00A1FF", fontWeight: 500, fontFamily: "poppins" }} align="center" gutterBottom>
      OUR SERVICES
    </Typography>

    <Typography fontSize="2rem" fontWeight={200} align="center" gutterBottom sx={{ fontFamily: "poppins" }}>
      Discover{" "}
      <Typography fontWeight={600} fontSize="2rem" component="span" sx={{ display: "inline-block", fontFamily: "poppins" }}>
        Our Expertise
      </Typography>
    </Typography>

    <Typography align="center" paragraph width="100%" sx={{ fontWeight: 300, fontFamily: "poppins", color: "black" }}>
      From early development to strategic planning,
    </Typography>

    <Typography align="center" paragraph width="100%" sx={{ mt: -2, fontWeight: 300, fontFamily: "poppins" }}>
      our software engineering accelerates your progress and brings your technology vision to life.
    </Typography>

    <Container sx={{ mt: 5 }}>
      <Grid container spacing={1.5}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Expertise;
