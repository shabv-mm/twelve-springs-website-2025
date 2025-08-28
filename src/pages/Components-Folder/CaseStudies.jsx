import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
  Stack,
  Divider,
  Button,
  useTheme
} from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Launch,
  CheckCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Unified Platform for Recycling & Liquidation Operations",
    industry: "Recycling & Liquidation",
    duration: "8 months",
    description:
      "A global recycling and resale organization needed a modern way to manage customers, vendors, shipments, and surplus goods. To streamline operations, a supply chain platform was developed with both web and mobile interfaces. The system integrates logistics, invoicing, and project workflows, creating a single source of truth that simplifies recycling and resale while supporting sustainability goals.",
    challenge: [
      "The organization faced significant inefficiencies in handling two distinct supply streams: used clothing collected through recycling networks, and surplus merchandise sourced from department store overstocks and returns. Operating these processes on separate systems led to delays, limited visibility into shipments, and inconsistent order management. Additionally, the lack of mobile and web access made it difficult for office teams and field staff to coordinate effectively across regions.",
    ],
    solution: [
      "A unified digital platform was introduced to streamline every aspect of recycling and resale operations. At its core, the solution includes a supply chain management system to oversee loads, shipments, and invoices, ensuring full visibility from booking to delivery. A built-in project management module supports agile workflows, helping teams collaborate efficiently, while the CRM component manages leads, customer interactions, and vendor relationships in one place. To keep operations running smoothly, a robust notification system provides real-time alerts and updates, enabling proactive decision-making across both web and mobile interfaces. This comprehensive platform created a connected ecosystem that unifies logistics, internal processes, and customer management.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Flutter"],
    headerGradient:
      "linear-gradient(90deg, rgba(0,171,169,.25), rgba(0,137,181,.25))",
    testimonial: {
      text: "The platform transformed our global operations, providing unprecedented visibility and control over our recycling processes.",
      author: "CEO",
      position: "Founder",
      avatar: "SG",
    },
  },
  {
    id: 2,
    title: "AI-Powered Fintech Platform for Accounting Process Management",
    industry: "Fintech & Accounting",
    duration: "9 months",
    description:
      "We partnered with a leading accounting firm to build a robust fintech platform that centralizes client management, task tracking, and financial data analysis.",
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
      "Replaced a rigid third-party product with a flexible, AI-powered ecosystem.",
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "Python", "Microsoft Azure"],
    headerGradient:
      "linear-gradient(90deg, rgba(0,153,255,.25), rgba(0,205,255,.25))",
    testimonial: {
      text: "The new platform is a game-changer. It has streamlined our workflows and given us an AI advantage.",
      author: "Managing Director",
      position: "Founder",
      avatar: "DA",
    },
  },
];

function BulletList({ items }) {
  if (!Array.isArray(items)) return null;
  return (
    <Stack component="ul" spacing={0.75} sx={{ pl: 2, m: 0 }}>
      {items.map((t, i) => (
        <Box
          key={i}
          component="li"
          sx={{ listStyle: "none", display: "flex", gap: 1.25, alignItems: "start" }}
        >
          <CheckCircle sx={{ fontSize: 16, mt: "2px" }} />
          <Typography variant="body2" sx={{ lineHeight: 1.6, fontFamily: "poppins" }}>
            {t}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default function CaseStudies() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const total = caseStudies.length;
  const current = caseStudies[index];
  const cardRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prev = () => setIndex((p) => (p - 1 + total) % total);
  const next = () => setIndex((p) => (p + 1) % total);

  const neutralBorder =
    theme.palette.mode === "light" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.12)";

  const accentColor = "rgb(4, 226, 226)";

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} alignItems="center" mb={{ xs: 3, md: 5 }}>
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
        Case Studies
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
            Discover how we transform businesses with focused, scalable solutions.
          </Typography>
        </Stack>

        <Box sx={{ position: "relative" }}>
          {/* Arrows moved much further away from the card */}
          <IconButton
            aria-label="Previous case study"
            onClick={prev}
            sx={{
              position: "absolute",
              left: { xs: -20, sm: -30, md: -60 }, // much farther away from the card
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backdropFilter: "blur(6px)",
              bgcolor: "action.hover",
              border: `1px solid ${neutralBorder}`,
              "&:hover": { bgcolor: "action.selected" },
              zIndex: 4,
              boxShadow: theme.shadows[2],
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>

          <IconButton
            aria-label="Next case study"
            onClick={next}
            sx={{
              position: "absolute",
              right: { xs: -20, sm: -30, md: -60 }, // much farther away from the card
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backdropFilter: "blur(6px)",
              bgcolor: "action.hover",
              border: `1px solid ${neutralBorder}`,
              "&:hover": { bgcolor: "action.selected" },
              zIndex: 4,
              boxShadow: theme.shadows[2],
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>

          <Card
            ref={cardRef}
            elevation={2}
            sx={{
              borderRadius: 3,
              border: `1px solid ${neutralBorder}`,
              overflow: "hidden",
              transition: "transform .35s ease, box-shadow .35s ease",
              bgcolor: "background.paper",
              boxShadow: theme.shadows[4],
              "&:hover": { boxShadow: theme.shadows[8], transform: "translateY(-6px)" },
            }}
          >
            <Box sx={{ height: 4, background: current.headerGradient }} />
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", md: "center" }}
                spacing={1.5}
                mb={2}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "poppins" }}>
                  {current.title}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip
                    label={current.industry}
                    size="small"
                    sx={{
                      backgroundColor: accentColor,
                      color: theme.palette.getContrastText(accentColor),
                      borderColor: accentColor,
                      fontWeight: 600,
                    }}
                  />
                  <Chip label={current.duration} size="small" variant="outlined" />
                </Stack>
              </Stack>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontFamily: "poppins" }}>
                {current.description}
              </Typography>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 3, md: 4 }}
                mb={3}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontFamily: "poppins" }}>
                    Challenge
                  </Typography>
                  <BulletList items={current.challenge} />
                </Box>
                <Divider flexItem orientation="vertical" sx={{ display: { xs: "none", md: "block" } }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontFamily: "poppins" }}>
                    Solution
                  </Typography>
                  <BulletList items={current.solution} />
                </Box>
              </Stack>

              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ fontFamily: "poppins" }}>Technologies</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {current.technologies.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: accentColor,
                        color: theme.palette.getContrastText(accentColor),
                        borderColor: accentColor,
                        fontWeight: 500,
                      }}
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </Stack>

              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: 2,
                  border: `1px dashed ${neutralBorder}`,
                  bgcolor: "background.paper",
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={{ width: 36, height: 36 }}>{current.testimonial.avatar}</Avatar>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="body2" sx={{ fontStyle: "italic", fontFamily: "poppins" }}>
                      "{current.testimonial.text}"
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "poppins" }}>
                      {current.testimonial.author} • {current.testimonial.position}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* Centered button with header styling */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/landing")}
                  endIcon={<Launch />}
                  sx={{ 
                    textTransform: "none", 
                    fontWeight: 500,
                    fontFamily: "poppins",
                    background: "black",
                    color: "white",
                    px: 3,
                    py: 1,
                    borderRadius: 0,
                    "&:hover": {
                      background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                      color: "#fff",
                    },
                  }}
                >
                  Talk to an Architect
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Navigation dots positioned below the card */}
          <Stack 
            direction="row" 
            spacing={1} 
            alignItems="center" 
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            {caseStudies.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                role="button"
                aria-label={`Go to slide ${i + 1}`}
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIndex(i)}
                sx={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  borderRadius: 999,
                  bgcolor: i === index ? "text.primary" : "divider",
                  cursor: "pointer",
                  transition: "all .25s ease",
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}