import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import whiteBgLogin from "../../assets/whiteBgLogin.svg";
import { useNavigate } from "react-router-dom";

const solutions = [
  { name: "e-Learning", width: 5, description: "Revolutionizing e-Learning with interactive and engaging platforms." },
  { name: "Payment Gateway", width: 3, description: "Expert payment gateway integration for secure, seamless transactions." },
  { name: "Healthcare", width: 4, description: "Enhancing healthcare with comprehensive solutions." },
  { name: "Automobile", width: 5.5, description: "Custom software solutions for the auto industry. Explore our bespoke platform for buying and selling car parts." },
  { name: "Logistics / Supply Chain", width: 3.5, description: "Streamlining logistics and supply chain operations." },
  { name: "CRM & Forms", width: 3, description: "Boost sales with effective CRM and form solutions." },
  { name: "Location Based Apps", width: 5, description: "Intelligent location-based app for enhanced user experiences." },
  { name: "Booking System", width: 3, description: "Efficient booking system for seamless scheduling." },
  { name: "Real Estate", width: 4, description: "Revolutionizing real estate with innovative solutions." },
  { name: "Equine Software", width: 3, description: "Horse management software" },
  { name: "Social Media Platforms", width: 4, description: "Build Social media platform." },
  { name: "Ecommerce & Marketplace", width: 5, description: "E-commerce and marketplace solutions" },
];

const Solution = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("");
  const [hover, setHover] = React.useState(false);

  const handleNavigate = (name) => {
    // optionally set some selected state before navigating
    setSelected(name);
    navigate("/landing");
  };

  const handleKeyDown = (e, name) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate(name);
    }
  };

  return (
    <Box sx={{ paddingTop: 10, pb: 10 }}>
      <Typography sx={{ color: "#00A1FF", fontWeight: "500", fontFamily: "poppins" }} align="center" gutterBottom>
        INNOVATIVE SOLUTIONS
      </Typography>

      <Typography fontSize={"2rem"} align="center" gutterBottom sx={{ fontWeight: "200", fontFamily: "poppins" }}>
        Our Specialized{" "}
        <Typography fontWeight={600} fontSize={"2rem"} sx={{ display: "inline-block", fontFamily: "poppins" }} component="span">
          Domains
        </Typography>
      </Typography>

      <Typography align="center" paragraph width={"100%"} sx={{ fontWeight: "300", fontFamily: "poppins", color: "black" }}>
        From product engineering to bespoke development, we specialise in delivering secure, tailored solutions that address your specific business challenges.
      </Typography>

      <Typography align="center" paragraph width={"100%"} sx={{ mt: -2, fontWeight: "300", fontFamily: "poppins" }}>
        ensuring robust protection and peace of mind.
      </Typography>

      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          {solutions.map((solution) => (
            <Grid item xs={12} xl={solution.width} key={solution.name}>
              <Box
                role="button"
                tabIndex={0}
                aria-label={`Go to ${solution.name}`}
                onClick={() => handleNavigate(solution.name)}
                onKeyDown={(e) => handleKeyDown(e, solution.name)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{
                  cursor: "pointer",
                  color: "black",
                  py: 3,
                  px: 3,
                  backgroundColor: "#ffffffad",
                  borderLeft: "2px solid #00cbcc",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "background-image .18s ease, color .18s ease, transform .12s ease",
                  ":hover": {
                    backgroundImage: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                    color: "white",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "500", fontFamily: "poppins", fontSize: "17px" }}>
                    {solution.name}
                  </Typography>
                  <img src={whiteBgLogin} alt="solution icon" style={{ width: 42, height: 42, objectFit: "contain" }} />
                </Box>

                <Typography sx={{ fontWeight: "300", fontFamily: "poppins", fontSize: "15px" }}>
                  {solution.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solution;
