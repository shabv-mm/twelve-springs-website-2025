import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
  Avatar,
  Divider,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Launch,
  Business,
  Security,
  TrendingUp,
  Speed,
  People,
  Star,
  FormatQuote as QuoteLeft,
  CalendarMonth as CalendarMonthIcon, // Added for CTA clarity
} from "@mui/icons-material";

/* ---------- Dummy data (9 items) ---------- */
// Enhanced dummy data with more descriptive challenge/solution texts and varied avatars.
const caseStudies = Array.from({ length: 9 }).map((_, i) => {
  const templates = [
    {
      title: "E-commerce Platform Boost",
      client: "SwiftCart Solutions",
      industry: "Retail",
      duration: "8 months",
      image: "https://placehold.co/800x600/E0F7FA/00796B?text=E-commerce", // Placeholder image
      challenge: "Legacy infrastructure struggled with peak demand, leading to high cart abandonment rates.",
      solution: "Implemented a serverless microservices architecture with a CDN, dramatically improving load times and user experience.",
      results: { revenue: "+150%", uptime: "99.9%", users: "2M+" },
      technologies: ["React", "Node.js", "AWS"],
      bgColor: '#42a5f5', // Blue for Retail
    },
    {
      title: "AI-Driven Healthcare Insights",
      client: "HealthPulse Diagnostics",
      industry: "Healthcare",
      duration: "12 months",
      image: "https://placehold.co/800x600/E8F5E9/2E7D32?text=Healthcare",
      challenge: "Disparate patient data systems hampered comprehensive analysis and real-time decision-making.",
      solution: "Developed a unified AI-powered data lake and analytics platform, providing predictive insights for personalized care.",
      results: { efficiency: "+60%", accuracy: "98%", speed: "50% faster" },
      technologies: ["Python", "TensorFlow", "PostgreSQL"],
      bgColor: '#66bb6a', // Green for Healthcare
    },
    {
      title: "High-Frequency Trading Engine",
      client: "Apex Financial Group",
      industry: "Finance",
      duration: "6 months",
      image: "https://placehold.co/800x600/FFF3E0/E65100?text=Finance",
      challenge: "Required ultra-low latency execution and robust security for millions of daily transactions.",
      solution: "Engineered a custom, event-driven trading engine utilizing in-memory databases and advanced encryption protocols.",
      results: { latency: "0.2ms", volume: "10M/day", profit: "+200%" },
      technologies: ["Java", "Apache Kafka", "Redis"],
      bgColor: '#ff9800', // Orange for Finance
    },
  ];
  const t = templates[i % templates.length];
  return {
    id: i + 1,
    title: `${t.title} — Case ${i + 1}`,
    client: t.client,
    industry: t.industry,
    duration: t.duration,
    image: t.image,
    challenge: t.challenge,
    solution: t.solution,
    results: t.results,
    technologies: t.technologies,
    bgColor: t.bgColor, // Assign specific background color
    testimonial: {
      text: "Their team delivered exceptional results, transforming our operations and exceeding all expectations.",
      author: ["Sarah J.", "Dr. M. Chen", "Robert W."][i % 3],
      position: ["CTO, SwiftCart", "CMO, HealthPulse", "Head of Eng, Apex Financial"][i % 3],
      avatar: `https://placehold.co/48x48/${["81C784", "BBDEFB", "FFCCBC"][i % 3]}/000000?text=${encodeURIComponent(["SJ", "MC", "RW"][i % 3])}`,
    },
  };
});

/* ---------- Helper functions for icons ---------- */
const getIndustryIcon = (industry) => {
  if (industry === "Retail") return <Business sx={{ fontSize: 48 }} />;
  if (industry === "Healthcare") return <Security sx={{ fontSize: 48 }} />;
  return <TrendingUp sx={{ fontSize: 48 }} />; // Default for Finance or others
};

const getMetricIcon = (k) => {
  const key = k.toLowerCase();
  if (key.includes("revenue") || key.includes("profit") || key.includes("roi")) return <TrendingUp />;
  if (key.includes("latency") || key.includes("performance") || key.includes("speed")) return <Speed />;
  if (key.includes("users") || key.includes("volume")) return <People />;
  return <Star />; // Default icon
};

/* -------------------------
    CleanCompactCarousel Component
    ------------------------- */
export default function CaseStudies() {
  const theme = useTheme(); // Access the Material-UI theme
  // Media queries for responsive design: md (desktop), sm (tablet)
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  // Determine number of cards visible per slide based on screen size
  const slidesToShow = isMdUp ? 3 : isSmUp ? 2 : 1;
  const total = caseStudies.length; // Total number of case studies

  // Ref for carousel container to measure its width
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Styling constants for spacing and card height
  const gap = 16;
  const cardHeight = 360;

  // Carousel state: current slide index and auto-play pause state
  const maxIndex = Math.max(0, total - slidesToShow); // Maximum slide index
  const [index, setIndex] = useState(0); // Current active slide index
  const [paused, setPaused] = useState(false); // State to pause/resume autoplay
  const [selected, setSelected] = useState(0); // Index of the currently selected card for the detail panel

  // Effect to measure container width on mount and resize
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const measure = () => setContainerWidth(el.clientWidth);
    measure(); // Initial measurement
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(el);
    } else {
      window.addEventListener("resize", measure);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", measure);
    };
  }, []);

  // Calculate the width of each card dynamically
  const cardWidth = containerWidth ? (containerWidth - gap * (slidesToShow - 1)) / slidesToShow : 0;

  // Autoplay effect for the carousel
  useEffect(() => {
    if (paused) return; // Do not autoplay if paused
    const t = setInterval(() => {
      setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1)); // Advance to next slide, loop if at end
    }, 2000); // Auto-advances every 2 seconds as requested
    return () => clearInterval(t); // Clean up interval on component unmount or pause
  }, [paused, maxIndex]);

  // Adjust current slide index if slidesToShow changes (e.g., on window resize)
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [slidesToShow, maxIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Navigation functions for previous and next slides (memoized for performance)
  const prev = useCallback(() => setIndex((i) => (i - 1 < 0 ? maxIndex : i - 1)), [maxIndex]);
  const next = useCallback(() => setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1)), [maxIndex]);

  // Touch event handlers for swipe navigation on mobile
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true); // Pause autoplay on touch
  };
  const onTouchMove = (e) => {
    if (!touchStartX.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (touchDeltaX.current > 40) prev(); // Swipe right (positive delta) for prev
    else if (touchDeltaX.current < -40) next(); // Swipe left (negative delta) for next
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setPaused(false); // Resume autoplay after touch
  };

  // Keyboard event listener for arrow key navigation
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn); // Clean up event listener
  }, [prev, next]);

  // Calculate the horizontal translation for the carousel track
  const translateX = -(index * (cardWidth + gap));
  // Accent color for gradients, derived from your existing header
  const accent = "linear-gradient(120deg, #00cbcc, #00bbdf)";
  // Active dot color for carousel pagination
  const dotActive = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`;

  return (
    <Box
      sx={{
        py: 6,
        
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: accent, // Gradient text for the title
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent", // Fallback if Webkit properties aren't supported
            }}
          >
            Our Success Stories
          </Typography>
          <Typography sx={{ color: theme.palette.text.secondary, mt: 1, maxWidth: 760, mx: "auto" }}>
            Explore how we've empowered businesses across industries to achieve their strategic objectives with cutting-edge solutions.
          </Typography>
          <Divider sx={{ width: 72, mx: "auto", mt: 2, borderColor: alpha(theme.palette.primary.main, 0.9) }} />
        </Box>

        {/* Carousel Section */}
        <Box
          ref={containerRef}
          sx={{ position: "relative", mb: 3 }}
          onMouseEnter={() => setPaused(true)} // Pause autoplay on hover
          onMouseLeave={() => setPaused(false)} // Resume autoplay when mouse leaves
        >
          {/* Carousel Navigation Arrows */}
          <IconButton
            onClick={prev}
            aria-label="previous slide"
            sx={{
              position: "absolute",
              left: -8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              bgcolor: alpha(theme.palette.primary.dark, 0.7), // Darker, primary-themed background
              color: "#fff", // White arrow
              "&:hover": { bgcolor: theme.palette.primary.dark, boxShadow: theme.shadows[3] }, // Stronger primary on hover
            }}
            size="small"
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>

          <IconButton
            onClick={next}
            aria-label="next slide"
            sx={{
              position: "absolute",
              right: -8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              bgcolor: alpha(theme.palette.primary.dark, 0.7),
              color: "#fff",
              "&:hover": { bgcolor: theme.palette.primary.dark, boxShadow: theme.shadows[3] },
            }}
            size="small"
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>

          {/* Carousel Track Container */}
          <Box
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            sx={{
              overflow: "hidden", // Hides parts of cards outside the view
              borderRadius: 2,
              py: 1, // Vertical padding around cards
            }}
          >
            {/* Inner Carousel Track that moves horizontally */}
            <Box
              sx={{
                display: "flex",
                gap: `${gap}px`, // Gap between cards
                transition: "transform 520ms cubic-bezier(.2,.9,.25,1)", // Smooth transition for sliding
                transform: `translateX(${translateX}px)`, // Applies horizontal slide
                width: `${total * (cardWidth + gap)}px`, // Total width needed for all cards in a single row
                minHeight: cardHeight, // Ensures consistent height for all cards
              }}
            >
              {caseStudies.map((c, i) => {
                const isActive = i === selected; // Check if the card is currently selected
                return (
                  <Box key={c.id} sx={{ flex: `0 0 ${cardWidth}px`, maxWidth: `${cardWidth}px` }}>
                    <Card
                      onClick={() => setSelected(i)} // Selects the card on click
                      sx={{
                        height: cardHeight,
                        borderRadius: 3, // Slightly more rounded corners
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "transform 280ms ease, box-shadow 280ms ease",
                        // Lift and add stronger shadow if active
                        transform: isActive ? "translateY(-8px)" : "translateY(0)", // Increased lift
                        // boxShadow: isActive ? 16 : 8, // Stronger shadow for both active and inactive
                        // bgcolor: theme.palette.background.paper, // Card background
                        border: `2px solid ${isActive ? theme.palette.primary.main : alpha(theme.palette.grey[300], 0.6)}`, // More visible border
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          height: 120, // Height of the media area
                          // Dynamic gradient background using the card's specific color
                          background: `linear-gradient(180deg, ${alpha(c.bgColor, 0.7)}, ${c.bgColor}), url(${c.image})`,
                          backgroundSize: "cover", // Covers the area
                          backgroundPosition: "center", // Centers the background image
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 64, // Size of the icon circle
                            height: 64,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: accent, // Accent gradient for the icon circle
                            color: theme.palette.primary.contrastText, // Icon color
                            boxShadow: `0 8px 26px ${alpha(theme.palette.primary.main, 0.15)}`, // More pronounced shadow
                          }}
                        >
                          {getIndustryIcon(c.industry)}
                        </Box>
                      </CardMedia>

                      <CardContent sx={{ p: 2, flex: 1, color: theme.palette.text.primary }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 800, color: theme.palette.primary.main }}>
                          {c.industry}
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 900, mt: 0.5, lineHeight: 1.3 }} noWrap>
                          {c.title}
                        </Typography>
                        <Typography sx={{ fontSize: 13, color: theme.palette.text.secondary, mt: 0.5 }}>
                          {c.client} &bull; {c.duration}
                        </Typography>

                        <Typography sx={{ fontSize: 14, color: theme.palette.text.primary, mt: 1.25, minHeight: 44, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          **Challenge:** {c.challenge}
                        </Typography>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                          <Box sx={{ display: "flex", gap: 0.6 }}>
                            {c.technologies.slice(0, 2).map((t) => (
                              <Chip
                                key={t}
                                label={t}
                                size="small"
                                sx={{
                                  background: alpha(theme.palette.primary.main, 0.15), // Slightly darker primary background for chips
                                  color: theme.palette.primary.dark, // Dark primary text
                                  fontSize: 11,
                                  fontWeight: 700, // Bolder chips
                                }}
                              />
                            ))}
                          </Box>

                          <Button
                            size="small"
                            onClick={() => setSelected(i)}
                            sx={{ textTransform: "none", fontWeight: 800, color: theme.palette.primary.main }}
                          >
                            Details
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Carousel Pagination Dots */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1.25, mt: 2 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, d) => (
              <Box
                key={d}
                onClick={() => setIndex(d)}
                sx={{
                  width: index === d ? 26 : 8, // Wider for active dot
                  height: 8,
                  borderRadius: 4,
                  background: index === d ? dotActive : alpha(theme.palette.grey[500], 0.4), // Active/inactive dot colors, slightly more opaque inactive
                  cursor: "pointer",
                  transition: "all 260ms ease",
                }}
                aria-label={`go to slide ${d + 1}`}
              />
            ))}
          </Box>
        </Box>

        {/* Detailed Panel + Focused CTA Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 380px" }, // Responsive grid layout
            gap: 3,
            alignItems: "start", // Align items to the top
            mt: 2,
            color: theme.palette.text.primary, // Default text color for this section
          }}
        >
          {/* Selected Case Study Detail Panel */}
          <Paper
            elevation={4} // Slightly more pronounced shadow
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "flex-start",
              bgcolor: theme.palette.background.paper, // Light background
              border: `1px solid ${alpha(theme.palette.grey[300], 0.6)}`, // Slightly more visible border
            }}
          >
            <Avatar src={caseStudies[selected].testimonial.avatar} sx={{ width: 72, height: 72, border: `2px solid ${theme.palette.primary.main}` }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: theme.palette.primary.dark }}>{caseStudies[selected].title}</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
                **Client:** {caseStudies[selected].client} &bull; **Duration:** {caseStudies[selected].duration}
              </Typography>

              <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: 1.5, lineHeight: 1.7 }}>
                <Box component="span" sx={{ fontWeight: 700, color: theme.palette.error.main }}>Challenge:</Box> {caseStudies[selected].challenge}
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: 1, lineHeight: 1.7 }}>
                <Box component="span" sx={{ fontWeight: 700, color: theme.palette.success.main }}>Solution:</Box> {caseStudies[selected].solution}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: 'wrap' }}>
                {Object.entries(caseStudies[selected].results).map(([k, v]) => (
                  <Box key={k} sx={{ textAlign: "center", minWidth: 90, p: 1.5, border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`, borderRadius: 2, bgcolor: alpha(theme.palette.primary.light, 0.1), flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 900, color: theme.palette.primary.dark, fontSize: '1.2rem' }}>{v}</Typography>
                    <Typography sx={{ fontSize: 12, color: theme.palette.text.secondary, mt: 0.5 }}>
                      {k.charAt(0).toUpperCase() + k.slice(1).replace(/([A-Z])/g, ' $1')}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2, gap: 1, flexWrap: 'wrap' }}>
                {caseStudies[selected].technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="medium" // Slightly larger chips for detail view
                    variant="filled"
                    color="primary"
                    sx={{ fontSize: '0.85rem', fontWeight: 600, py: 0.5 }}
                  />
                ))}
              </Box>

              {/* Testimonial below details */}
              <Paper
                elevation={1}
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.secondary.light, 0.1),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <QuoteLeft sx={{ color: theme.palette.secondary.main, fontSize: 40, opacity: 0.8, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1.5, color: theme.palette.text.primary, lineHeight: 1.6 }}>
                      "{caseStudies[selected].testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={caseStudies[selected].testimonial.avatar}
                        sx={{ width: 48, height: 48, border: `1px solid ${theme.palette.secondary.main}` }}
                      />
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700} color="text.primary">
                          {caseStudies[selected].testimonial.author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {caseStudies[selected].testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Paper>

          {/* Focused CTA card */}
          <Paper
            elevation={6}
            sx={{
              p: 3,
              borderRadius: 3,
              background: `linear-gradient(120deg, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.primary.main, 0.05)})`,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "stretch",
              color: theme.palette.text.primary,
              textAlign: 'center' // Center align text for CTA
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, width: 56, height: 56, boxShadow: theme.shadows[3] }}>
                <CalendarMonthIcon sx={{ fontSize: 32 }} /> {/* Icon for booking */}
              </Avatar>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 900, mt: 1 }}>Let's Build Something Great Together</Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
              Schedule a 30-minute free discovery call. We'll outline how our expertise can accelerate your goals.
            </Typography>

            <Button
              variant="contained"
              fullWidth
              endIcon={<Launch />}
              sx={{
                background: accent,
                textTransform: "none",
                fontWeight: 800,
                borderRadius: 2,
                px: 2, py: 1.2, // Slightly more padding
                color: theme.palette.primary.contrastText,
                fontSize: '1rem',
                '&:hover': {
                  background: `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                }
              }}
            >
              Schedule a Free Call
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                color: theme.palette.text.primary,
                borderColor: alpha(theme.palette.text.primary, 0.3),
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 2, py: 1.2,
                fontSize: '1rem',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                }
              }}
            >
              Contact Sales
            </Button>

            <Divider sx={{ borderColor: alpha(theme.palette.grey[300], 0.6), my: 1 }} /> {/* Lighter divider with more margin */}

            <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
              Trusted by leading companies for:
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "space-around" }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 900, color: theme.palette.primary.dark, fontSize: '1.1rem' }}>+150%</Typography>
                <Typography sx={{ fontSize: 12, color: theme.palette.text.secondary }}>Avg Revenue Lift</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 900, color: theme.palette.primary.dark, fontSize: '1.1rem' }}>99.9%</Typography>
                <Typography sx={{ fontSize: 12, color: theme.palette.text.secondary }}>Avg Uptime</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}