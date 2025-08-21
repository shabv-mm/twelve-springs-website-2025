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
  CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";

/* ---------- Dummy data (9 items) ---------- */
const caseStudies = Array.from({ length: 9 }).map((_, i) => {
  const templates = [
    {
      title: "E-commerce Platform Boost",
      client: "SwiftCart Solutions",
      industry: "Retail",
      duration: "8 months",
      image: "https://placehold.co/800x600/F8F9FA/6C757D?text=E-commerce",
      challenge: "Legacy infrastructure struggled with peak demand, leading to high cart abandonment rates.",
      solution: "Implemented a serverless microservices architecture with a CDN, dramatically improving load times and user experience.",
      results: { revenue: "+150%", uptime: "99.9%", users: "2M+" },
      technologies: ["React", "Node.js", "AWS"],
      bgColor: '#E3F2FD', // Mild Blue
    },
    {
      title: "AI-Driven Healthcare Insights",
      client: "HealthPulse Diagnostics",
      industry: "Healthcare",
      duration: "12 months",
      image: "https://placehold.co/800x600/F1F8E9/81C784?text=Healthcare",
      challenge: "Disparate patient data systems hampered comprehensive analysis and real-time decision-making.",
      solution: "Developed a unified AI-powered data lake and analytics platform, providing predictive insights for personalized care.",
      results: { efficiency: "+60%", accuracy: "98%", speed: "50% faster" },
      technologies: ["Python", "TensorFlow", "PostgreSQL"],
      bgColor: '#E8F5E8', // Mild Green
    },
    {
      title: "High-Frequency Trading Engine",
      client: "Apex Financial Group",
      industry: "Finance",
      duration: "6 months",
      image: "https://placehold.co/800x600/FFF8E1/FFB74D?text=Finance",
      challenge: "Required ultra-low latency execution and robust security for millions of daily transactions.",
      solution: "Engineered a custom, event-driven trading engine utilizing in-memory databases and advanced encryption protocols.",
      results: { latency: "0.2ms", volume: "10M/day", profit: "+200%" },
      technologies: ["Java", "Apache Kafka", "Redis"],
      bgColor: '#FFF3E0', // Mild Orange
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
    bgColor: t.bgColor,
    testimonial: {
      text: "Their team delivered exceptional results, transforming our operations and exceeding all expectations.",
      author: ["Sarah J.", "Dr. M. Chen", "Robert W."][i % 3],
      position: ["CTO, SwiftCart", "CMO, HealthPulse", "Head of Eng, Apex Financial"][i % 3],
      avatar: `https://placehold.co/48x48/${["F5F5F5", "F0F0F0", "FAFAFA"][i % 3]}/666666?text=${encodeURIComponent(["SJ", "MC", "RW"][i % 3])}`,
    },
  };
});

/* ---------- Helper functions for icons ---------- */
const getIndustryIcon = (industry) => {
  if (industry === "Retail") return <Business sx={{ fontSize: 32 }} />;
  if (industry === "Healthcare") return <Security sx={{ fontSize: 32 }} />;
  return <TrendingUp sx={{ fontSize: 32 }} />;
};

const getMetricIcon = (k) => {
  const key = k.toLowerCase();
  if (key.includes("revenue") || key.includes("profit") || key.includes("roi")) return <TrendingUp />;
  if (key.includes("latency") || key.includes("performance") || key.includes("speed")) return <Speed />;
  if (key.includes("users") || key.includes("volume")) return <People />;
  return <Star />;
};

/* -------------------------
    CaseStudies Component
    ------------------------- */
export default function CaseStudies() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const slidesToShow = isMdUp ? 3 : isSmUp ? 2 : 1;
  const total = caseStudies.length;

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 16;
  const cardHeight = 380;

  const maxIndex = Math.max(0, total - slidesToShow);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const measure = () => setContainerWidth(el.clientWidth);
    measure();
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

  const cardWidth = containerWidth ? (containerWidth - gap * (slidesToShow - 1)) / slidesToShow : 0;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));
    }, 2000); // Auto-advances every 2 seconds
    return () => clearInterval(t);
  }, [paused, maxIndex]);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [slidesToShow, maxIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const prev = useCallback(() => setIndex((i) => (i - 1 < 0 ? maxIndex : i - 1)), [maxIndex]);
  const next = useCallback(() => setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1)), [maxIndex]);

  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchMove = (e) => {
    if (!touchStartX.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (touchDeltaX.current > 40) prev();
    else if (touchDeltaX.current < -40) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setPaused(false);
  };

  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [prev, next]);

  const translateX = -(index * (cardWidth + gap));
  // Accent color for gradients. Adjusting for a light theme.
  const accent = `linear-gradient(120deg, #00cbcc, #00bbdf)`; // Your specified gradient
  // Active dot color for carousel pagination
  const dotActive = theme.palette.success.main; // Solid green for active dot

  const handleScheduleCall = () => {
    // Replace with your actual landing page URL or a modal open function
    window.location.href = '/landing';
  };

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
            variant="h5" // Smaller heading size
            sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 1 }}
          >
            Our Success Stories
          </Typography>
          <Typography sx={{ color: theme.palette.text.secondary, mt: 1, maxWidth: 760, mx: "auto", fontSize: '0.95rem' }}>
            Explore how we've empowered businesses across industries to achieve their strategic objectives with cutting-edge solutions.
          </Typography>
          <Divider sx={{ width: 72, mx: "auto", mt: 2, borderColor: theme.palette.divider }} />
        </Box>

        {/* Carousel Section */}
        <Box
          ref={containerRef}
          sx={{ position: "relative", mb: 3 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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
              bgcolor: alpha(theme.palette.grey[100], 0.8), // Mild light background
              color: theme.palette.text.secondary, // Mild dark arrow
              border: `1px solid ${theme.palette.divider}`,
              "&:hover": { bgcolor: theme.palette.grey[200], boxShadow: theme.shadows[1] },
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
              bgcolor: alpha(theme.palette.grey[100], 0.8),
              color: theme.palette.text.secondary,
              border: `1px solid ${theme.palette.divider}`,
              "&:hover": { bgcolor: theme.palette.grey[200], boxShadow: theme.shadows[1] },
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
              overflow: "hidden",
              borderRadius: 2,
              py: 1,
            }}
          >
            {/* Inner Carousel Track */}
            <Box
              sx={{
                display: "flex",
                gap: `${gap}px`,
                transition: "transform 520ms cubic-bezier(.2,.9,.25,1)",
                transform: `translateX(${translateX}px)`,
                width: `${total * (cardWidth + gap)}px`,
                minHeight: cardHeight,
              }}
            >
              {caseStudies.map((c, i) => {
                const isActive = i === selected;
                return (
                  <Box key={c.id} sx={{ flex: `0 0 ${cardWidth}px`, maxWidth: `${cardWidth}px` }}>
                    <Card
                      onClick={() => setSelected(i)}
                      sx={{
                        height: cardHeight,
                        borderRadius: 3,
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: isActive ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
                        boxShadow: isActive
                          ? '0 12px 40px rgba(0,0,0,0.15),0 4px 16px rgba(0,0,0,0.1)'
                          : '0 4px 20px rgba(0,0,0,0.08),0 2px 8px rgba(0,0,0,0.04)',
                        bgcolor: theme.palette.background.paper, // Clean white background for cards
                        border: `2px solid ${isActive ? theme.palette.success.main : theme.palette.divider}`, // Subtle border enhancement
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          height: 80,
                          background: `linear-gradient(180deg, ${alpha(c.bgColor, 0.7)}, ${c.bgColor})`, // Mild gradient for CardMedia
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 40, // Smaller icon circle
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: theme.palette.background.paper, // White circle
                            color: theme.palette.text.secondary, // Dark icon
                            border: `1px solid ${theme.palette.divider}`,
                            boxShadow: theme.shadows[1],
                          }}
                        >
                          {getIndustryIcon(c.industry)}
                        </Box>
                      </CardMedia>

                      <CardContent sx={{ p: 2.5, flex: 1, color: theme.palette.text.primary, display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: 11, fontWeight: 600, color: theme.palette.success.main, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {c.industry}
                        </Typography>
                        <Typography sx={{ fontSize: 15, fontWeight: 600, mt: 0.5, lineHeight: 1.3, color: theme.palette.text.primary }} noWrap>
                          {c.title}
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: theme.palette.text.secondary, mt: 0.5 }}>
                          {c.client} &bull; {c.duration}
                        </Typography>

                        <Typography sx={{ fontSize: 13, color: theme.palette.text.secondary, mt: 1.25, minHeight: 44, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', flex: 1 }}>
                          <Box component="span" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>Challenge:</Box> {c.challenge}
                        </Typography>

                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mt: 2 }}> {/* Changed to flex-end for right alignment */}
                          <Box sx={{ display: "flex", gap: 0.6, flex: 1 }}>
                            {c.technologies.slice(0, 2).map((t) => (
                              <Chip
                                key={t}
                                label={t}
                                size="small"
                                sx={{
                                  bgcolor: theme.palette.action.hover, // Very mild background
                                  color: theme.palette.text.secondary,
                                  fontSize: 10,
                                  fontWeight: 500,
                                  border: `1px solid ${theme.palette.divider}`,
                                  borderRadius: 2,
                                  '&:hover': { bgcolor: theme.palette.action.selected, transform: 'translateY(-1px)' },
                                  transition: 'all 200ms ease',
                                }}
                              />
                            ))}
                          </Box>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={(e) => { e.stopPropagation(); setSelected(i) }}
                            sx={{
                              textTransform: "none",
                              fontWeight: 600,
                              background: "linear-gradient(120deg, #00cbcc, #00bbdf)", // Applied your gradient here
                              color: theme.palette.common.white,
                              fontSize: '0.75rem',
                              px: 1.5, py: 0.5,
                              borderRadius: 1.5,
                              boxShadow: theme.shadows[2],
                              '&:hover': {
                                background: "linear-gradient(120deg, #00bbdf, #00cbcc)", // Reverse gradient on hover
                                boxShadow: theme.shadows[4],
                                transform: 'translateY(-1px)',
                              },
                              transition: 'all 200ms ease',
                            }}
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
                  width: index === d ? 26 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: index === d ? theme.palette.success.main : theme.palette.divider,
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
            gridTemplateColumns: { xs: "1fr", md: "1fr 380px" },
            gap: 3,
            alignItems: "start",
            mt: 2,
            color: theme.palette.text.primary,
          }}
        >
          {/* Selected Case Study Detail Panel */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "flex-start",
              bgcolor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: theme.shadows[1],
            }}
          >
            <Avatar src={caseStudies[selected].testimonial.avatar} sx={{ width: 64, height: 64, border: `2px solid ${theme.palette.divider}` }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary, fontSize: '1.1rem' }}>{caseStudies[selected].title}</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5, fontSize: '0.85rem' }}>
                <Box component="span" sx={{ fontWeight: 600 }}>Client:</Box> {caseStudies[selected].client} &bull; <Box component="span" sx={{ fontWeight: 600 }}>Duration:</Box> {caseStudies[selected].duration}
              </Typography>

              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mt: 1.5, lineHeight: 1.7, fontSize: '0.9rem' }}>
                <Box component="span" sx={{ fontWeight: 600, color: theme.palette.error.main }}>Challenge:</Box> {caseStudies[selected].challenge}
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mt: 1, lineHeight: 1.7, fontSize: '0.9rem' }}>
                <Box component="span" sx={{ fontWeight: 600, color: theme.palette.success.main }}>Solution:</Box> {caseStudies[selected].solution}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: 'wrap' }}>
                {Object.entries(caseStudies[selected].results).map(([k, v]) => (
                  <Box key={k} sx={{ textAlign: "center", minWidth: 90, p: 1.5, border: `1px solid ${theme.palette.divider}`, borderRadius: 2, bgcolor: theme.palette.action.hover, flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: '1.1rem' }}>{v}</Typography>
                    <Typography sx={{ fontSize: 11, color: theme.palette.text.secondary, mt: 0.5 }}>
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
                    size="medium"
                    variant="filled"
                    sx={{
                      bgcolor: theme.palette.action.hover,
                      color: theme.palette.text.secondary,
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      border: `1px solid ${theme.palette.divider}`,
                      py: 0.5,
                      borderRadius: 2,
                      '&:hover': { bgcolor: theme.palette.action.selected, transform: 'translateY(-1px)' },
                      transition: 'all 200ms ease',
                    }}
                  />
                ))}
              </Box>

              {/* Testimonial below details */}
              <Paper
                elevation={0}
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: theme.palette.background.default,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <QuoteLeft sx={{ color: theme.palette.text.disabled, fontSize: 32, opacity: 0.8, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1.5, color: theme.palette.text.secondary, lineHeight: 1.6, fontSize: '0.9rem' }}>
                      "{caseStudies[selected].testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={caseStudies[selected].testimonial.avatar}
                        sx={{ width: 40, height: 40, border: `1px solid ${theme.palette.divider}` }}
                      />
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600} color={theme.palette.text.primary} fontSize="0.85rem">{caseStudies[selected].testimonial.author}</Typography>
                        <Typography variant="caption" color={theme.palette.text.secondary} fontSize="0.75rem">{caseStudies[selected].testimonial.position}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Paper>

          {/* Focused CTA card */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
              border: `1px solid ${theme.palette.divider}`,
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              alignItems: "stretch",
              color: theme.palette.text.primary,
              textAlign: 'center',
              boxShadow: theme.shadows[1],
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.light}, ${theme.palette.success.main})`,
              }
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: theme.palette.success.main, color: theme.palette.common.white, width: 56, height: 56, boxShadow: theme.shadows[2], border: `3px solid ${alpha(theme.palette.success.main, 0.1)}` }}>
                <CalendarMonthIcon sx={{ fontSize: 28 }} />
              </Avatar>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 1, fontSize: '1.2rem', color: theme.palette.text.primary }}>Let's Build Something Great Together</Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1, fontSize: '0.9rem', lineHeight: 1.6 }}>
              Schedule a 30-minute free discovery call. We'll outline how our expertise can accelerate your goals.
            </Typography>

            <Button
              variant="contained"
              fullWidth
              endIcon={<Launch />}
              onClick={handleScheduleCall}
              sx={{
                background: "linear-gradient(120deg, #00cbcc, #00bbdf)", // Applied your gradient here
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2.5,
                px: 2, py: 1.5,
                color: theme.palette.common.white,
                fontSize: '1rem',
                boxShadow: theme.shadows[2],
                border: 'none',
                '&:hover': {
                  background: "linear-gradient(120deg, #00bbdf, #00cbcc)", // Reverse gradient on hover
                  boxShadow: theme.shadows[3],
                  transform: 'translateY(-2px)',
                },
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Schedule a Free Call
            </Button>
          
            <Divider sx={{ borderColor: theme.palette.divider, my: 1.5 }} />

            <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary, fontSize: '0.85rem', fontWeight: 600 }}>
              Trusted by leading companies for:
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "space-around" }}>
              {/* Mild Green Box 1 */}
              <Box sx={{ textAlign: "center", p: 1.5, borderRadius: 2, bgcolor: alpha(theme.palette.success.main, 0.08), border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`, flex: 1, }}>
                <Typography sx={{ fontWeight: 700, color: theme.palette.success.dark, fontSize: '1.1rem' }}>+150%</Typography>
                <Typography sx={{ fontSize: 11, color: theme.palette.text.secondary, fontWeight: 500 }}>Avg Revenue</Typography>
              </Box>
              {/* Mild Blue/Primary Box 2 */}
              <Box sx={{ textAlign: "center", p: 1.5, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.08), border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, flex: 1, }}>
                <Typography sx={{ fontWeight: 700, color: theme.palette.primary.dark, fontSize: '1.1rem' }}>99.9%</Typography>
                <Typography sx={{ fontSize: 11, color: theme.palette.text.secondary, fontWeight: 500 }}>Uptime</Typography>
              </Box>
              {/* Mild Orange Box 3 */}
              <Box sx={{ textAlign: "center", p: 1.5, borderRadius: 2, bgcolor: alpha(theme.palette.warning.main, 0.08), border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}`, flex: 1, }}>
                <Typography sx={{ fontWeight: 700, color: theme.palette.warning.dark, fontSize: '1.1rem' }}>6 Mo</Typography>
                <Typography sx={{ fontSize: 11, color: theme.palette.text.secondary, fontWeight: 500 }}>Avg Timeline</Typography>
              </Box>
            </Box>

            {/* <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
              <Typography variant="caption" sx={{ color: theme.palette.text.disabled, fontSize: '0.75rem', display: 'block', mb: 1 }}>
                ✓ No commitment required ✓ Free consultation ✓ 24hr response
              </Typography>
            </Box> */}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
