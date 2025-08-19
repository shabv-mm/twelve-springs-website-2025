import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Button,
  IconButton,
  Select,
  Paper, // Import Paper for the card effect
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
// External dependency - ensure you have 'moment-timezone' installed via npm/yarn
import moment from "moment-timezone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Local asset - ensure this path is correct in your project
import Logo from "../src/assets/mainlogo.png";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// External dependencies - ensure you have 'react-phone-input-2' and 'react-google-recaptcha' installed
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import ReCAPTCHA from "react-google-recaptcha";
// Local dependencies - ensure these paths are correct in your project
import StoreContext from "./common/StoreContext";
import api from "./lib/api";


// Get all timezone options using moment-timezone
const getTimezoneOptions = () => {
  return moment.tz.names().map(tz => {
    const currentTime = moment.tz(tz);
    const offset = currentTime.format('Z');
    const abbreviation = currentTime.format('z');

    return {
      value: tz,
      label: `${tz} (${abbreviation} ${offset})`,
      offset: offset
    };
  });
};

const timezoneOptions = getTimezoneOptions();

const Landing = () => {
  const [contactMethod, setContactMethod] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState(timezoneOptions[
    "Europe/London"
  ]); // Default to first available timezone
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timePeriod, setTimePeriod] = useState('AM'); // New state for AM/PM toggle

  const { openToast } = useContext(StoreContext);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  // Get formatted time string
  const getSelectedTime = () => {
    return selectedTime;
  };

  const schema = yup.object().shape({
    companyName: yup.string().required("Company Name is required"),
    name: yup.string().required("Name is required"),
    source: yup.string().required("Please select an option"),
    contactMethod: yup.string().required("Please select an option"),
    projectDescription: yup.string().required("Description is required"),
    // Phone field validation
    phone:
      contactMethod === "Phone" || contactMethod === "Both"
        ? yup
            .string()
            .required("Phone is required")
            .min(10, "Minimum ten digits required")
        : yup.string().notRequired(),

    // Email field validation
    email:
      contactMethod === "Email" || contactMethod === "Both"
        ? yup.string().email("Not a Valid Email").required("Email is required")
        : yup.string().notRequired(),
  });

  const {
    control,
    watch,
    setValue,
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

  const watchContactMethod = watch("contactMethod");

  const onSubmit = (data) => {
    console.log(data);
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
        selectedDate: selectedDate,
        selectedTime: getSelectedTime(),
        selectedTimezone: selectedTimezone,
      });
      if (status === 200) {
        console.log(data);
        openToast("success", data?.message);
      }
      reset({
        companyName: "",
        name: "",
        source: "",
        contactMethod: "",
        phone: "",
        email: "",
        projectDescription: "",
      });
      setSelectedDate(null);
      setSelectedTime("");
    } catch (error) {
      openToast("error", error.response?.data?.message || "An unexpected error occurred.");
    }
  };

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  // Calendar functionality
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    const today = new Date();

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<Box key={`empty-${i}`} sx={{ width: 40, height: 40 }} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isPast = date < today.setHours(0, 0, 0, 0);

      days.push(
        <Box
          key={day}
          sx={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: isPast ? "not-allowed" : "pointer",
            borderRadius: "50%",
            backgroundColor: isSelected ? "#2563eb" : isToday ? "#e0e7ff" : "transparent",
            color: isSelected ? "white" : isPast ? "#9ca3af" : isToday ? "#2563eb" : "inherit",
            "&:hover": {
              backgroundColor: !isPast && !isSelected ? "#f3f4f6" : undefined,
            },
          }}
          onClick={() => !isPast && setSelectedDate(date)}
        >
          {day}
        </Box>
      );
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  // Generate base time slots (e.g., "1:00", "1:30")
  const generateBaseTimeSlots = () => {
    const slots = [];
    for (let hour = 1; hour <= 12; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const baseTimeSlots = generateBaseTimeSlots();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
      }}
    >
      {/* Logo Header - Now with consistent background and no border/shadow */}
      <Box
        sx={{
          p: 4,
          background: `
            repeating-linear-gradient(
              180deg,
              #FFF7EE 0%,
              #FFFFFF 50%,
              #FFF7EE 100%
            )
          `,
          backgroundSize: "100% 200vh",
          // Adjust padding for logo distance from left
          px: { xs: 2, sm: 4, md: 6, lg: 8 } // Increased padding for more distance
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Displaying the actual Logo image */}
            <img src={Logo} style={{ height: "50px", marginRight: "16px" }} alt="Twelve Springs Logo" />
            
          </Box>
        </Box>
      </Box>

      <Grid container sx={{ minHeight: "calc(100vh - 110px)" }}>
        {/* Left Section - Form */}
        <Grid item xs={12} md={8} sx={{ p: 4 }}> {/* Form takes 8/12 columns on medium devices */}
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            <Typography variant="h4" fontWeight="600" sx={{ mb: 1, color: "#1e293b" }}>
              Your Path to Clarity Starts Here
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#64748b" }}>
              Please fill in the form below and we will be in touch.
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    label="Name *"
                    name="name"
                    control={control}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    label="Email *"
                    name="email"
                    control={control}
                  />
                </Grid>
              </Grid>

              <PhoneFieldController
                name="phone"
                control={control}
                label="Phone *"
              />

              <CustomTextField
                label="Company Name *"
                name="companyName"
                control={control}
              />

              <Controller
                name="source"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <Typography sx={{ fontWeight: 500, mb: 1, color: "#374151" }}>
                      How did you hear about us? *
                    </Typography>
                    <Select
                      {...field}
                      variant="outlined"
                      fullWidth
                      sx={{
                        height: "48px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d1d5db",
                        },
                      }}
                      error={!!error}
                      onChange={(e) => {
                        setValue("source", e.target.value);
                        field.onChange(e);
                      }}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>
                        Please Select
                      </MenuItem>
                      <MenuItem value="search-engine">Search Engine (e.g. Google)</MenuItem>
                      <MenuItem value="social-media">Social Media (e.g. Facebook, Twitter, Instagram)</MenuItem>
                      <MenuItem value="word">Word of Mouth</MenuItem>
                      <MenuItem value="advert">Google/Online Advertisement</MenuItem>
                      <MenuItem value="referral">Customer Referral</MenuItem>
                    </Select>
                    {error && (
                      <Typography color="error" fontSize={"12px"} sx={{ mt: 0.5 }}>
                        {error.message}
                      </Typography>
                    )}
                  </div>
                )}
              />

              <Controller
                name="contactMethod"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <Typography sx={{ fontWeight: 500, mb: 1, color: "#374151" }}>
                      Subject *
                    </Typography>
                    <Select
                      {...field}
                      variant="outlined"
                      fullWidth
                      error={!!error}
                      sx={{
                        height: "48px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d1d5db",
                        },
                      }}
                      onChange={(e) => {
                        field.onChange(e);
                        setValue("contactMethod", e.target.value);
                        setContactMethod(e.target.value);
                      }}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>
                        Please Select
                      </MenuItem>
                      <MenuItem value="consultation">Free Consultation</MenuItem>
                      <MenuItem value="project-inquiry">Project Inquiry</MenuItem>
                      <MenuItem value="general">General Question</MenuItem>
                      <MenuItem value="support">Support</MenuItem>
                    </Select>
                    {error && (
                      <Typography color="error" fontSize={"12px"} sx={{ mt: 0.5 }}>
                        {error.message}
                      </Typography>
                    )}
                  </div>
                )}
              />

              <CustomTextField
                label="Project Description (Optional)"
                name="projectDescription"
                control={control}
                multiline
                rows={4}
                placeholder="Tell us about your project..."
              />

              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
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
          </Box>
        </Grid>

        {/* Right Section - Calendar */}
        <Grid
          item
          xs={12}
          md={4} // Calendar column still takes 4/12 width
          sx={{
            display: "flex", // Use flexbox to center the inner card
            justifyContent: "center",
            alignItems: "flex-start", // Align to top, or center if preferred visually
            py: { xs: 3, md: 5 }, // Add vertical padding to the grid item for spacing
            px: { xs: 1, md: 3 }, // Add horizontal padding to the grid item for spacing
          }}
        >
          {/* The actual card element */}
          <Paper
            sx={{
              bgcolor: "#fcfcfc", // Slightly off-white background for the card
              p: 4,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)", // Subtle shadow for card effect
              borderRadius: "8px", // Rounded corners for card
              maxWidth: 370, // Smaller fixed width for the card content
              width: '100%', // Ensure it takes full width up to maxWidth
              // Added responsive padding for better appearance on smaller screens
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 3, sm: 4, md: 4 },
            }}
          >
            <Box sx={{ maxWidth: 400, mx: "auto" }}> {/* This box holds the calendar content */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <CalendarTodayIcon sx={{ mr: 2, color: "#2563eb" }} />
                <Typography variant="h5" fontWeight="600" sx={{ color: "#1e293b" }}>
                  Book a Meeting
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ mb: 4, color: "#64748b" }}>
                Select your timezone, date and time for the meeting at your convenience
              </Typography>

              {/* Timezone Selection */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2, color: "#374151" }}>
                  <AccessTimeIcon sx={{ mr: 1, fontSize: 18, verticalAlign: "middle" }} />
                  Select Timezone
                </Typography>
                <Autocomplete
                  value={selectedTimezone}
                  onChange={(event, newValue) => {
                    setSelectedTimezone(newValue);
                    // Reset selected time when timezone changes
                    setSelectedTime("");
                  }}
                  options={timezoneOptions}
                  getOptionLabel={(option) => option?.label || ''}
                  isOptionEqualToValue={(option, value) => option.value === value.value}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Search timezone (e.g., Asia/Kolkata)..."
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          height: "48px",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d1d5db",
                          },
                        },
                      }}
                    />
                  )}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <Typography variant="body2">
                        {option.label}
                      </Typography>
                    </Box>
                  )}
                  sx={{ mb: 2 }}
                  filterOptions={(options, { inputValue }) =>
                    options.filter(option =>
                      option.value.toLowerCase().includes(inputValue.toLowerCase()) ||
                      option.label.toLowerCase().includes(inputValue.toLowerCase())
                    )
                  }
                />
                <Typography variant="caption" sx={{ color: "#64748b" }}>
                  Current time in {selectedTimezone?.value}: {moment.tz(selectedTimezone?.value).format('h:mm A')}
                </Typography>
              </Box>

              {/* Calendar Header */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <IconButton onClick={() => navigateMonth(-1)} sx={{ color: "#64748b" }}>
                  <ArrowBackIosIcon fontSize="small" />
                </IconButton>
                <Typography variant="h6" fontWeight="600" sx={{ color: "#1e293b" }}>
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </Typography>
                <IconButton onClick={() => navigateMonth(1)} sx={{ color: "#64748b" }}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Calendar Grid */}
              <Box sx={{ mb: 4 }}>
                {/* Day headers */}
                <Grid container spacing={0} sx={{ mb: 1 }}>
                  {dayNames.map((day) => (
                    <Grid item xs key={day} sx={{ textAlign: "center" }}>
                      <Typography variant="caption" fontWeight="600" color="#64748b">
                        {day}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                {/* Calendar days */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {generateCalendar()}
                </Box>
              </Box>

              {/* Time Period Toggle (AM/PM) */}
              {selectedDate && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2, color: "#374151" }}>
                    <AccessTimeIcon sx={{ mr: 1, fontSize: 18, verticalAlign: "middle" }} />
                    Select Time Period
                  </Typography>
                  <ToggleButtonGroup
                    value={timePeriod}
                    exclusive
                    onChange={(event, newPeriod) => {
                      if (newPeriod !== null) {
                        setTimePeriod(newPeriod);
                        setSelectedTime(""); // Reset selected time when period changes
                      }
                    }}
                    aria-label="time period"
                    sx={{
                      width: '80%',
                      justifyContent: 'center',
                      gap: 1,
                      "& .MuiToggleButton-root": {
                        flexGrow: 1,
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 500,
                        color: '#374151',
                        '&.Mui-selected': {
                          backgroundColor: '#2563eb',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#1d4ed8',
                          },
                        },
                        '&:hover': {
                          backgroundColor: '#f3f4f6',
                        },
                      },
                    }}
                  >
                    <ToggleButton value="AM" aria-label="am">
                      🌅 (AM)
                    </ToggleButton>
                    <ToggleButton value="PM" aria-label="pm">
                      🌆 (PM)
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              )}

              {/* Time Selection */}
              {selectedDate && (
                <Box>
                  <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 3, color: "#374151" }}>
                    <AccessTimeIcon sx={{ mr: 1, fontSize: 18, verticalAlign: "middle" }} />
                    Select Available Time Slots
                  </Typography>

                  <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                    {baseTimeSlots.map((baseTime) => {
                      const fullTime = `${baseTime} ${timePeriod}`;
                      return (
                        <Button
                          key={fullTime}
                          variant={selectedTime === fullTime ? "contained" : "outlined"}
                          size="small"
                          onClick={() => setSelectedTime(fullTime)}
                          sx={{
                            py: 1,
                            px: 2,
                            fontSize: "12px",
                            fontWeight: 500,
                            bgcolor: selectedTime === fullTime ? "#2563eb" : "transparent",
                            borderColor: selectedTime === fullTime ? "#2563eb" : "#d1d5db",
                            color: selectedTime === fullTime ? "white" : "#374151",
                            "&:hover": {
                              bgcolor: selectedTime === fullTime ? "#1d4ed8" : "#f3f4f6",
                              borderColor: selectedTime === fullTime ? "#1d4ed8" : "#9ca3af",
                            },
                            transition: "all 0.2s ease-in-out",
                          }}
                        >
                          {fullTime}
                        </Button>
                      );
                    })}
                  </Box>

                  {/* Selected Time Display */}
                  {selectedTime && (
                    <Paper sx={{ p: 3, bgcolor: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: 2, mt: 4 }}>
                      <Typography variant="body2" sx={{ color: "#0369a1", fontWeight: 500, mb: 1 }}>
                        📅 Meeting Scheduled
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#0369a1" }}>
                        <strong>Date:</strong> {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#0369a1" }}>
                        <strong>Time:</strong> {selectedTime}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#0369a1" }}>
                        <strong>Timezone:</strong> {selectedTimezone?.label}
                      </Typography>
                    </Paper>
                  )}
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const CustomTextField = ({
  label,
  control,
  name,
  multiline,
  placeholder,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <div>
        <Typography sx={{ fontWeight: 500, mb: 1, color: "#374151" }}>
          {label}
        </Typography>
        <TextField
          {...field}
          variant="outlined"
          fullWidth
          multiline={multiline}
          placeholder={placeholder}
          error={!!error}
          sx={{
            "& .MuiOutlinedInput-root": {
              minHeight: name === "projectDescription" ? "auto" : "48px",
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

function PhoneFieldController({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Typography sx={{ fontWeight: 500, mb: 1, color: "#374151" }}>
            {label}
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

export default Landing