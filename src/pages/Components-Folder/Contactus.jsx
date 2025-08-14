import React, { useContext, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Checkbox,
  FormControlLabel,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";

import SignupBottomLeft from "../../assets/Signup-bottomLeft.svg";
import nonBgLogin from "../../assets/login.svg";
import decor7 from "../../assets/decor7.svg";
import userSignup from "../../assets/userSignup.svg";
import smsTracking from "../../assets/sms-tracking.svg";
import msgText from "../../assets/message-text.svg";
import category from "../../assets/category.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StoreContext from "../../common/StoreContext";
import api from "../../lib/api";
import ReCAPTCHA from "react-google-recaptcha";

const steps = [
  "Your Company Information",
  "Project Information",
  "Technology Information",
];

const Contactus = () => {
  const [contactMethods, setContactMethods] = useState({
    phone: false,
    email: true,
  });
  const schema1 = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    companyName: Yup.string().required("Company name is required"),
    source: Yup.string().required("Source  is required"),
    email:
      contactMethods.email === true
        ? Yup.string().email("Invalid email").required("Email is required")
        : null,
    phone:
      contactMethods.phone === true
        ? Yup.string()
            .required("Phone number is required")
            .min(10, "Please enter 10 digits ")
        : null,
  });

  const schema2 = Yup.object().shape({
    // projectTitle: Yup.string().required('Message is required'),
    projectDescription: Yup.string().required(
      "Project descripition is required"
    ),
    // projectGoal: Yup.string().required('Target audiance is required'),
    budget: Yup.number().typeError().required("Budget is required"),
  });

  const schema3 = Yup.object().shape({
    // softwareType: Yup.array().min(1, "Required"),
  });
  const { openToast } = useContext(StoreContext);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [contactMethodsApi, setContactMethodsApi] = useState(0);

  const softwareOptions = [
    "Software Architecture",
    "Machine Learning & AI",
    "Data Security Consultancy",
    "Mobile Application",
    "Web Application",
    "UI/UX",
    "IOT",
  ];
  const [softwareType, setSoftwareType] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema1),
  });

  const secondStep = useForm({
    resolver: yupResolver(schema2),
  });
  const thirdStep = useForm({
    resolver: yupResolver(schema3),
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAdd = async (values) => {
    if (!recaptchaValue) {
      openToast("error", "Please complete the reCAPTCHA.");
      return;
    }

    const method =
      contactMethods.phone && contactMethods.email
        ? "both"
        : contactMethods.phone
        ? "phone"
        : contactMethods.email
        ? "email"
        : "";
    try {
      const response = await api.post("v1/auth/website-lead", {
        recaptcha: recaptchaValue,
        contactMethods: method,
        name: watch("name"),
        companyName: watch("companyName"),
        email: watch("email"),
        phone: watch("phone"),
        source: watch("source"),

        targetAudience: secondStep.watch("projectGoal"),
        projectName: secondStep.watch("projectTitle"),
        projectDescription: secondStep.watch("projectDescription"),
        budget: secondStep.watch("budget"),
        softwareType: softwareType,
      });
      openToast("success", response.data.message);
      setActiveStep(0);
      reset({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        source: "",
      });
      secondStep.reset({
        projectTitle: "",
        projectDescription: "",
        projectGoal: "",
      });
      setContactMethods({});
      softwareType([]);
      setRecaptchaValue(null); // Reset reCAPTCHA
    } catch (error) {
      openToast("error", error.response.data.message);
    }
  };
  // const handleSoftwareTypeChange = (event) => {
  //   setSoftwareType({
  //     ...softwareType,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
  const handleSoftwareTypeChange = (event) => {
    const { name, checked } = event.target;
    setSoftwareType((prevState) =>
      checked
        ? [...prevState, name]
        : prevState.filter((option) => option !== name)
    );
  };
  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const onSubmit = (data) => {
    if (activeStep === 2) {
      // if (activeStep === steps.length - 1) {
      handleAdd(data)();
    } else {
      handleNext();
    }
  };

  const handleContactMethodChange = (event) => {
    setContactMethods({
      ...contactMethods,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Grid container spacing={0} sx={{ position: "relative" }}>
        <Box sx={{ height: { md: 30, sm: 10 } }}></Box>

        <Typography
          sx={{
            fontWeight: "100",
            textAlign: "center",
            fontSize: { md: 48, xs: 30 },
            fontFamily: "poppins",
            //   lineHeight: "67.2px",
            mb: 1,
            mx: "auto",
          }}
        >
          {"Connect" + " "}
          <span
            style={{
              fontWeight: "400",
              // fontSize: { md: 48, xs: 30 },
              fontFamily: "poppins",
              // lineHeight: "67.2px",
            }}
          >
            with us{" "}
          </span>
        </Typography>
        <Box
          component="img"
          src={decor7}
          alt="Bottom left image"
          sx={{
            position: "absolute",
            top: 10,
            right: 0,
            height: "auto",
            width: {
              xs: "0px",
              md: "75%",
            },
            maxWidth: {
              // md: "calc(100% - 70px)", // Adjust this value as necessary to ensure it stays within the black and blue box
            },
          }}
        />
        <Grid
          item
          xs={12}
          md={8}
          sx={{ backgroundColor: "#1F1F1F", p: 6, pb: 25 }}
        >
          <Box
            component="img"
            src={SignupBottomLeft}
            alt="Bottom left image"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "auto",
              width: {
                xs: "0px",
                md: "20%",
              },
            }}
          />
          <Typography
            paragraph
            width={"100%"}
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Poppins",
              color: "#ffff",
              mb: 4,
            }}
          >
            Please fill in the form with your project details, and we'll arrange
            a free consultation call to discuss your needs and provide a quote.
          </Typography>
          {/* Stepper */}
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    color: "#fff",
                    "& .MuiStepLabel-label": {
                      color: "#fff !important", // Ensure high specificity
                      fontFamily: "poppins !important",
                      fontSize: "1rem !important",
                      fontWeight: "300 !important",
                    },
                    "& .Mui-completed .MuiStepLabel-label": {
                      color: "#fff !important",
                      fontFamily: "poppins !important",
                      fontSize: "1rem !important",
                      fontWeight: "300 !important",
                    },
                    "& .Mui-active .MuiStepLabel-label": {
                      color: "#fff !important",
                      fontFamily: "poppins !important",
                      fontSize: "1rem !important",
                      fontWeight: "300 !important",
                    },
                    "& .css-2fz61h-MuiStepLabel-label.Mui-active": {
                      color: "#fff !important",
                      fontFamily: "poppins !important",
                      fontSize: "1rem !important",
                      fontWeight: "300 !important",
                    },
                    "& .css-2fz61h-MuiStepLabel-label.Mui-completed": {
                      color: "#fff !important",
                      fontFamily: "poppins !important",
                      fontSize: "1rem !important",
                      fontWeight: "300 !important",
                    },
                  }}
                >
                  {label}
                </StepLabel>
                <StepContent>
                  {index === 0 && (
                    <>
                      <TextField
                        {...register("companyName")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{
                                position: "absolute",
                                top: "20px",
                                left: "10px",
                              }}
                            >
                              <img src={category} alt="Company name" />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Your Company Name"
                        fullWidth
                        sx={{
                          backgroundColor: "#303030",
                          mb: 1,
                          opacity: "0.6",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "0px",
                            color: "white",
                            fontFamily: "poppins",
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                            paddingTop: "5px",
                            paddingLeft: "40px",
                            height: "35px",
                          },
                        }}
                        error={!!errors.companyName}
                        helperText={
                          errors.companyName ? errors?.companyName?.message : ""
                        }
                      />
                      <TextField
                        {...register("name")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{
                                position: "absolute",
                                top: "20px",
                                left: "10px",
                              }}
                            >
                              <img src={userSignup} alt="user signup" />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Your Name"
                        fullWidth
                        sx={{
                          backgroundColor: "#303030",
                          opacity: "0.6",
                          mb: 1,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "0px",
                            color: "white",
                            fontFamily: "poppins",
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                            paddingTop: "5px",
                            paddingLeft: "40px",
                            height: "35px",
                          },
                        }}
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ""}
                      />
                      {/* ---------- */}
                      <Box sx={{ borderBottom: "1px solid grey", mb: 2 }}>
                        <Typography
                          paragraph
                          width={"100%"}
                          sx={{
                            fontSize: "1rem",
                            fontFamily: "Poppins",
                            color: "#ffff",
                            mt: 4,
                            mb: 1,
                          }}
                        >
                          How did you hear about us?
                        </Typography>
                      </Box>
                      <FormControl fullWidth sx={{ mb: 1 }}>
                        {/* <InputLabel
                          sx={{
                            color: 'white',
                            fontFamily: 'poppins',
                            opacity: 0.6,
                          }}
                        >
                          Your Company Source
                        </InputLabel> */}
                        <Select
                          {...register("source")}
                          value={watch("source")}
                          onChange={(e) => {
                            setValue("source", e.target.value);
                          }}
                          startAdornment={
                            <InputAdornment
                              position="start"
                              sx={{
                                position: "absolute",
                                // top: "20px",
                                left: "10px",
                              }}
                            >
                              <img src={category} alt="Company source" />
                            </InputAdornment>
                          }
                          displayEmpty
                          // inputProps={{ 'aria-label': 'Without label' }}
                          fullWidth
                          sx={{
                            height: "45px",
                            borderRadius: 0,
                            backgroundColor: "#303030",
                            opacity: "0.6",
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "0px",
                              color: "white",
                              fontFamily: "poppins",
                            },
                            "& .MuiInputBase-input": {
                              color: "white",
                              // paddingTop: "10px",
                              paddingLeft: "30px",
                              paddingBottom: "23x",
                              minHeighteight: "20px",
                            },
                          }}
                          error={!!errors.source}
                        >
                          <MenuItem value="none" disabled>
                            <em>Select Source</em>
                          </MenuItem>
                          <MenuItem value="search-engine">
                            Search Engine (e.g., Google)
                          </MenuItem>
                          <MenuItem value="social-media">
                            Social Media (e.g., Facebook, Twitter, Instagram)
                          </MenuItem>
                          <MenuItem value="word">Word of Mouth</MenuItem>
                          <MenuItem value="advert">
                            Google/Online Advertisement
                          </MenuItem>
                          <MenuItem value="referral">
                            Customer Referral
                          </MenuItem>
                        </Select>
                        {/* {errors.source && (
                          <TextField
                            error
                            helperText={errors?.source?.message}
                            sx={{
                              display: 'none',
                            }}
                          />
                        )} */}
                      </FormControl>
                      <Box sx={{ borderBottom: "1px solid grey", mb: 2 }}>
                        <Typography
                          paragraph
                          width={"100%"}
                          sx={{
                            fontSize: "1rem",
                            fontFamily: "Poppins",
                            color: "#ffff",
                            mt: 4,
                            mb: 1,
                          }}
                        >
                          How should we contact you?
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={contactMethods.phone}
                              onChange={handleContactMethodChange}
                              name="phone"
                              sx={{ color: "#1565c0" }}
                            />
                          }
                          label={
                            <Typography sx={{ color: "#ffff" }}>
                              Phone
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={contactMethods.email}
                              onChange={handleContactMethodChange}
                              name="email"
                              sx={{ color: "#1565c0" }}
                            />
                          }
                          label={
                            <Typography sx={{ color: "#ffff" }}>
                              Email
                            </Typography>
                          }
                        />
                      </Box>
                      {!Object.values(contactMethods).some(
                        (value) => value === true
                      ) && (
                        <Box
                          sx={{ backgroundColor: "#303030", opacity: "0.6" }}
                        >
                          <Typography
                            sx={{
                              color: "#d32f2f",
                              fontFamily: "Poppins",
                              fontWeight: 600,
                              fontSize: "1rem",
                              lineHeight: "1.66",
                              textAlign: "left",
                              paddingTop: "3px",
                              marginRight: 0,
                              marginBottom: "10px",
                              marginLeft: 0,
                              marginTop: 0,
                            }}
                          >
                            Please select alteast one
                          </Typography>
                        </Box>
                      )}

                      {contactMethods.phone && (
                        <>
                          <Controller
                            {...register("phone")}
                            control={control}
                            render={({ field }) => (
                              <PhoneInput
                                {...field}
                                country="gb"
                                fullWidth
                                onChange={(phone) => field.onChange(phone)}
                                inputStyle={{
                                  width: "100%",
                                  height: "45px",
                                  paddingLeft: "50px", // Adjust this based on flag icon width to align text
                                  lineHeight: "45px",
                                  borderRadius: "0px",
                                  color: "white",
                                  backgroundColor: "#303030",
                                  fontFamily: "Poppins",
                                  opacity: "0.6",
                                  borderTop: "none",
                                  borderLeft: "none",
                                  borderRight: "none",
                                  borderBottom: errors?.phone
                                    ? "1px solid #d32f2f"
                                    : "transparent",
                                  // marginBottom: errors?.phone ? "0px" : "10px",
                                  boxShadow: "none",
                                }}
                                style={{}}
                                onFocus={(e) => {
                                  e.target.style.borderTop = "none";
                                  e.target.style.borderLeft = "none";
                                  e.target.style.borderRight = "none";
                                  e.target.style.borderBottom = errors.phone
                                    ? "2px solid #d32f2f"
                                    : "2px solid #1a73e8";
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderBottom = errors.phone
                                    ? "1px solid #d32f2f"
                                    : "transparent";
                                }}
                                dropdownStyle={{
                                  backgroundColor: "white",
                                  color: "black",
                                  borderRadius: "0px",
                                  zIndex: 1200, // Ensure the dropdown is above other elements
                                }}
                                specialLabel=""
                              />
                            )}
                          />
                          {errors.phone && (
                            <Box
                              sx={{
                                backgroundColor: "#303030",
                                opacity: "0.6",
                              }}
                            >
                              <Typography
                                color="error"
                                sx={{
                                  color: "#d32f2f",
                                  fontFamily: "Poppins",
                                  fontWeight: 400,
                                  fontSize: "0.75rem",
                                  lineHeight: "1.66",
                                  textAlign: "left",
                                  paddingTop: "3px",
                                  marginRight: 0,
                                  marginBottom: "10px",
                                  marginLeft: 0,
                                  marginTop: 0,
                                }}
                              >
                                {errors.phone.message}
                              </Typography>
                            </Box>
                          )}
                        </>
                      )}
                      {contactMethods.email && (
                        <TextField
                          {...register("email")}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{
                                  position: "absolute",
                                  // top: "20px",
                                  left: "10px",
                                }}
                              >
                                <img src={smsTracking} alt="Email address" />
                              </InputAdornment>
                            ),
                          }}
                          placeholder="Your Email Address"
                          fullWidth
                          sx={{
                            backgroundColor: "#303030",
                            my: 1.5,
                            opacity: "0.6",
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "0px",
                              color: "white",
                              fontFamily: "poppins",
                            },
                            "& .MuiInputBase-input": {
                              color: "white",
                              paddingTop: "5px",
                              paddingLeft: "40px",
                              height: "35px",
                            },
                          }}
                          error={!!errors.email}
                          helperText={errors.email ? errors.email.message : ""}
                        />
                      )}
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <TextField
                        {...secondStep.register("projectTitle")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{
                                position: "absolute",
                                top: "20px",
                                left: "10px",
                              }}
                            >
                              {/* <img src={userSignup} alt="user signup" />  */}
                              <Box
                                component="img"
                                src={msgText}
                                alt="project title"
                                sx={{
                                  height: "24px",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Project Name"
                        fullWidth
                        sx={{
                          backgroundColor: "#303030",
                          opacity: "0.6",
                          mb: 1,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "0px",
                            color: "white",
                            fontFamily: "poppins",
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                            paddingTop: "5px",
                            paddingLeft: "40px",
                            height: "35px",
                          },
                        }}
                        multiline
                        rows={3}
                        error={!!secondStep?.formState.errors.projectTitle}
                        helperText={
                          secondStep?.formState.errors.projectTitle
                            ? secondStep?.formState.errors.projectTitle.message
                            : ""
                        }
                        // helperText={secondStep?.formState.errors.projectTitle?.message}
                      />
                      <TextField
                        {...secondStep.register("budget")}
                        type="number"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{
                                position: "absolute",
                                // top: "20px",
                                left: "10px",
                              }}
                            >
                              <Box
                                component="img"
                                src={msgText}
                                alt="goal"
                                sx={{
                                  height: "24px",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Project Buget"
                        fullWidth
                        sx={{
                          backgroundColor: "#303030",
                          opacity: "0.6",
                          mb: 1,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "0px",
                            color: "white",
                            fontFamily: "Poppins",
                            alignItems: "flex-start",
                            paddingTop: "32px",
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "40px",
                          },
                        }}
                        error={!!secondStep?.formState.errors.budget}
                        helperText={
                          secondStep?.formState.errors.budget
                            ? "Budget is required"
                            : ""
                        }
                      />
                      <TextField
                        {...secondStep.register("projectGoal")}
                        multiline
                        rows={3}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{
                                position: "absolute",
                                top: "20px",
                                left: "10px",
                              }}
                            >
                              <Box
                                component="img"
                                src={msgText}
                                alt="goal"
                                sx={{
                                  height: "24px",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Target Audience"
                        fullWidth
                        sx={{
                          backgroundColor: "#303030",
                          opacity: "0.6",
                          mb: 1,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "0px",
                            color: "white",
                            fontFamily: "Poppins",
                            alignItems: "flex-start",
                            paddingTop: "32px",
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                            paddingTop: "5px",
                            paddingLeft: "40px",
                          },
                        }}
                        error={!!secondStep?.formState.errors.projectGoal}
                        helperText={
                          secondStep?.formState.errors.projectGoal
                            ? secondStep?.formState.errors.projectGoal.message
                            : ""
                        }
                      />
                      <TextField
                        {...secondStep.register("projectDescription")}
                        InputProps={{
                          inputComponent: 'textarea',
                          inputProps: {
                            minRows: 6,
                            maxRows: Infinity,
                          },
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{
                                position: "absolute",
                                top: "20px",
                                left: "10px",
                              }}
                            >
                              <Box
                                component="img"
                                src={msgText}
                                alt="projectDescription"
                                sx={{
                                  height: "24px",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Project Description"
                        fullWidth
                        sx={{
                          backgroundColor: "#303030",
                          opacity: "0.6",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "0px",
                            color: "white",
                            fontFamily: "Poppins",
                            alignItems: "flex-start",
                            paddingTop: "32px",
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                            paddingTop: "8px",
                            paddingLeft: "40px",
                          },
                        }}
                        error={
                          !!secondStep?.formState.errors.projectDescription
                        }
                        helperText={
                          secondStep?.formState.errors.projectDescription
                            ? secondStep?.formState.errors.projectDescription
                                .message
                            : ""
                        }
                      />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <Box sx={{ borderBottom: "1px solid grey", mb: 2 }}>
                        <Typography
                          paragraph
                          width={"100%"}
                          sx={{
                            fontSize: "1rem",
                            fontFamily: "Poppins",
                            color: "#ffff",
                            mt: 2,
                            mb: 1,
                          }}
                        >
                          What type of software do you want to build?
                        </Typography>
                      </Box>
                      <Grid container spacing={2}>
                        {softwareOptions.map((option) => (
                          <Grid item xs={12} md={6} key={option}>
                            <FormControlLabel
                              {...thirdStep.register("softwareType")}
                              control={
                                <Checkbox
                                  // checked={softwareType[option]}
                                  checked={softwareType?.includes(option)}
                                  onChange={handleSoftwareTypeChange}
                                  name={option}
                                  sx={{ color: "#1565c0" }}
                                />
                              }
                              label={
                                <Typography sx={{ color: "#ffff" }}>
                                  {option}
                                </Typography>
                              }
                            />
                          </Grid>
                        ))}
                        {/* {softwareOptions.map(option => (
                          <Grid item xs={12} md={6} key={option}>
                            <FormControl error={!!thirdStep.formState.errors.softwareType}>
                              <FormControlLabel
                                control={
                                  <Controller
                                   {...thirdStep.register("softwareType")}
                                    control={control}
                                    render={({ field }) => (
                                      <Checkbox
                                        {...field}
                                        checked={field.value?.includes(option) || false}
                                        onChange={(e) => {
                                          field.onChange(
                                            e.target.checked
                                              ? [...(field.value || []), option]
                                              : (field.value || []).filter(value => value !== option)
                                          );
                                          handleSoftwareTypeChange(e);
                                        }}
                                        name={option}
                                        sx={{ color: "#1565c0" }}
                                      />
                                    )}
                                  />
                                }
                                label={<Typography sx={{ color: "#ffff" }}>{option}</Typography>}
                              />
                              {thirdStep.formState.errors.softwareType && (
                                <FormHelperText>{thirdStep.formState.errors.softwareType.message}</FormHelperText>
                              )}
                            </FormControl>
                          </Grid>
                        ))} */}
                      </Grid>
                      <Box
                        sx={{
                          display: "flex",
                          flexGrow: "1",
                          justifyContent: "flex-start",
                          mt: 2,
                        }}
                      >
                        <ReCAPTCHA
                          sitekey="6Leogv0pAAAAAB3fEmqj88P-Q4pDnWYNAaZ7iliN" // Replace with your actual site key
                          onChange={onRecaptchaChange}
                        />
                      </Box>
                    </>
                  )}
                  <Box sx={{ my: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={() => {
                          if (index === 0) {
                            handleSubmit(onSubmit)();
                          } else if (index === 1) {
                            secondStep.handleSubmit(onSubmit)();
                          } else {
                            thirdStep.handleSubmit(onSubmit)();
                          }
                        }}
                        disabled={
                          !Object.values(contactMethods).some(
                            (value) => value === true
                          )
                        }
                        sx={{
                          mt: 1,
                          mr: 1,
                          borderRadius: 0,
                          px: 3,
                          fontFamily: "poppins",
                          ":disabled": {
                            backgroundColor: "grey",
                            color: "black",
                          },
                        }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                      {!index == 0 && (
                        <Button
                          disabled={index === 0}
                          // variant="contained"
                          onClick={handleBack}
                          sx={{
                            mt: 1,
                            mr: 1,
                            borderRadius: 0,
                            ":disabled": {
                              color: "lightgray",
                            },
                          }}
                        >
                          Back
                        </Button>
                      )}
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              background:
                "linear-gradient(5.72deg, rgba(0, 252, 146, 0.25) -65.45%, #00A1FF 38.84%)",
              pt: 6,
              pb: 4.5,
              pl: 3,
              height: "100%",
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#ffff",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#ffff",
                  fontSize: "2rem",
                  fontWeight: "100",
                }}
              >
                Have questions ?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#ffff",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              >
                Get in touch with
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#ffff",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              >
                us today!
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contactus;