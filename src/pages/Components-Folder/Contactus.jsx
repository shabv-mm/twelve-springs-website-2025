import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Chip,
  Avatar,
  Paper,
  useTheme,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Launch,
  CalendarMonth,
  Security,
  Speed,
  TrendingUp,
  FiberManualRecord as BulletIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Unified Platform for Recycling & Liquidation Operations",
    industry: "Recycling & Liquidation",
    duration: "8 months",
    description: "A U.S.-based recycling and liquidation company needed a centralized system to streamline its global operations involving shipments, vendors, and customers.",
    challenge: ["The business relied on multiple databases and manual processes, creating inefficiencies, data silos, and limited visibility across logistics and customer engagement."],
    solution: ["We delivered a web and mobile platform built with Spring Boot, PostgreSQL, and Flutter, integrating shipment lifecycle management, vendor and customer hubs, CRM, and a custom calendar system. With Google Maps integration and secure multi-user access, the company now operates on a centralised, scalable, and efficient platform."],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Flutter"],
    headerGradient: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)",
    testimonial: {
      text: "The platform transformed our global operations, providing unprecedented visibility and control over our recycling processes.",
      author: "Michael Rodriguez",
      position: "COO, Global Recycling Solutions",
      avatar: "MR",
    },
  },
  {
    id: 2,
    title: "AI-Powered Fintech Platform for Accounting Process Management",
    industry: "Fintech & Accounting",
    duration: "9 months",
    description: "We partnered with a leading accounting firm to build a robust fintech platform that centralizes client management, task tracking, and financial data analysis. The platform enables accountants and their clients to collaborate seamlessly through secure logins, discussion channels, document sharing, and advanced reporting features.",
    challenge: [
      "Inability to adapt processes to their specific operational needs.",
      "Lack of AI-driven automation and insights for financial data.",
      "Restricted integration with banking and accounting systems.",
      "Limited scalability to support long-term digital transformation.",
    ],
    solution: [
      "Provides secure multi-user access with dedicated client and employee logins.",
      "Supports discussion channels, document requests, and collaboration tools between accountants and clients.",
      "Enables lifecycle management of both team and client tasks with reporting dashboards.",
      "Integrates with QuickBooks and third-party systems to automatically pull bank transactions.",
      "Leverages AI models to analyse financial data, detect patterns, and generate actionable insights.",
      "This solution replaced the rigid third-party product with a flexible, AI-powered ecosystem, enabling the firm to streamline operations, strengthen client relationships, and transform financial management at scale",
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "Python", "Microsoft Azure"],
    headerGradient: "linear-gradient(135deg, #e3f2fd 0%,rgb(103, 203, 221) 50%,rgb(61, 209, 235) 100%)",
    testimonial: {
      text: "The new platform is a game-changer. It has not only streamlined our workflows but also given us a competitive edge with its AI capabilities.",
      author: "Jane Doe",
      position: "CFO, Accounting Solutions Inc.",
      avatar: "JD",
    },
  },
  {
    id: 3,
    title: "Unified Platform for Recycling & Liquidation Operations",
    industry: "Supply Chain",
    duration: "6 months",
    description: "A supply chain company needed a centralized system to streamline its global operations involving shipments, vendors, and customers.",
    challenge: ["The business relied on multiple databases and manual processes, creating inefficiencies, data silos, and limited visibility across logistics and customer engagement."],
    solution: ["We delivered a web and mobile platform built with Spring Boot, PostgreSQL, and Flutter, integrating shipment lifecycle management, vendor and customer hubs, CRM, and a custom calendar system. With Google Maps integration and secure multi-user access, the company now operates on a centralised, scalable, and efficient platform."],
    technologies: ["Python", "Django", "Redis", "Docker"],
    headerGradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 50%, #ffcc80 100%)",
    testimonial: {
      text: "The platform transformed our global operations, providing unprecedented visibility and control over our recycling processes.",
      author: "David Chen",
      position: "VP Operations, Orange Logistics",
      avatar: "DC",
    },
  },
  {
    id: 4,
    title: "Unified Platform for Recycling & Liquidation Operations",
    industry: "Software Development",
    duration: "12 months",
    description: "A software development company needed a centralized system to streamline its global operations involving shipments, vendors, and customers.",
    challenge: ["The business relied on multiple databases and manual processes, creating inefficiencies, data silos, and limited visibility across logistics and customer engagement."],
    solution: ["We delivered a web and mobile platform built with Spring Boot, PostgreSQL, and Flutter, integrating shipment lifecycle management, vendor and customer hubs, CRM, and a custom calendar system. With Google Maps integration and secure multi-user access, the company now operates on a centralised, scalable, and efficient platform."],
    technologies: ["Vue.js", "Laravel", "MySQL", "Kubernetes"],
    headerGradient: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%)",
    testimonial: {
      text: "The platform transformed our global operations, providing unprecedented visibility and control over our recycling processes.",
      author: "Emma Wilson",
      position: "CEO, TechFlow Solutions",
      avatar: "EW",
    },
  },
];

export default function CaseStudyCarousel() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // // Auto-slide functionality
  // React.useEffect(() => {
  //   if (isHovered) return; // Pause when hovered

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  //   }, 3000); // Auto-slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, [isHovered]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handleScheduleCall = () => {
    navigate("/landing");
  };

  const currentCase = caseStudies[currentIndex];

  // Helper function to render content as a list or paragraph
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <List dense sx={{ py: 0 }}>
          {content.map((item, i) => (
            <ListItem key={i} disablePadding>
              <ListItemIcon sx={{ minWidth: 24 }}>
                <BulletIcon sx={{ fontSize: 8, color: "text.secondary" }} />
              </ListItemIcon>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  variant: "body2",
                  color: "#374151",
                  lineHeight: 1.6,
                  fontSize: "0.875rem",
                }}
              />
            </ListItem>
          ))}
        </List>
      );
    }
    return (
      <Typography variant="body2" sx={{ color: "#374151", lineHeight: 1.6, fontSize: "0.875rem" }}>
        {content}
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box textAlign="center" mb={4}>
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
        case studies
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
          Success{" "}
        </span>
        Stories
      </Typography>
  
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
                      Discover how we transform businesses with innovative solutions
        </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: "relative" }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "white",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              border: "1px solid #e2e8f0",
              width: 48,
              height: 48,
              "&:hover": {
                bgcolor: "#f8fafc",
                boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <ArrowBackIos sx={{ color: "#475569", fontSize: 20, ml: 0.5 }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "white",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              border: "1px solid #e2e8f0",
              width: 48,
              height: 48,
              "&:hover": {
                bgcolor: "#f8fafc",
                boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <ArrowForwardIos sx={{ color: "#475569", fontSize: 20 }} />
          </IconButton>

          {/* Main Card */}
          <Card
            sx={{
              maxWidth: { xs: '75%', sm: '65%', md: '70%', lg: '900px',xl:'1150px' },
              // width: '100%',
              mx: "auto",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
              bgcolor: "white",
              border: "1px solid #e2e8f0",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: "translateY(0) rotateX(0deg)",
              "&:hover": {
                transform: "translateY(-12px) rotateX(2deg)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Header Section with Dynamic Colors */}
            <Box
              sx={{
                background: currentCase.headerGradient,
                p: 2,
                color: "#2d3748",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(1px)",
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "start", gap: 2, mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: "rgba(45, 55, 72, 0.15)",
                      color: "#2d3748",
                      width: 45,
                      height: 45,
                      border: "2px solid rgba(45, 55, 72, 0.1)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <TrendingUp sx={{ fontSize: 26 }} />
                  </Avatar>
                  <Box>
                    <Chip
                      label={currentCase.industry}
                      size="small"
                      sx={{
                        bgcolor: "rgba(45, 55, 72, 0.1)",
                        color: "#2d3748",
                        fontWeight: 600,
                        mb: 0.5,
                        fontSize: "0.75rem",
                        border: "1px solid rgba(45, 55, 72, 0.15)",
                      }}
                    />
                    <Typography variant="body2" sx={{ color: "#4a5568", fontSize: "0.85rem", fontWeight: 500 }}>
                       Duration : {currentCase.duration}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: 1.5,
                    color: "#2d3748",
                  }}
                >
                  {currentCase.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4a5568",
                    lineHeight: 1.5,
                    fontSize: "0.95rem",
                  }}
                >
                  {currentCase.description}
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ p: 3 }}>
              {/* Challenge & Solution */}
              <Box sx={{ mb: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    mb: 2,
                    bgcolor: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Security sx={{ fontSize: 18, color: "#dc2626" }} />
                    <Typography variant="subtitle2" sx={{ color: "#dc2626", fontWeight: 600 }}>
                      Challenge
                    </Typography>
                  </Box>
                  {/* Using the new renderContent function here */}
                  {renderContent(currentCase.challenge)}
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    bgcolor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Speed sx={{ fontSize: 18, color: "#16a34a" }} />
                    <Typography variant="subtitle2" sx={{ color: "#16a34a", fontWeight: 600 }}>
                      Solution
                    </Typography>
                  </Box>
                  {/* Using the new renderContent function here */}
                  {renderContent(currentCase.solution)}
                </Paper>
              </Box>

              {/* Technologies */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ color: "#1e293b", fontWeight: 600, mb: 1.5 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {currentCase.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "#f1f5f9",
                        color: "#475569",
                        border: "1px solid #e2e8f0",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        "&:hover": {
                          bgcolor: "#e2e8f0",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Testimonial */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  bgcolor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    mb: 2,
                    color: "#374151",
                    lineHeight: 1.6,
                    fontSize: "0.875rem",
                  }}
                >
                  "{currentCase.testimonial.text}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: "#64748b",
                      color: "white",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {currentCase.testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1e293b", fontSize: "0.8rem" }}>
                      {currentCase.testimonial.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#64748b", fontSize: "0.7rem" }}>
                      {currentCase.testimonial.position}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

        
            
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<Launch />}
                  onClick={handleScheduleCall}
                  sx={{
                    backgroundImage: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                    color: "white",
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    boxShadow: "0 4px 12px rgba(54, 231, 231, 0.3)",
                    "&:hover": {
                      bgcolor: "#475569",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 24px rgba(100, 116, 139, 0.4)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Schedule Free Call
                </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Pagination Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 4 }}>
          {caseStudies.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: currentIndex === index ? 32 : 10,
                height: 10,
                borderRadius: 5,
                bgcolor: currentIndex === index ? "#64748b" : "#cbd5e1",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: currentIndex === index ? "0 4px 12px rgba(100, 116, 139, 0.3)" : "none",
                "&:hover": {
                  bgcolor: "#64748b",
                  transform: "scale(1.2)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}