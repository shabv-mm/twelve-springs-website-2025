import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
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
import login from "../../assets/login.svg";
import CustomIcon from "../../assets/loginImage";
import frameSVG from "../../assets/FrameSVG.svg";
import { Link } from "react-scroll";

const services = [
  {
    img: Deepfake,
    title: "Machine Learning & AI",
    description:
      "Transform your goals with our expert AI and machine learning solutions.",
  },
  {
    img: DataSci,
    title: "Data Science Solutions",
    description:
      "Elevate your strategy with advanced intelligent data science solutions.",
  },
  {
    img: cloud,
    title: "Cloud Services",
    description:
      "Optimize your operations with Azure, Google, and Amazon cloud services.",
  },
  {
    img: website,
    title: "Web Development",
    description:
      "Enhance your digital footprint with professional web development services.",
  },
  {
    img: APIimg,
    title: "API Integration",
    description: "Seamless API integration with robust security measures.",
  },
  {
    img: ManageServices,
    title: "Managed Services",
    description: "Streamlined managed services for your business needs.",
  },
  {
    img: iot,
    title: "IoT Development",
    description:
      "Innovative IoT development solutions for smarter connectivity.",
  },
  {
    img: mobApp,
    title: "Mobile App Development",
    description: "Custom mobile app development tailored to your needs.",
  },
  {
    img: Widget,
    title: "Software Development",
    description:
      "Expert software development for scalable, innovative solutions.",
  },
  {
    img: Search,
    title: "Software Quality Engineering",
    description:
      "Advanced software quality engineering for robust, reliable solutions.",
  },
  {
    img: User,
    title: "Dedicated Teams",
    description: "Specialized teams for focused project delivery.",
  },
  {
    img: ColorSwatches,
    title: "UI/UX Design",
    description:
      "Crafting intuitive UI/UX designs for exceptional user experiences.",
  },
];

const ServiceCard = ({ img, title, description }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Link to="contactus" smooth={true} duration={1000}>

      <Card
        sx={{
          elevation: 3,
          py: 4,
          pl: 3,
          pr: 1,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.4)",
          // background:"linear-gradient(60deg,  #FFF3E6 0%, #FFFFFF 100%)",
          borderRadius: 0,
          border: "1px solid #f6fbff",
          cursor: "pointer",
          // height: "260px",
          ":hover": {
            boxShadow: "4px 4px 12px 0px #0C507714",
            backgroundImage: "linear-gradient(120deg, #00cbcc, #00bbdf)",
            color: "white",
          },
        }}
      >
        <img src={img} alt='expert img' style={{ marginBottom: "13px" }}></img>
        <Box sx={{ height: "85px" }}>
          <Typography
            gutterBottom
            sx={{
              fontWeight: "500",
              fontFamily: "poppins",
              fontSize: "16px",
              mb: 1.5,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{ fontWeight: "300", fontFamily: "poppins", fontSize: "12px" }}
          >
            {description}
          </Typography>
        </Box>
        {/* <Button
          fontSize="small"
          variant="text"
          sx={{
            color: "black",
            borderRadius: 0,
            // mt: 1,
            // mb: 1,
            // mt:3,
            py: 0,
            px:0,
            textTransform: "capitalize",
            fontSize: "12px",
            ":hover": {
              variant: "text",
              color: "#00A1FF",
            },
            fontFamily: "poppins",
          }}
        >
          Get Started
        </Button> */}
      </Card>
    </Link>
  </Grid>
);

const Expertise = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      paddingTop: 10,
      paddingBottom: 10,
      position: "relative", // Ensure the image is positioned relative to this Box
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
        width: {
          xs: "0px",
          md: "300px",
        },
      }}
    />
    <Typography
      sx={{ color: "#00A1FF", fontWeight: "500", fontFamily: "poppins" }}
      align="center"
      gutterBottom
    >
      OUR SERVICES
    </Typography>
    <Typography
      fontSize={"2rem"}
      fontWeight={200}
      align="center"
      gutterBottom
      sx={{
        fontWeight: "200",
        fontFamily: "poppins",
      }}
    >
      Discover{" "}
      <Typography
        fontWeight={600}
        fontSize={"2rem"}
        sx={{ display: "inline-block", fontFamily: "poppins" }}
        component="span"
      >
        Our Expertise
      </Typography>
    </Typography>
    <Typography
      align="center"
      paragraph
      width={"100%"}
      sx={{
        fontWeight: "300",
        fontFamily: "poppins",
        color: "black",
      }}
    >
      From early development to strategic planning,
    </Typography>
    <Typography
      align="center"
      paragraph
      width={"100%"}
      sx={{
        mt: -2,
        fontWeight: "300",
        fontFamily: "poppins",
      }}
    >
      our software engineering accelerates your progress and brings your
      technology vision to life.
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
