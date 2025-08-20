import React from "react";
import { Box, Container, Typography, Grid, styled } from "@mui/material";
import logo from "../../assets/logo.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import linkedin from "../../assets/linkedin.svg";
import { Link as RdLink } from "react-router-dom";

// Standard Link styled component
const Link = styled(RdLink)({
  color: "white",
});

// New styled component for the links with the hover effect
const NavLink = styled(Link)({
  position: 'relative',
  zIndex: 1,
  color: 'white',
  transition: 'all 0.3s ease-in-out',
  padding: '4px 8px',
  borderRadius: '8px', // Slightly larger border-radius for a softer look
  overflow: 'hidden',

  '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      opacity: 0,
      backgroundImage: "linear-gradient(120deg, #00cbcc, #00bbdf)",
      transition: 'all 0.2s ease-in-out',
      transform: 'scale(0.8)', // Start slightly smaller
  },

  '&:hover': {
      // This is the key for the glass effect
      backdropFilter: 'blur(5px)', // Adds a blur effect to the content behind it
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // A very subtle, transparent white overlay
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // A soft shadow for depth
      transform: 'translateY(-3px)',
      textDecoration: 'none',

      '&::before': {
          opacity: 1, // Make the gradient visible on hover
          transform: 'scale(1)', // Fill the space
      },
  },
});


const Footer = () => {
    const menuItems = [
        { name: "Contact Us", link: "/#contactus" },
        { name: "Products", link: "/#testimonials" },
        { name: "Company", link: "/#aboutus" },
        // { name: "Blog", link: "blog" },
    ];
    return (
        <>
            <Box sx={{ backgroundColor: "#1F1F1F", color: "white", py: 3, mt: 6, borderTopRightRadius: 300, }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md sx={{ pr: 5, borderRight: { xs: "none", md: "0.5px solid #ffffff1a" } }}>
                            <img src={logo} alt="twelve springs" style={{ marginTop: 35 }} />
                            <Box>
                                <Typography
                                    component="p"
                                    sx={{ fontFamily: "Poppins", mt: 12, fontWeight: "400" }}
                                >
                                    Twelve Springs Limited is a company registered in England and
                                    Wales with company number: 13585293.
                                </Typography>
                            </Box>
                            <Box
                                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 13 }}
                            >
                                <img src={email} alt="" srcSet="" />
                                <Typography
                                    component="p"
                                    sx={{ fontFamily: "Poppins", fontWeight: "400" }}
                                >
                                    info@twelvesprings.uk
                                </Typography>
                            </Box>
                            <Box
                                sx={{ display: "flex", alignItems: "start", gap: 2, mt: 3 }}
                            >
                                <img src={location} alt="" srcSet="" />
                                <Typography
                                    component="p"
                                    sx={{ fontFamily: "Poppins", fontWeight: "400" }}
                                >
                                    71-75 Shelton Street, Covent Garden,London, WC2H 9JQ
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ fontFamily: "Poppins", mt: 5, fontWeight: "400" }}
                                >
                                    Connect with us{" "}
                                </Typography>
                            </Box>
                            <Box
                                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                                <a href="https://www.linkedin.com/company/twelve-springs-limited-london/?viewAsMember=true" target="_blank" >
                                    <img src={linkedin} alt="" srcSet="" />
                                </a>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md sx={{ borderRight: { xs: "none", md: "0.5px solid #ffffff1a" } }} >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    mb: { xs: 1, md: 40 },
                                    fontWeight: "600",
                                    fontSize: "1.3rem", mt: 5
                                }}
                            >
                                Quick Links
                            </Typography>
                            {menuItems?.map((item, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <NavLink
                                        to={item.link}
                                        smooth={true}
                                        duration={500}
                                        style={{ textDecoration: "none", cursor: "pointer" }}
                                    >
                                        {item.name}
                                    </NavLink>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={12} md sx={{ borderRight: { xs: "none", md: "0.5px solid #ffffff1a" } }}>
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    mb: 3,
                                    fontWeight: "600",
                                    fontSize: "1.3rem", mt: 5
                                }}
                            >
                                Services
                            </Typography>
                            {[
                                "Machine Learning & AI",
                                "Intelligent Data Science",
                                "Cloud Services",
                                "Managed Services",
                                "Web Development",
                                "Mobile Development",
                                "IoT Development",
                                "Software Development",
                                "Software Quality Engineering",
                                "Dedicated Teams",
                                "UI/UX Design",
                                "API Integration",
                            ].map((service, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <NavLink to="#" style={{ textDecoration: "none" }}>{service}</NavLink>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={12} md>
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    mb: 3,
                                    fontWeight: "600",
                                    fontSize: "1.3rem", mt: 5
                                }}
                            >
                                Solutions
                            </Typography>
                            {[
                                "e-Learning",
                                "Payment Gateway",
                                "Healthcare",
                                "Automobile",
                                "Logistics/Supply Chain",
                                "CRM & Forms",
                                "Location Based Apps",
                                "Booking System",
                                "Real Estate",
                                "Social Media Platforms",
                                "Equine Software",
                                "Ecommerce & Marketplace",
                            ].map((solution, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <NavLink to="#" style={{ textDecoration: "none" }}>{solution}</NavLink>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: { xs: "center", md: "space-around" },
                    py: 2,
                    backgroundColor: "#232323",
                    px: 1,
                }}
            >
                <Typography
                    sx={{ fontFamily: "Poppins", color: "white", fontSize: "0.8rem" }}
                >
                    © 2025 Twelve Springs. Copyright and rights reserved
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: { xs: 2, md: 0 },
                        justifyContent: { xs: "center", md: "space-around" },
                    }}
                >
                    <Typography
                        sx={{ fontFamily: "Poppins", color: "white", fontSize: "0.8rem" }}
                    >
                        <NavLink to="/terms-services" style={{ textDecoration: "none", color: "inherit" }}>
                            Terms and Services
                        </NavLink>
                    </Typography>
                    <Typography
                        sx={{ fontFamily: "Poppins", color: "white", fontSize: "0.8rem" }}
                    >
                        <NavLink to="/privacy-policy" style={{ textDecoration: "none", color: "inherit" }}>
                            Privacy Policy
                        </NavLink>
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;