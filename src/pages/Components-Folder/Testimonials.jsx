import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Container,
} from "@mui/material";
import buttonImg from "../../assets/button.svg";
import process2 from "../../assets/process2.svg";
import blog3 from "../../assets/blog3.svg";
import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";
import decor5 from "../../assets/decor5.svg";
import decor6 from "../../assets/decor6.svg";
import buttonImg2 from "../../assets/buttonblue.svg";
import testimonial1 from "../../assets/testimonial1.svg";
import testimonial2 from "../../assets/testimonial2.svg";
import testimonial3 from "../../assets/testimonial3.svg";
import page1 from "../../assets/page1_3.svg";
import buttonImg3 from "../../assets/buttonblack.svg";

const Testimonials = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        marginBottom: 20,
        paddingBottom: 20,
      }}
    >

      
      <Box
        component="img"
        src={decor5}
        // src={ExpertiseImg}
        // src="path_to_your_image" // Replace with the path to your image
        alt="Top left image"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          // width: '300px', // Adjust the width as necessary
          height: "auto",
          width: { xs: "0px", md: "300px", xs: "0px" },
          zIndex:-1

        }}
        
      ></Box>{" "}
      <Box
        component="img"
        src={decor6}
        // src={ExpertiseImg}
        // src="path_to_your_image" // Replace with the path to your image
        alt="Top left image"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          // width: '300px', // Adjust the width as necessary
          height: "auto",
          width: { xs: "0px", md: "300px", xs: "0px" },
          zIndex:-1
        }}
      ></Box>
      <Box sx={{ height: { md: 30, sm: 10 } }}></Box>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: { xs: 15, sm: 20 },
          fontFamily: "poppins",
          lineHeight: "30px",
          textTransform: "uppercase",
          color: "#00a1ff",
          mb: 1,
          //   mt: { md: 10, xs: 3 },
        }}
      >
        testimonial
      </Typography>
      <Typography
        sx={{
          fontWeight: "100",
          fontSize: { md: 48, xs: 30 },
          fontFamily: "poppins",
          //   lineHeight: "67.2px",
          mb: 1,
        }}
      >
        {"What" + " "}
        <span
          style={{
            fontWeight: "400",
            // fontSize: { md: 48, xs: 30 },
            fontFamily: "poppins",
            // lineHeight: "67.2px",
          }}
        >
          Clients{" "}
        </span>
        Say
      </Typography>
      <Container
      // sx={{
      //   width: { sm: "100%", md: "70%" },
      //   margin: { sm: "auto", xs: "none" },
      // }}
      >
        <Typography
          sx={{
            mb: { sm: 4, xs: 2 },
            fontWeight: "300",
            fontSize: { xs: 15, sm: 20 },
            fontFamily: "poppins",
            //   lineHeight: "30px",
            // mx: { md: 48, xs: 3 },
          }}
        >
         Hear What Our Satisfied Customers Have to Say
        </Typography>

        <Grid container sx={{ px: { xs: 2, md: 0 } }}>
          <Grid
            item
            xs={12}
            // sm={5.8}
            xl={3.8}
            sx={{
              // minHeight: "412px",
              backgroundColor: "white",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              px: { sm: 6, xs: 2 },
              py: { sm: 6, xs: 2 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              //   gap: 8,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: 20, sm: 20 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  //   color: "#00a1ff",
                  mb: 1,
                }}
              >
                Twelve Springs is versatile
              </Typography>
              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: { xs: 10, sm: 20,md:15 },
                
                  fontFamily: "poppins",
                  //   lineHeight: "30px",
                  //   textTransform: "capitalize",

                  //   color: "#00a1ff",
                  mb: 1,
                  mt: 2,
                }}
              >
                The team at Twelve Springs is versatile, dynamic and creative.
                They ensure that they use the best and most current technology
                stack to give you a product that will hold its own in years to
                come.
              </Typography>
            </Box>{" "}
            <Box sx={{ height: { sm: 80, xs: 20 } }}></Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              justifyContent={"center"}
            >
              <img src={testimonial1} alt='testamonial 1' style={{ scale: "0.95", }}></img>
              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: { xs: 15, sm: 18 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  //   color: "#00a1ff",
                  //   mb: 1,
                }}
              >
                Instahappy App
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            // sm={5.75}
            xl={3.8}
            sx={{
              ml: { xs: 0, xl: 3 },
              mt: { xl: 0, xs: 3 },
              // minHeight: "412px",
              backgroundColor: "white",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              px: { sm: 6, xs: 2 },
              py: { sm: 6, xs: 2 },
              display: "flex",
              flexDirection: "column",
              //   gap: 8,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: 15, sm: 20 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  //   color: "#00a1ff",
                  mb: 1,
                }}
              >
                Great Working Partnership for over a decade
              </Typography>
              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: { xs: 10, sm: 20,md:15 },
                  fontFamily: "poppins",
                  //   lineHeight: "30px",
                  //   textTransform: "capitalize",

                  //   color: "#00a1ff",
                  mb: 1,
                  mt: 2,
                }}
              >
                We have worked with Shab for over decade utilising his
                expertise and knowledge in software programming, Solution
                Architecture and Data Security. I am looking forward to using
                his new AI solution called Twelve Springs into our existing
                platform.
              </Typography>
            </Box>{" "}
            <Box sx={{ height: { sm: 80, xs: 20 } }}></Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              justifyContent={"center"}
            >
              <img src={testimonial2} alt='testamonial 2' style={{ scale: "0.95" }}></img>
              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: { xs: 15, sm: 18 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  //   color: "#00a1ff",
                  //   mb: 1,
                }}
              >
                EQUI360
              </Typography>
            </Box>
          </Grid>{" "}
          <Grid
            item
            xs={12}
            // sm={5.8}
            xl={3.8}
            sx={{
              // minHeight: "412px",
              ml: { xs: 0, xl: 3 },
              mt: { xl: 0, xs: 3 },
              backgroundColor: "white",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              px: { sm: 6, xs: 2 },
              py: { sm: 6, xs: 2 },
              display: "flex",
              flexDirection: "column",
              //   alignContent: "space-between",
              justifyContent: "space-between",

              //   gap: 8,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: 15, sm: 20 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  //   color: "#00a1ff",
                  mb: 1,
                }}
              >
                Great experience overall
              </Typography>
              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: { xs: 10, sm: 20,md:15 },
                  fontFamily: "poppins",
                  //   lineHeight: "30px",
                  //   textTransform: "capitalize",

                  //   color: "#00a1ff",
                  mb: 1,
                  mt: 2,
                }}
              >
                Decent person, very professional service, have knowledgeable
                developers ++ flexibility and tolerance.
              </Typography>
            </Box>{" "}
            <Box sx={{ height: { sm: 80, xs: 20 } }}></Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              justifyContent={"center"}
            >
              <img src={testimonial3} alt='testamonial 3' style={{ scale: "0.95" }}></img>
              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: { xs: 15, sm: 18 },
                  fontFamily: "poppins",
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  //   color: "#00a1ff",
                  //   mb: 1,
                }}
              >
                Satra
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            mt: { md: 5, xs: 3 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Grid item md={6} justifyContent={"flex-end"} display={"flex"}>
            {" "}
            <Button
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                ml: 2,
                borderRadius: 0,
                boxShadow: 0,
                // px: 3.5,
                py: 2,
                // display: { xs: "flex", md: "none" },
                //   height: "56px",
                //   width: "197px",
                fontWeight: "400",
                fontSize: 16,
                fontFamily: "poppins",
                lineHeight: "24px",
                border: "1px solid #00a1ff",
                textTransform: "capitalize",
                backgroundColor: "white",
              }}
            >
              {" "}
              <img
                src={buttonImg2}
                style={{ transform: "rotate(180deg)", marginLeft: 5 }}
              ></img>
            </Button>
          </Grid>
          <Grid item md={6} justifyContent={"start"} display={"flex"}>
            {" "}
            <Button
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                ml: 2,
                borderRadius: 0,
                boxShadow: 0,
                // px: 3.5,
                py: 2,
                // display: { xs: "flex", md: "none" },
                //   height: "56px",
                //   width: "197px",
                fontWeight: "400",
                fontSize: 16,
                fontFamily: "poppins",
                lineHeight: "24px",
                border: "1px solid #00a1ff",
                textTransform: "capitalize",
                backgroundColor: "white",
                // ":hover": { opacity: "0.8", backgroundColor: "white" },
              }}
            >
              {" "}
              <img src={buttonImg2} style={{ marginLeft: 5 }}></img>
            </Button>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;