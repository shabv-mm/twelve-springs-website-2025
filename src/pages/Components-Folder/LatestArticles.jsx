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
import decor4 from "../../assets/decor4.svg";
import buttonImg2 from "../../assets/buttonblue.svg";
import buttonImg3 from "../../assets/buttonblack.svg";

const LatestArticles = () => {
  return (
    <div
      style={{
        // backgroundColor: "#f9fefd",
        // marginTop: "20px",
        textAlign: "center",
        position: "relative",
        marginBottom: 20,
        paddingBottom: 20,
      }}
    >
      <Box
        component="img"
        src={decor4}
        // src={ExpertiseImg}
        // src="path_to_your_image" // Replace with the path to your image
        alt="Top left image"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          // width: '300px', // Adjust the width as necessary
          height: "auto",
          width: { xs: "0px", md: "300px", xs: "0px" },
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
        blogs
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: { md: 48, xs: 30 },
          fontFamily: "poppins",
          //   lineHeight: "67.2px",
          mb: 1,
        }}
      >
        <span
          style={{
            fontWeight: "100",
            // fontSize: { md: 48, xs: 30 },
            fontFamily: "poppins",
            // lineHeight: "67.2px",
          }}
        >
          Latest{" "}
        </span>
        Articles
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
            //   mx: { md: 48, xs: 3 },
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>

        <Grid container>
          <Grid
            item
            xs={12}
            xl={5.8}
            sx={{
              backgroundColor: "#202020",
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              px: 2,
              py: 2,
              //   gap: 2,
            }}
          >
            <img
              src={blog1}
              alt='blog 1'
              style={{
                width: "100%",
                objectFit: "contain",
                //   height: 500,
              }}
            ></img>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: 15, sm: 20 },
                fontFamily: "poppins",
                lineHeight: "30px",
                textTransform: "capitalize",
                textAlign: "left",
                mt: 1,
                //   color: "#00a1ff",
              }}
            >
              Polyglot
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontWeight: "200",
                fontSize: { xs: 15, sm: 15 },
                fontFamily: "poppins",
                //   lineHeight: "30px",
                textTransform: "capitalize",
                textAlign: "left",
                //   color: "#00a1ff",
              }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Typography>
            <Box sx={{ textAlign: "start" }}>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  //   mb: 2,

                  borderRadius: 0,
                  px: 3.5,
                  py: 1.5,
                  fontWeight: "400",
                  fontSize: 16,
                  fontFamily: "poppins",
                  lineHeight: "24px",
                  textTransform: "capitalize",
                  color: "#00A1FF",
                  borderColor: "#00A1FF",
                  //   backgroundColor: "white",
                }}
                endIcon={<img src={buttonImg2} alt='read more' style={{ marginLeft: 5 }}></img>}
              >
                Read More
              </Button>
            </Box>
          </Grid>{" "}
          <Grid
            item
            xs={12}
            xl={5.8}
            sx={{
              //   color: "white",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              //   px: 2,
              //   py: 2,
              gap: 3,
              ml: { xs: 0, xl: 3 },
              mt: { xs: 3, xl: 0 },
            }}
          >
            <Grid
              item
              xs={12}
              sx={{ border: "1px solid #202020", px: 2, py: 2 }}
              justifyContent={"flex-start"}
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}

              //   alignItems={"center"}
            >
              <Grid item display={"flex"} xs={12} sm={3} md={4}>
                {" "}
                <img
                  src={blog2}
                  alt='blog 2'
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    // height: "100%",
                  }}
                ></img>
              </Grid>{" "}
              <Grid
                item
                xs={12}
                sm={9}
                justifyContent={"space-between"}
                display={"flex"}
                flexDirection={"column"}
                sx={{ ml: { md: 2, xs: 0, sm: 2 } }}
                // alignItems={"center"}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: 15, sm: 20 },
                    mt: { xs: 1, sm: 0 },
                    fontFamily: "poppins",
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    textAlign: "left",
                  }}
                >
                  Duck Surveys
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "200",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",

                    //   lineHeight: "30px",
                    // textTransform: "capitalize",
                    textAlign: "left",

                    //   color: "#00a1ff",
                  }}
                >
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Typography>
                <Box sx={{ textAlign: "start" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: { sm: 0, xs: 2 },
                      //   mb: 2,

                      borderRadius: 0,
                      px: 3.5,
                      py: 1.5,
                      fontWeight: "400",
                      fontSize: 16,
                      fontFamily: "poppins",
                      lineHeight: "24px",
                      textTransform: "capitalize",
                      color: "#000000",
                      borderColor: "#000000",
                      //   backgroundColor: "white",
                    }}
                    endIcon={
                      <img src={buttonImg3} alt="read more" style={{ marginLeft: 5 }}></img>
                    }
                  >
                    Read More
                  </Button>
                </Box>
              </Grid>
            </Grid>{" "}
            <Grid
              item
              xs={12}
              sx={{ border: "1px solid #202020", px: 2, py: 2 }}
              justifyContent={"flex-start"}
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}

              //   alignItems={"center"}
            >
              <Grid item display={"flex"} xs={12} sm={3} md={4}>
                {" "}
                <img
                  src={blog3}
                  alt='blog 3'
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    // height: "100%",
                  }}
                ></img>
              </Grid>{" "}
              <Grid
                item
                xs={12}
                sm={9}
                justifyContent={"space-between"}
                display={"flex"}
                flexDirection={"column"}
                sx={{ ml: { md: 2, xs: 0, sm: 2 } }}
                // alignItems={"center"}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: 15, sm: 20 },
                    mt: { xs: 1, sm: 0 },
                    fontFamily: "poppins",
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    textAlign: "left",
                  }}
                >
                  ANA AI
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "200",
                    fontSize: { xs: 15, sm: 15 },
                    fontFamily: "poppins",

                    //   lineHeight: "30px",
                    // textTransform: "capitalize",
                    textAlign: "left",

                    //   color: "#00a1ff",
                  }}
                >
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Typography>
                <Box sx={{ textAlign: "start" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: { sm: 0, xs: 2 },
                      //   mb: 2,

                      borderRadius: 0,
                      px: 3.5,
                      py: 1.5,
                      fontWeight: "400",
                      fontSize: 16,
                      fontFamily: "poppins",
                      lineHeight: "24px",
                      textTransform: "capitalize",
                      color: "#000000",
                      borderColor: "#000000",
                      //   backgroundColor: "white",
                    }}
                    endIcon={
                      <img src={buttonImg3} alt='read more' style={{ marginLeft: 5 }}></img>
                    }
                  >
                    Read More
                  </Button>
                </Box>
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LatestArticles;
