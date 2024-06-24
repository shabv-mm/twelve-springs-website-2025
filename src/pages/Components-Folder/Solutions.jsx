import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cutting from "../../assets/Cutting.svg";
import whiteBgLogin from "../../assets/whiteBgLogin.svg";
import nonBgLogin from "../../assets/nonBgLogin.svg";
import halfnhalf from "../../assets/halfnhal.svg";
import { Link } from "react-scroll";

const solutions = [
  {
    name: "e-Learning",
    width: 5,
    description:
      "Revolutionizing e-Learning with interactive and engaging platforms.",
  },
  {
    name: "Payment Gateway",
    width: 3,
    description:
      "Expert payment gateway integration for secure, seamless transactions.",
  },
  {
    name: "Healthcare",
    width: 4,
    description: "Enhancing healthcare with comprehensive solutions.",
  },
  {
    name: "Automobile",
    width: 5.5,
    description:
      "Custom software solutions for the auto industry. Explore our bespoke platform for buying and selling car parts.",
  },
  {
    name: "Logistics / Supply Chain",
    width: 3.5,
    description: "Streamlining logistics and supply chain operations.",
  },
  {
    name: "CRM & Forms",
    width: 3,
    description: "Boost sales with effective CRM and form solutions.",
  },
  {
    name: "Location Based Apps",
    width: 5,
    description:
      "Intelligent location-based app for enhanced user experiences.",
  },
  {
    name: "Booking System",
    width: 3,
    description: "Efficient booking system for seamless scheduling.",
  },
  {
    name: "Real Estate",
    width: 4,
    description: "Revolutionizing real estate with innovative solutions.",
  },
  {
    name: "Equine Software",
    width: 3,
    description: "Horse management software",
  },
  {
    name: "Social Media Platforms",
    width: 4,
    description: "Build Social media platform.",
  },

  {
    name: "Ecommerce & Marketplace",
    width: 5,
    description: "E-commerce and marketplace solutions",
  },
];

const Solution = () => {
  const [selected, setSelected] = React.useState("");
  const [hover, setHover] = React.useState(false);
  return (
    <Box
      sx={{ paddingTop: 10, pb: 10, background: "#e1f8ff8c" }}
    >
      <Typography
        sx={{ color: "#00A1FF", fontWeight: "500", fontFamily: "poppins" }}
        align="center"
        gutterBottom
      >
         INNOVATIVE SOLUTIONS
      </Typography>
      <Typography
        fontSize={"2rem"}
        align="center"
        gutterBottom
        sx={{
          fontWeight: "200",
          fontFamily: "poppins",
        }}
      >
       Our Specialized  {" "}
        <Typography
          fontWeight={600}
          fontSize={"2rem"}
          sx={{ display: "inline-block", fontFamily: "poppins" }}
        variant="span"

        >
         Domains
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
From product engineering to bespoke development, we specialise in delivering secure, tailored solutions that address your specific business challenges.      </Typography>
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
        
        ensuring robust protection and peace of mind.
      </Typography>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          {solutions.map((solution) => (
            <Grid item xs={12} xl={solution.width} key={solution.name}>
                  <Link to="contactus" smooth={true} duration={1000}>

              <Box
                sx={{
                  cursor: "pointer",
                  color: "black",
                  py: 3,
                  px: 3,
                  backgroundColor: "#ffffffad",

                  borderLeft: "2px solid #00A1FF",
                  height: "150px",
                  ":hover": {
                    backgroundColor: " #00A1FF",
                    color: " white",
                  },
                }}
                onClick={() => setSelected(solution.name)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <Box
                  display="flex"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontFamily: "poppins",
                      fontSize: "17px",
                    }}
                  >
                    {solution.name}
                  </Typography>
                    <img
                      src={whiteBgLogin}
                      alt="solution icon"
                    />
                 
                </Box>
                <Typography
                  sx={{
                    fontWeight: "300",
                    fontFamily: "poppins",
                    // fontSize: "1em",
                    fontSize: "15px",
                  }}
                >
                  {solution.description}
                </Typography>
              </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solution;
