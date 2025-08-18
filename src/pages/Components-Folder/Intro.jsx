import React, { useEffect, useState } from "react";
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
import page1 from "../../assets/page1_3.svg";
import decor1 from "../../assets/decor1.svg";
import decor2 from "../../assets/decor2.svg";
import { Link } from "react-scroll";
import "./intro.css";

const textOptions = [
  "MACHINE LEARNING",
  "INTELLIGENT",
  "DATA SECURITY",
  "MOBILE",
];
const textOptions2 = [
  "& AI",
  "DATA SCIENCE",
  "CONFIDENTIALITY, INTEGRITY, AVAILABILITY",
  "& WEB APPS",
];

const AnimatedText = () => {
  useEffect(() => {
    consoleText(
      [
        "Machine Learning & AI",
        "Intelligent Data Science",
        "Mobile & Web Apps",
      ],
      "text",
      // ["#1e539e", "#63afac", "#a2d9ed"]
      ["black"]
    );
  }, []);

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";
        visible = true;
      }
    }, 1500);
  }

  return (
    <div className="console-container">
      <span id="text"></span>
      <div className="console-underscore" id="console">
        _
      </div>
    </div>
  );
};

const Intro = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentTextIndex2, setCurrentTextIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
      setCurrentTextIndex2(
        (prevIndex) => (prevIndex + 1) % textOptions2.length
      );
    }, 7000); // Match the duration of the animation

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        // minHeight: "90vh",
        alignItems: "center",
        overflowX: "hidden",
        // justifyContent: "center",
        backgroundColor: "transparent",
        // mb: 4,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            // alignContent: "center",
            flexDirection: "column",
            // gap: 2,
            //   backgroundColor: "pink",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: { md: 20, xs: 15 },
              fontFamily: "poppins",
              // lineHeight: "36px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#000000",
              mt: { xs: 5, md: 8 },
              // lineHeight: "67.2px",
            }}
          >
            Building Secure, Reliable, and Scalable Data Solutions
          </Typography>
          <Box
            sx={{
              mt: 10,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {" "}
            <AnimatedText />
            <Typography
              sx={{
                fontWeight: "300",
                fontSize: { md: 20, xs: 15 },
                // mx: { md: 10, xs: 0 },
                fontFamily: "poppins",
                textAlign: "center",
                // width: "1000px",
                mt: 3,
              }}
            >
              Fostering trust with a solid foundation in data security and
              expertly crafted software architecture, <br />
              driving continuous innovation and propelling business growth.
            </Typography>{" "}
          </Box>
          <Link to="contactus" smooth={true} duration={1000}>
            <Button
              variant="contained"
              sx={{
                mt: { xs: 3, sm: 5 },
                mb: { md: 10, xs: 3 },
                borderRadius: 0,
                px: 3.5,
                py: 2.8,
                // mb: 3,
                //   height: "56px",
                //   width: "197px",
                fontWeight: "400",
                fontSize: 16,
                fontFamily: "poppins",
                lineHeight: "24px",
                textTransform: "capitalize",
                backgroundColor: "black",
                ":hover": {
                  backgroundColor: "",
                  color: "white",
                },
              }}
              endIcon={<img src={buttonImg} alt='get in touch' style={{ marginLeft: 5 }}></img>}
            >
              Discuss your Project
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Intro;
