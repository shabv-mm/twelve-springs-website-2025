import React from "react";
import { Container, Box, Button, Typography, Grid } from "@mui/material";
// import Image from 'next/image';
// import imageSrc from '/mnt/data/image.png'; // Update this path as necessary
import Techimg from "../../assets/Techimg.svg";
import path964 from "../../assets/path964.svg";
import techNew from "../../assets/techNew.svg";

// const technologies = {
//   "Programming Languages": ["Java", "Python", "R Language", "C++", ".NET (C#)", "JavaScript"],
//   Framework: ["Spring Framework", "ReactJS", "AngularJS", "NodeJS"],
//   "NoSQL Database": ["MongoDB", "Apache Cassandra", "Microsoft Cosmo DB"],
//   RDBMS: ["Oracle", "PostgreSQL", "MySQL", "MariaDB", "MS SQL Server"],
//   "Mobile Application": [
//     "Flutter",
//     "IOS Native",
//     "Android Native",
//     "React Native",
//   ],
//   APIs: ["REST APIs", "SOAP APIs", "APIs Framework"],
//   Infrastructure: [
//     "Kubernetes",
//     "Apache Kafka",
//     "Docker",
//     "Google Cloud",
//     "Amazon Cloud",
//     "Microsoft Azure Cloud",
//   ],
// };

const technologies = {
  "Programming Languages": ["Java", "Python", "R Language", "Dart", "C++", ".NET (C#)", "JavaScript", "Ruby", "PHP", "Go", "Swift"],
  Framework: ["Spring Framework", "ReactJS", "AngularJS", "NodeJS", "Django", "Flask", "Ruby on Rails", "Laravel", "VueJS"],
  "NoSQL Database": ["MongoDB", "Apache Cassandra", "Microsoft Cosmo DB", "CouchDB", "Redis", "DynamoDB"],
  RDBMS: ["Oracle", "PostgreSQL", "MySQL", "MariaDB", "MS SQL Server", "SQLite"],
  "Mobile Application": [
    "Flutter",
    "IOS Native",
    "Android Native",
    "React Native",
    "Xamarin",
    "Ionic",
  ],
  APIs: ["REST APIs", "SOAP APIs", "GraphQL APIs", "gRPC"],
  Infrastructure: [
    "Microsoft Azure Cloud",
    "Amazon Cloud",
    "Google Cloud",
    "Kubernetes",
    "Apache Kafka",
    "Docker",
    "Terraform",
    "Ansible",
    "Jenkins",
  ],
};

const TechnologyPage = () => {
  const [selected, setSelected] = React.useState("Programming Languages");
  // const technologies(selected) = [{
  //   "APIs" : api,
  //   "RDBMS" : rdbms,
  // }
  // ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: 4,
        background: "#1F1F1F",
        py: 12,
        px:{xs:2,sm:0}
      }}
    >
      <Box
        component="img"
        src={techNew}
        // src={ExpertiseImg}
        // src="path_to_your_image" // Replace with the path to your image
        alt="Top left image"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          // width: '300px', // Adjust the width as necessary
          height: "auto",
          width: {
            xs: "0px",
            md: "200px",
          },
        }}
      />
      <Box
        component="img"
        src={path964}
        // src={ExpertiseImg}
        // src="path_to_your_image" // Replace with the path to your image
        alt="Top left image"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          // width: '300px', // Adjust the width as necessary
          height: "auto",
          width: {
            xs: "0px",
            xl: "300px",
          },
        }}
      />
      <Typography
        sx={{ color: "#00A1FF", fontWeight: "500", fontFamily: "poppins" }}
        align="center"
        gutterBottom
      >
        TECHNOLOGIES
      </Typography>
      <Typography
        // fontSize={"2rem"}
        fontWeight={200}
        align="center"
        gutterBottom
        sx={{
          fontWeight: "200",
          fontFamily: "poppins",
          color: "#ffff",
          lineHeight: "67.2px",
          fontSize: "40px",
        }}
      >
        Advanced{" "}
        <Typography
          fontWeight={500}
          component="span"

          sx={{
            display: "inline-block",
            fontFamily: "poppins",
            color: "#FFFFFF",
            lineHeight: "70px",
            fontSize: "40px",
          }}
        >
          Technology
        </Typography>{" "}
        Stack
      </Typography>
      <Typography
        align="center"
        paragraph
        width={"100%"}
        sx={{
          fontWeight: "200",
          fontFamily: "poppins",
          color: "#ffff",
        }}
      >
       We support a wide variety of technology stacks, 
      
      </Typography>
      <Typography
        align="center"
        paragraph
        width={"100%"}
        sx={{
          mt: -2,
          fontWeight: "200",
          fontFamily: "poppins",
          color: "#ffff",
        }}
      >
       ensuring seamless integration and optimal performance across all your projects.
      </Typography>

      <Container
        sx={
          {
            // width: { sm: "100%", md: "70%" },
            // margin: { sm: "auto", xs: "none" },
          }
        }
      >
        {/* <Container > */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4, mb: 5 }}
        >
          {/* {[
            "Programming Languages",
            "Framework",
            "NoSQL Database",
            "RDBMS",
            "Mobile Application",
            "APIs",
            "Infrastructure",
          ].map((category) */}
          {Object.keys(technologies)?.map((category,index) => (
            <Grid item key={index}>
              <Button
                variant={selected === category ? "contained" : "outlined"}
                onClick={() => setSelected(category)}
                sx={{
                  borderRadius: 0,
                  backgroundColor:
                    selected === category ? "#09E4B1" : "inherit",
                  color: selected === category ? "primary" : "white",
                  borderColor: selected === category ? " #424242" : " #424242",
                  fontWeight: selected === category ? " 300" : " 200",
                  textTransform: "capitalize",
                  fontFamily: "poppins",
                  py: 1.5,
                  px: 3,
                }}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          {/* {Object.keys(technologies) */}
          {technologies[selected]?.map((tech,index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#232323",
                  textAlign: "center",
                  borderBottom: "1px solid #09E4B1",
                  p: 5,
                  fontFamily: "poppins",
                  fontWeight: "300",
                  color: "#ffff",
                  fontSize: "1.2rem",
                  height:"130px"
                }}
              >
                {tech}
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* </Container> */}
      </Container>
    </Box>
  );
};

export default TechnologyPage;
