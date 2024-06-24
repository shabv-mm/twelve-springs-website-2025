import React from "react";
import { Box, Container, Typography, Grid, IconButton, styled } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../assets/logo.svg";
import icon from "../../assets/footericon.svg";
import email from "../../assets/email.svg";
import mob from "../../assets/mobile.svg";
import location from "../../assets/location.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import FooterImg from "../../assets/Footer.svg";
// import { Link } from "react-scroll";
import { Link as RdLink } from "react-router-dom";


const Link = styled(RdLink)({
  color: "white",
})

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
        <Box
          component="img"
          src={FooterImg}
          alt="Bottom left image"
          sx={{
            position: "absolute",
            // top: 0,
            right: 0,
            height: "auto",
            width: {
              xs: "0px",
              md: "255px",
            },
          }}
        />
        <Container>
          <Grid container spacing={5}  >
            {/*<Grid item xs={12} md>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: { xs: "none", md: "block" },
                    left: "-20px",
                  }}
                >
                  <img src={icon} alt="footer icon" />
                </Box>
              </Box>
            </Grid>*/}
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
              {/* <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}
              >
                <img src={mob} alt="" srcSet="" />
                <Typography
                  component="p"
                  sx={{ fontFamily: "Poppins", fontWeight: "400" }}
                >
                  +44-735-554-4747
                </Typography>
              </Box> */}
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
                <Typography
                  key={index}
                  sx={{
                    mb: 2,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    color: "white"
                  }}
                >
                  <Link
                    key={item.name}
                    to={item.link}
                    smooth={true}
                    duration={500}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    {item.name}
                  </Link>
                </Typography>
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
                <Typography
                  key={index}
                  sx={{
                    mb: 2,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                >
                  {service}
                </Typography>
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
                <Typography
                  key={index}
                  sx={{
                    mb: 2,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                >
                  {solution}
                </Typography>
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
          © 2024 Twelve Springs. Copyright and rights reserved
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
            <Link to="/terms-services" style={{ textDecoration: "none", color: "inherit" }}>
              Terms and Services
            </Link>
          </Typography>
          <Typography
            sx={{ fontFamily: "Poppins", color: "white", fontSize: "0.8rem" }}
          >
            <Link to="/privacy-policy" style={{ textDecoration: "none", color: "inherit" }}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
