import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import buttonImg from "../../assets/button.svg";
import aboutus2 from "../../assets/aboutus2.svg";
import aboutus1 from "../../assets/aboutus1.svg";
import decor1 from "../../assets/decor1.svg";
import decor2 from "../../assets/decor2.svg";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column", paddingTop: 26 }}>
      <Container>
        <Typography
          sx={{
            color: "#00A1FF",
            fontWeight: "500",
            fontFamily: "poppins",
            pt: 2,
          }}
          align="center"
          gutterBottom
        >
          COMPANY
        </Typography>
        <Typography
          // fontSize={"2rem"}
          fontWeight={200}
          align="center"
          gutterBottom
          sx={{
            fontWeight: "200",
            fontFamily: "poppins",
            // color: "#ffff",
            lineHeight: "67.2px",
            fontSize: "40px",
            mb: { md: 5, xs: 0 },
          }}
        >
          About{" "}
          <Typography
            fontWeight={500}
            component="span"
            sx={{
              display: "inline-block",
              fontFamily: "poppins",
              // color: "#FFFFFF",
              lineHeight: "70px",
              fontSize: "40px",
            }}
          >
            Us
          </Typography>{" "}
        </Typography>

        <Grid
          container
          spacing={{ xs: 0, md: 1 }}
          sx={{ mb: { xs: 5, md: 2 } }}
        >
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                // borderRight: "none",
                px: 5,
                pt: 2.6,
                // py: 1.9,
                height: "100%",
                // justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                // borderTopLeftRadius: 100,
                // boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                borderTopLeftRadius: 50,
                border: "1px solid #aaa",

                // boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                // borderTop: "1px solid #aaa",
                // borderBottom: "1px solid #aaa",
                mt: { xs: 3, md: -3 },
                mb: { xs: 5, md: 0 },
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: "300",
                  fontSize: { xs: 15, sm: 18 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                }}
              >
                Discover intelligent business solutions: CRM, Learning
                Management, bespoke databases, and Fintech.
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: "400",
                  fontSize: { xs: 15, sm: 18 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                }}
              >
                Utilize our APIs for tailored tools with business intelligence,
                offering top-notch analytic reports.
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: "300",
                  fontSize: { xs: 15, sm: 18 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                }}
              >
                Elevate your business with comprehensive applications covering
                data recording, secure storage, and insightful analytics. Our
                upcoming AI bot, ANA, will revolutionize your operations,
                serving as an integrated sales and financial guide. Ana is our
                innovation, aimed at empowering small companies to manage sales
                and finances effectively.
              </Typography>
              <Link to="contactus" smooth={true} duration={1000}>
                <Button
                  onClick={() => navigate("/landing")}
                  variant="contained"
                  sx={{
                    mt: { xs: 0, sm: 2 },
                    mb: { md: 5, xs: 0 },
                    borderRadius: 0,
                    px: 3.5,
                    py: 1.5,
                    //   height: "56px",
                    //   width: "197px",
                    fontWeight: "400",
                    fontSize: 16,
                    fontFamily: "poppins",
                    lineHeight: "24px",
                    textTransform: "capitalize",
                    backgroundColor: "black",
                    "&:hover": {
                      background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                      color: "#fff",
                    },
                  }}
                  endIcon={
                    <img
                      src={buttonImg}
                      alt="get in touch"
                      style={{ marginLeft: 5 }}
                    ></img>
                  }
                >
                  Get in Touch
                </Button>
              </Link>{" "}
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                // border: "1px solid #aaa",
                px: 5,
                py: 3,
                height: "100%",
                // justifyContent: "center",
                display: "flex",
                boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.4)",
                flexDirection: "column",
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 0,
                // backgroundColor: "#ebf5f6",
                // background:
                //   "linear-gradient(to left bottom, #daf8f4, #e7f9ff, #f6fbff, #ffffff)",
                mt: { xs: 0, md: -3 },
                mb: { xs: 0, md: 5 },
              }}
            >
              <Typography
                // variant="body1"
                sx={{
                  fontWeight: "300",
                  // fontSize: { xs: 15, sm: 15 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  marginBottom: 2,
                  display: "block",
                  color: "black",
                }}
              >
                Choose Twelve Springs Limited as your trusted partner, dedicated
                to providing high-quality, innovative software solutions that
                propel your business forward.{" "}
              </Typography>
              <Typography
                // variant="body1"
                sx={{
                  fontWeight: "500",
                  // fontSize: { xs: 15, sm: 15 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  // marginBottom: 3,
                  display: "block",
                  color: "black",
                }}
              >
                Based in London, Twelve Springs Limited is a vibrant software
                development company dedicated to transforming ideas into
                creative digital solutions. We pride ourselves on our youthful
                energy and innovative approach. However, operating in a highly
                competitive market requires us to continuously innovate and
                stand out from numerous established firms. As we expand, scaling
                our operations to handle larger and more complex projects is a
                key priority. Additionally, while our broad approach allows for
                flexibility, defining our industry focus and technical
                specializations will help potential clients better understand
                how we can meet their unique needs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{ position: "relative", width: "100%", backgroundColor: "#202020" }}
      >
        <Container>
          {" "}
          <Grid
            container
            spacing={4}
            sx={{
              //   mt: { md: -5.8, xs: 0 },
              py: { md: 8, xs: 2 },

              color: "white",
              display: "flex",
              alignItems: { sm: "center", xs: "flex-start" },
              //   justifyContent: { sm: "center", xs: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={decor1}
              // src={ExpertiseImg}
              // src="path_to_your_image" // Replace with the path to your image
              alt="Top left image"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                // width: '300px', // Adjust the width as necessary
                height: "auto",
                width: { xs: "0px", md: "300px" },
              }}
            />
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                // display: { md: "flex", xs: "none" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <img
                src={aboutus2}
                alt="about us 2"
                style={{
                  width: "90%",
                  objectFit: "contain",
                  //   height: 500,
                }}
              />
              <Typography
                sx={{
                  fontWeight: "199",
                  fontSize: { md: 48, xs: 30 },
                  fontFamily: "poppins",
                  //   lineHeight: "67.2px",
                }}
              >
                Ready to
              </Typography>

              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { md: 48, xs: 30 },
                  fontFamily: "poppins",
                  //   lineHeight: "67.2px",
                  mb: 2,
                }}
              >
                Start your project?
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: "300",
                  fontSize: { xs: 15, sm: 20 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                }}
              >
                <span style={{ color: "#00cbcc" }}>Contact Us</span> today to
                discuss your requirements and let us help you achieve your
                business goals.
              </Typography>
              <Link to="contactus" smooth={true} duration={1000}>
                <Button
                  onClick={() => navigate("/landing")}
                  variant="contained"
                  sx={{
                    mt: 2,
                    mb: 2,

                    borderRadius: 0,
                    px: 3.5,
                    py: 1.5,
                    display: { md: "flex", xs: "none" },
                    //   height: "56px",
                    //   width: "197px",
                    fontWeight: "400",
                    fontSize: 16,
                    fontFamily: "poppins",
                    lineHeight: "24px",
                    textTransform: "capitalize",
                    backgroundImage: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                  }}
                  endIcon={
                    <img
                      src={buttonImg}
                      alt="start your project"
                      style={{ marginLeft: 5 }}
                    ></img>
                  }
                >
                  Start your project
                </Button>
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ pl: { xs: 2, md: 0 }, mt: { xs: 3, md: 0 } }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: 15, sm: 30 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  // color: "#00a1ff",
                  mb: 2,
                }}
              >
                why choose us?
              </Typography>
              <Box sx={{ backgroundColor: "" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "100",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",
                    lineHeight: "25px",
                    marginBottom: 2,
                    display: "block",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: "400" }}>
                    Proven Track Record
                  </span>{" "}
                  : With a history of successful projects and satisfied clients,
                  we demonstrate our reliability and capability to deliver
                  results.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "100",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",
                    lineHeight: "25px",
                    marginBottom: 2,
                    display: "block",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: "400" }}>
                    Transparent Communication
                  </span>{" "}
                  : We maintain open and clear communication throughout the
                  development process, ensuring you are informed and involved
                  every step of the way.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "100",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",
                    lineHeight: "25px",
                    marginBottom: 2,
                    display: "block",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: "400" }}>
                    Scalable Solutions
                  </span>{" "}
                  : Our adaptable approach allows us to scale solutions to meet
                  your evolving needs, whether you're a startup or a large
                  enterprise.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "100",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",
                    lineHeight: "25px",
                    marginBottom: 2,
                    display: "block",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: "400" }}>
                    Robust Security Measures
                  </span>{" "}
                  : We prioritize data security, implementing rigorous measures
                  to protect your sensitive information and maintain
                  confidentiality.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "100",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",
                    lineHeight: "25px",
                    marginBottom: 2,
                    display: "block",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: "400" }}>
                    Post-Implementation Support
                  </span>{" "}
                  : Our commitment extends beyond project completion; we provide
                  ongoing support and maintenance to ensure your solution
                  continues to perform optimally.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "100",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",
                    lineHeight: "25px",
                    marginBottom: 2,
                    display: "block",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: "400" }}>
                    Commitment to Deadlines
                  </span>{" "}
                  : We understand the importance of deadlines and strive to
                  deliver on time, without compromising on quality.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "100",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",
                    lineHeight: "25px",
                    marginBottom: 2,
                    display: "block",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: "400" }}>
                    Customer Satisfaction
                  </span>{" "}
                  : Your satisfaction is our priority, and we go above and
                  beyond to exceed your expectations, fostering long-term
                  partnerships.
                </Typography>
              </Box>
            </Grid>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                ml: 2,
                borderRadius: 0,
                px: 3.5,
                py: 1.5,
                display: { xs: "flex", md: "none" },
                //   height: "56px",
                //   width: "197px",
                fontWeight: "400",
                fontSize: 16,
                fontFamily: "poppins",
                lineHeight: "24px",
                textTransform: "capitalize",
                backgroundColor: " #00cbcc",
              }}
              endIcon={
                <img
                  src={buttonImg}
                  alt="start your project"
                  style={{ marginLeft: 5 }}
                ></img>
              }
            >
              Start your project
            </Button>
            <Box
              component="img"
              src={decor2}
              // src={ExpertiseImg}
              // src="path_to_your_image" // Replace with the path to your image
              alt="Top right image"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                // width: '300px', // Adjust the width as necessary
                height: "auto",
                width: { xs: "0px", md: "300px" },
              }}
            />
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Aboutus;
