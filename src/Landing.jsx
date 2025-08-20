import React, { useContext, useState, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Grid,
    Button,
    Select,
    Divider,
    Paper,
} from "@mui/material";

// Ensure these paths are correct in your project
// import Logo from "../src/assets/mainlogo.png"; // Removed as it's not being used here, and to avoid potential path issues
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import ReCAPTCHA from "react-google-recaptcha";
import StoreContext from "./common/StoreContext";
import api from "./lib/api";
import Footer from "./pages/Components-Folder/Footer"; // Assuming Footer is correctly imported and available

// You might need to adjust the path to your logo if it's not directly in src/assets
import mainlogoImg from "../src/assets/mainlogo.png";

const Landing = () => {
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const { openToast } = useContext(StoreContext);

    // Removed the useEffect that loaded Calendly's external widget.js
    // as we are now directly embedding the iframe.

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Not a Valid Email").required("Email is required"),
        companyName: yup.string().notRequired(),
        phone: yup.string().notRequired(),
        source: yup.string().notRequired(),
        contactMethod: yup.string().notRequired(),
        projectDescription: yup.string().notRequired(),
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
            openToast("error", "Please complete the reCAPTCHA.");
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
            if (status === 200) {
                openToast("success", data?.message);
            }
            reset();
        } catch (error) {
            openToast("error", error.response?.data?.message || "An unexpected error occurred.");
        }
    };

    const onRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: `
                    repeating-linear-gradient(
                        180deg,
                        #FFF7EE 0%,
                        #FFFFFF 70%,
                        #FFF7EE 90%
                    )
                `,
                backgroundSize: "100% 200vh",
                // Removed overflowY: "hidden" from here to allow page scrolling if content exceeds viewport
            }}
        >
            {/* Logo Header */}
            <Box sx={{ p: 4, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                <Box sx={{ maxWidth: 1200, mx: "auto" }}>
                    {/* Updated logo source to reflect common asset path */}
                    <img src={mainlogoImg} style={{ height: "50px" }} alt="Twelve Springs Logo" />
                </Box>
            </Box>

            <Grid
                container
                spacing={4}
                sx={{
                    minHeight: "calc(100vh - 110px)",
                    maxWidth: 1400,
                    mx: "auto",
                    p: { xs: 2, md: 4, lg: 6 },
                    alignItems: 'stretch',
                }}
            >
                {/* Left Section - Form */}
                <Grid item xs={12} md={4.5}> {/* UPDATED: Changed md from 5 to 4.5 */}
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        <Typography variant="h4" fontWeight="600" sx={{ mb: 1, color: "#1e293b" }}>
                            Your Path to Clarity Starts Here
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, color: "#64748b" }}>
                            Please fill in the form below and we will be in touch.
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <CustomTextField
                                    label="Name"
                                    name="name"
                                    control={control}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CustomTextField
                                    label="Email"
                                    name="email"
                                    control={control}
                                />
                            </Grid>
                        </Grid>

                        <PhoneFieldController
                            name="phone"
                            control={control}
                            label="Phone"
                            optional={true}
                        />
                        <CustomTextField
                            label="Company Name"
                            name="companyName"
                            control={control}
                            optional={true}
                        />
                        <CustomSelectField
                            label="How did you hear about us?"
                            name="source"
                            control={control}
                            optional={true}
                            options={[
                                { value: "search-engine", label: "Search Engine (e.g. Google)" },
                                { value: "social-media", label: "Social Media (e.g. Facebook, Twitter, Instagram)" },
                                { value: "word", label: "Word of Mouth" },
                                { value: "advert", label: "Google/Online Advertisement" },
                                { value: "referral", label: "Customer Referral" },
                            ]}
                        />
                        <CustomSelectField
                            label="Subject"
                            name="contactMethod"
                            control={control}
                            optional={true}
                            options={[
                                { value: "consultation", label: "Free Consultation" },
                                { value: "project-inquiry", label: "Project Inquiry" },
                                { value: "general", label: "General Question" },
                                { value: "support", label: "Support" },
                            ]}
                        />
                        <CustomTextField
                            label="Project Description (Optional)"
                            name="projectDescription"
                            control={control}
                            multiline
                            rows={4}
                            placeholder="Tell us about your project..."
                            optional={true}
                        />

                        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
                            <ReCAPTCHA
                                sitekey="6Leogv0pAAAAAB3fEmqj88P-Q4pDnWYNAaZ7iliN"
                                onChange={onRecaptchaChange}
                            />
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: "#1e293b",
                                color: "white",
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: "#334155",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>

                {/* Separating Divider */}
                <Grid item xs={12} md={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: { xs: 4, md: 0 }, height: '100%' }}>
                        {/* Divider for mobile (horizontal) */}
                        <Divider sx={{
                            display: { xs: 'flex', md: 'none' },
                            width: '100%',
                            "&::before, &::after": {
                                borderTopColor: 'black',
                                borderTopStyle: 'dotted',
                                borderTopWidth: '1.5px'
                            }
                        }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                OR
                            </Typography>
                        </Divider>
                        {/* Divider for desktop (vertical) */}
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                height: '100%',
                                "&::before, &::after": {
                                    borderLeftColor: 'black',
                                    borderLeftStyle: 'dashed',
                                    borderLeftWidth: '1.5px'
                                }
                            }}
                        >
                            <Typography variant="body2" sx={{ transform: 'rotate(90deg)', color: '#00cbcc', fontWeight: 600 }}>
                                OR
                            </Typography>
                        </Divider>
                    </Box>
                </Grid>

                {/* Right Section - Calendly Widget */}
                <Grid item xs={12} md={6.4}> {/* UPDATED: Changed md from 6 to 6.5 */}
                    <Paper
                        sx={{
                            p: { xs: 2, sm: 3, md: 4 },
                            borderRadius: 2,
                            boxShadow: 3,
                            bgcolor: 'white',
                            overflow: 'hidden', // The container for the calendly widget should have hidden overflow
                        }}
                    >
                        <Typography variant="h5" fontWeight="600" sx={{ mb: 2, color: "#1e293b", textAlign: 'center' }}>
                            Book a Meeting
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, color: "#64748b", textAlign: 'center' }}>
                            Select a convenient time for a free consultation.
                        </Typography>
                        {/* Replaced Calendly div with direct iframe embedding */}
                        <iframe
                            src="https://calendly.com/shabbir-j6jo/leads"
                            style={{ border: "none", minWidth: "380px", height: "800px", width: "100%" }}
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                            title="Calendly Scheduling"
                        ></iframe>
                    </Paper>
                </Grid>
            </Grid>
            {/* The Footer component must be inside the main component's return block */}
            <Footer />
        </Box>
    );
};

// =======================
// Helper Components (No changes to these unless specified)
// =======================

const CustomTextField = ({ label, control, name, multiline, placeholder, optional, ...props }) => (
    <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
            <div>
                <Typography sx={{ fontWeight: 500, mb: 1, color: "#374151" }}>
                    {label} {!optional && "*"}
                </Typography>
                <TextField
                    {...field}
                    variant="outlined"
                    fullWidth
                    multiline={multiline}
                    rows={multiline ? props.rows : undefined} // Ensure rows prop is passed for multiline
                    placeholder={placeholder}
                    error={!!error}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            minHeight: name === "projectDescription" ? "auto" : "48px",
                            bgcolor: 'white',
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#d1d5db",
                            },
                        },
                    }}
                    {...props}
                />
                {error && (
                    <Typography color="error" fontSize={"12px"} sx={{ mt: 0.5 }}>
                        {error.message}
                    </Typography>
                )}
            </div>
        )}
    />
);

function PhoneFieldController({ name, control, label, optional }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <Typography sx={{ fontWeight: 500, mb: 1, color: "#374151" }}>
                        {label} {!optional && "*"}
                    </Typography>
                    <PhoneInput
                        {...field}
                        country="gb"
                        onChange={field.onChange}
                        value={field.value}
                        inputStyle={{
                            width: "100%",
                            height: "48px",
                            paddingLeft: "50px",
                            lineHeight: "48px",
                            borderRadius: 8,
                            fontFamily: "inherit",
                            border: error ? "1px solid #ef4444" : "1px solid #d1d5db",
                            boxShadow: "none",
                            fontSize: "16px",
                            backgroundColor: 'white',
                        }}
                        specialLabel=""
                    />
                    {error && (
                        <Typography color="error" fontSize={"12px"} sx={{ mt: 0.5 }}>
                            {error.message}
                        </Typography>
                    )}
                </div>
            )}
        />
    );
}

const CustomSelectField = ({ label, control, name, options, optional }) => (
    <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
            <div>
                <Typography sx={{ fontWeight: 500, mb: 1, color: "#374151" }}>
                    {label} {!optional && "*"}
                </Typography>
                <Select
                    {...field}
                    variant="outlined"
                    fullWidth
                    sx={{
                        height: "48px",
                        bgcolor: 'white',
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d1d5db",
                        },
                    }}
                    error={!!error}
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        Please Select
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {error && (
                    <Typography color="error" fontSize={"12px"} sx={{ mt: 0.5 }}>
                        {error.message}
                    </Typography>
                )}
            </div>
        )}
    />
);

export default Landing;