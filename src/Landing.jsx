import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  Paper,
  Container,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import ReCAPTCHA from "react-google-recaptcha";
import StoreContext from "./common/StoreContext";
import api from "./lib/api";
import Footer from "./pages/Components-Folder/Footer";
import Header from "./pages/Components-Folder/Header";

const Landing = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const { openToast } = useContext(StoreContext || {});
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Not a Valid Email").required("Email is required"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: "",
      name: "",
      source: "",
      contactMethod: "",
      phone: "",
      email: "",
      projectDescription: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!recaptchaValue) {
      openToast?.("error", "Please complete the reCAPTCHA.");
      return;
    } else {
      formAPI(data);
    }
  };

  const formAPI = async (e) => {
    try {
      const { data, status } = await api.post("v1/auth/website-lead", {
        ...e,
        recaptcha: recaptchaValue,
      });
      if (status === 200) openToast?.("success", data?.message);
      reset();
    } catch (error) {
      openToast?.("error", error.response?.data?.message || "An unexpected error occurred.");
    }
  };

  const onRecaptchaChange = (value) => setRecaptchaValue(value);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `repeating-linear-gradient(180deg,#FFF7EE 0%,#FFFFFF 70%,#FFF7EE 90%)`,
        backgroundSize: "100% 200vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 3,
            bgcolor: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            overflow: "hidden",
            minHeight: { xs: "70vh", md: "75vh" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container spacing={4} sx={{ alignItems: "stretch", flex: 1 }}>
            {/* Left Section - hidden entirely */}
            <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "none" }}
            >
              {/* Left form intentionally hidden */}
            </Grid>

            {/* Divider column - hidden */}
            <Grid item xs={12} md={1} sx={{ display: "none" }}>
              {/* Hidden divider column */}
            </Grid>

            {/* Right Section - Calendly (now full width) */}
            <Grid item xs={12} md={12} sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ mb: 2, textAlign: "center" }}>
                <Typography variant="h5" fontWeight="600" sx={{ color: "#1e293b" }}>
                  Book a Meeting
                </Typography>
                <Typography variant="body2" sx={{ color: "#64748b" }}>
                  Select a convenient time for a free consultation.
                </Typography>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: { xs: 0, sm: 0 },
                  borderRadius: 2,
                  bgcolor: "transparent", // Changed from "white" to "transparent"
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <iframe
                  src="https://calendly.com/shabbir-j6jo/leads"
                  style={{
                    border: "none",
                    width: "100%",
                    height: "calc(100vh - 200px)",
                    minHeight: "900px",
                    flex: 1,
                    display: "block",
                    backgroundColor: "transparent", // Added this to remove grey background
                  }}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  title="Calendly Scheduling"
                />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
};

export default Landing;