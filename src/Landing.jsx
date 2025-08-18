import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Button,
  IconButton,
  Avatar,
  Select,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "../src/assets/linkedin-outline.svg";
import BrowserIcon from "../src/assets/browser.svg";
import Logo from "../src/assets/logo-TS.svg";
import decor from "../src/assets/decor-TS.svg";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import ReCAPTCHA from "react-google-recaptcha";
import StoreContext from "./common/StoreContext";
import api from "./lib/api";

const Landing = () => {
  const [contactMethod, setContactMethod] = useState("");

  const { openToast } = useContext(StoreContext);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

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
        : null,

    // Email field validation
    email:
      contactMethod === "Email" || contactMethod === "Both"
        ? yup.string().email("Not a Valid Email").required("Email is required")
        : null,
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
    // console.log(recaptchaValue);
    try {
      const { data, status } = await api.post("v1/auth/website-lead", {
        ...e,
        recaptcha: recaptchaValue,
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
    } catch (error) {
      openToast("error", error.response.data.message);
    }
  };

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <Box>
      <Box
        component="img"
        src={decor}
        alt="bottom left image"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "auto",
          width: {
            xs: "0px",
            md: "300px",
          },
        }}
      />
      <Grid
        container
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(63.18deg, #34073D 0%, #145277 100%)",
        }}
      >
        {/* Left Section */}
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            //   alignItems: "center",
            justifyContent: "center",
            padding: 5,
            gap: 3,
          }}
        >
          <a href="https://www.twelvesprings.uk" target="_blank">
            <img src={Logo} style={{ scale: "1" }} />
          </a>{" "}
          <Typography
            variant="h4"
            fontWeight="bold"
            style={{ fontWeight: 200, fontSize: "64px", lineHeight: "67px" }}
          >
            Request <span style={{ fontWeight: 400 }}>Quote</span>
          </Typography>
          <Box>
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              Please fill in the form with your project details, and we'll
              arrange a free consultation call to discuss your needs and provide
              a quote.
            </Typography>
          </Box>
          <Box
            gap={1}
            display={{ xs: "none", sm: "flex" }}
            flexDirection={"column"}
          >
            <ContactInfoItem icon={EmailIcon} label="info@twelvesprings.uk" />
            <ContactInfoItem
              icon={LocationOnIcon}
              label="71-75 Shelton Street, Covent Garden, London, WC2H 9JQ"
            />
          </Box>
          <Box display={{ xs: "none", sm: "flex" }} mt={4} gap={2}>
            <Avatar sx={{ bgcolor: "white", width: 32, height: 32 }}>
              <a
                href="https://www.linkedin.com/company/twelve-springs-limited-london/?viewAsMember=true"
                target="_blank"
              >
                <img src={LinkedInIcon} style={{ scale: "0.45" }} />
              </a>
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "white",
                width: 32,
                height: 32,
              }}
            >
              <a href="https://www.twelvesprings.uk" target="_blank">
                <img src={BrowserIcon} style={{ scale: "0.65" }} />
              </a>
            </Avatar>
          </Box>
        </Grid>

        {/* Right Section - Form */}
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            my: { xs: 0, sm: 2 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            width={{ xs: "95%", sm: "90%", md: "80%" }}
            bgcolor="white"
            sx={{ borderRadius: "7px" }}
            boxShadow="0px 0px 20px 1px #0000004D"
          >
            <Box
              sx={{
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                backgroundColor: "#291640",
                p: 1.5,
              }}
            >
              {" "}
              <Typography
                variant="h6"
                fontWeight="500"
                textAlign={"center"}
                fontSize={"21px"}
                color={"#eee"}
              >
                Your Company Information
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                mt: 1,
                gap: 2,
                display: "flex",
                flexDirection: "column",
              }}
              px={4}
              py={2}
            >
              <CustomTextField
                label="Company Name*"
                name="companyName"
                control={control}
              />
              <CustomTextField
                label="Your Name*"
                name="name"
                control={control}
              />

              <Controller
                name="source"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <Typography
                      color={error ? "error" : "black"}
                      sx={{ fontWeight: 500, py: 0.5 }}
                    >
                      How Did You Hear About Us?*
                    </Typography>{" "}
                    <Select
                      {...field}
                      variant="outlined"
                      fullWidth
                      sx={{ height: "45px" }}
                      error={!!error}
                      onChange={(e) => {
                        setValue("source", e.target.value);
                        field.onChange(e);
                      }}
                      displayEmpty
                    >
                      <MenuItem value="none" disabled>
                        Please Select
                      </MenuItem>
                      <MenuItem value="search-engine">
                        Search Engine (e.g. Google)
                      </MenuItem>
                      <MenuItem value="social-media">
                        Social Media (e.g. Facebook, Twitter, Instagram)
                      </MenuItem>
                      <MenuItem value="word">Word of Mouth</MenuItem>
                      <MenuItem value="advert">
                        Google/Online Advertisement
                      </MenuItem>
                      <MenuItem value="referral">Customer Referral</MenuItem>
                    </Select>
                    {error && (
                      <Typography color="error" fontSize={"12px"} pt={0.5}>
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
                    <Typography
                      color={error ? "error" : "black"}
                      sx={{ fontWeight: 500, py: 0.5 }}
                    >
                      How Should We Contact You?*
                    </Typography>{" "}
                    <Select
                      {...field}
                      variant="outlined"
                      fullWidth
                      error={!!error}
                      sx={{ height: "45px" }}
                      onChange={(e) => {
                        field.onChange(e);

                        setValue("contactMethod", e.target.value);
                        setContactMethod(e.target.value);
                      }}
                      displayEmpty
                    >
                      <MenuItem value="none" disabled>
                        Please Select
                      </MenuItem>
                      <MenuItem value="Phone">Phone</MenuItem>
                      <MenuItem value="Email">Email</MenuItem>
                      <MenuItem value="Both">Both</MenuItem>
                    </Select>
                    {error && (
                      <Typography color="error" fontSize={"12px"} pt={0.5}>
                        {error.message}
                      </Typography>
                    )}
                  </div>
                )}
              />

              {watchContactMethod === "Phone" && (
                <PhoneFieldController
                  name="phone"
                  control={control}
                  label="Phone"
                />
              )}
              {watchContactMethod === "Email" && (
                <CustomTextField
                  label="Email*"
                  name="email"
                  control={control}
                />
              )}
              {watchContactMethod === "Both" && (
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <PhoneFieldController
                        name="phone"
                        control={control}
                        label="Phone"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        label="Email*"
                        name="email"
                        control={control}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}

              <CustomTextField
                label="Description*"
                name="projectDescription"
                control={control}
                multiline
                rows={4}
                placeholder="Tell us about your project.."
              />
              <Box
                sx={{
                  display: "flex",
                  flexGrow: "1",
                  justifyContent: "flex-start",
                  // mt: 2,
                }}
              >
                <ReCAPTCHA
                  sitekey="6Leogv0pAAAAAB3fEmqj88P-Q4pDnWYNAaZ7iliN" // Replace with your actual site key
                  onChange={onRecaptchaChange}
                />
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  duration={1000}
                  variant="contained"
                  sx={{
                    borderRadius: 0,
                    px: 3,
                    py: 1,
                    fontWeight: "400",
                    fontSize: { md: "10px", lg: "16px" },
                    fontFamily: "poppins",
                    lineHeight: "24px",
                    textTransform: "capitalize",
                    backgroundColor: "black",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Box
          sx={{
            color: "white",
            display: { xs: "flex", sm: "none" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
            gap: 2,
          }}
        >
          <Box
            gap={1}
            display={{ xs: "flex", sm: "none" }}
            flexDirection={"column"}
          >
            <ContactInfoItem icon={EmailIcon} label="info@twelvesprings.uk" />
            <ContactInfoItem
              icon={LocationOnIcon}
              label="71-75 Shelton Street, Covent Garden, London, WC2H 9JQ"
            />
          </Box>
          <Box display={{ xs: "flex", sm: "none" }} mt={4} gap={2}>
            <Avatar sx={{ bgcolor: "white", width: 32, height: 32 }}>
              <img src={LinkedInIcon} style={{ scale: "0.45" }} />
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "white",
                width: 32,
                height: 32,
              }}
            >
              <img src={BrowserIcon} style={{ scale: "0.65" }} />
            </Avatar>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

const ContactInfoItem = ({ icon: Icon, label }) => (
  <Box display="flex" alignItems="center" gap={2} mt={1}>
    <Avatar sx={{ bgcolor: "white", width: 32, height: 32 }}>
      <Icon sx={{ color: "black", scale: "0.8" }} />
    </Avatar>
    <Typography>{label}</Typography>
  </Box>
);

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
        <Typography
          color={error ? "error" : "black"}
          sx={{ fontWeight: 500, py: 0.5 }}
        >
          {label}
        </Typography>
        <TextField
          {...field}
          variant="outlined"
          fullWidth
          type={name === "phone" ? "number" : "text"}
          multiline={multiline}
          placeholder={placeholder}
          error={!!error}
          //   helperText={error ? error.message : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: name !== "projectDescription" && "45px",
            },
            "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
              {
                WebkitAppearance: "none",
                margin: 0,
              },
            "input[type=number]": {
              MozAppearance: "textfield",
            },
          }}
          {...props}
        />
        {error && (
          <Typography color="error" fontSize={"12px"} pt={0.5}>
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
          <Typography
            color={error ? "error" : "black"}
            sx={{ fontWeight: 500, py: 0.5 }}
          >
            {label}
          </Typography>
          <PhoneInput
            {...field}
            country="gb"
            onChange={field.onChange}
            value={field.value}
            inputStyle={{
              width: "100%",
              height: "45px",
              paddingLeft: "50px", // Adjust this based on flag icon width to align text
              lineHeight: "45px",
              borderRadius: 3,
              fontFamily: "Poppins",
              opacity: "0.6",
              border: error ? "1px solid #d32f2f" : "1px solid #9c9c9c",
              // marginBottom: errors?.phone ? "0px" : "10px",
              boxShadow: "none",
            }}
            specialLabel=""
          />
          {error && (
            <Typography color="error" fontSize={"12px"} pt={0.5}>
              {error.message}
            </Typography>
          )}
        </div>
      )}
    />
  );
}

export default Landing;