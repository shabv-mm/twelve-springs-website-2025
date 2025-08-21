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
import process2 from "../../assets/proc1.png";
import aboutus1 from "../../assets/aboutus1.svg";
import decor1 from "../../assets/decor1.svg";
import decor2 from "../../assets/decor2.svg";

const OurProcess = () => {
  return (
    <div
      style={{
        // backgroundColor: "#f9fefd",
        // marginTop: "20px",
        textAlign: "center",
        // marginBottom: 20,
        paddingBottom: 30,
        paddingTop: 30,
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: { xs: 15, sm: 20 },
          fontFamily: "poppins",
          lineHeight: "30px",
          textTransform: "uppercase",
          color: "#00a1ff",
          mb: 1,
          // mt: { md: 10, xs: 3 },
        }}
      >
        our process
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
          Our{" "}
        </span>
        Process
      </Typography>

      <Container
      // sx={{
      //   width: { sm: "100%", md: "70%" },
      //   margin: { sm: "auto", xs: "none" },
      // }}
      >
        {" "}
        <Typography
          sx={{
            mb: { sm: 2, xs: 1 },
            fontWeight: "300",
            fontSize: { xs: 15, sm: 20 },
            fontFamily: "poppins",
            textAlign: "center"
            //   lineHeight: "30px",
            //   mx: { md: 48, xs: 3 },
          }}
        >
          At our company, we employ Agile methodology to streamline our software development processes. By breaking projects into manageable sprints, we ensure continuous delivery of functional components. This iterative approach allows us to quickly adapt to changing requirements and incorporate client feedback effectively. Our cross-functional teams collaborate closely, fostering innovation and maintaining a high standard of quality. Through Agile, we deliver robust software solutions on time and within budget, ensuring maximum customer satisfaction.
        </Typography>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            // mx: { md: 48, xs: 1 },
            mt: { md: 10, xs: 5 },
          }}
        >
          <img
            src={process2}
            alt='process'
            style={{
              width: "100%",

              objectFit: "contain",
              //   height: 500,
            }}
          ></img>
        </Box>
      </Container>
    </div>
  );
};

export default OurProcess;
