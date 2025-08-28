import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, Link as RouterLink, useLocation } from "react-router-dom"; // Import useLocation
import { Divider, ListItemText, ListItemIcon, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import logoImg from "../../assets/mainlogo.png";

const Logo = styled("img")({
  width: "170px",
});

const NestedMenuItem = ({ parent, onClose, navigate }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem
        onClick={handleOpen}
        sx={{
          fontSize: "1rem",
          py: 1.5,
          "&:hover": {
            background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
            color: "#fff",
          },
        }}
      >
        <ListItemText>{parent.name}</ListItemText>
        <ChevronRightIcon />
      </MenuItem>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "0",
            minWidth: "300px",
            maxHeight: '70vh',
            overflowY: 'auto',
            "&::-webkit-scrollbar": { width: "5px", },
            "&::-webkit-scrollbar-track": { background: "transparent", },
            "&::-webkit-scrollbar-thumb": { background: "rgba(255, 255, 255, 0.15)", borderRadius: "10px", },
            "&::-webkit-scrollbar-thumb:hover": { background: "rgba(255, 255, 255, 0.3)", },
            "scrollbar-width": "thin",
            "scrollbar-color": "rgba(255, 255, 255, 0.15) transparent",
            "-ms-overflow-style": "scrollbar",
          },
        }}
      >
        {parent.nestedItems.map((item) => (
          <MenuItem
            key={item}
            onClick={() => {
              navigate('/#technologies'); // Assuming all nested items navigate to #technologies for simplicity
              onClose(); // Close parent menu
              handleClose(); // Close nested menu
            }}
            sx={{
              fontSize: "1rem",
              py: 1.5,
              "&:hover": {
                background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
              },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation(); // Initialize useLocation
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState({});

  // Check if the current path is /landing for the "Contact Us" button
  const isContactPageActive = location.pathname === '/landing';

  const handleMenuOpen = (menuName) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuName);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
    setOpenMobileSubMenu({});
  };
  const handleMobileSubMenuToggle = (name) => {
    setOpenMobileSubMenu(prevState => ({ ...prevState, [name]: !prevState[name], }));
  };

  const menuItems = [
    { name: "Home", link: "/", icon: <HomeOutlinedIcon /> },
    {
      name: "Services", path: "services", icon: <WbIncandescentOutlinedIcon />, subMenu: [
        { name: "Machine Learning & AI", link: "/#expertise", icon: <PsychologyOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Data Science Solutions", link: "/#expertise", icon: <DataObjectOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Cloud Services", link: "/#expertise", icon: <CloudOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Web Development", link: "/#expertise", icon: <WebOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "API Integration", link: "/#expertise", icon: <ApiOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Managed Services", link: "/#expertise", icon: <ManageAccountsOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "IoT Development", link: "/#expertise", icon: <SatelliteAltOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Mobile App Development", link: "/#expertise", icon: <PhoneAndroidOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Software Development", link: "/#expertise", icon: <CodeTwoToneIcon sx={{ color: "#fff" }} /> },
        { name: "Software Quality Engineering", link: "/#expertise", icon: <Search sx={{ color: "#fff" }} /> },
        { name: "Dedicated Teams", link: "/#expertise", icon: <PeopleOutlineOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "UI/UX Design", link: "/#expertise", icon: <DesignServicesOutlinedIcon sx={{ color: "#fff" }} /> },
      ],
    },
    {
      name: "Solutions", path: "solutions", icon: <DnsOutlinedIcon />, subMenu: [
        { name: "e-Learning", link: "/#solution", icon: <SchoolOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Payment Gateway", link: "/#solution", icon: <PaymentOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Healthcare", link: "/#solution", icon: <LocalHospitalOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Automobile", link: "/#solution", icon: <DirectionsCarFilledOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Logistics / Supply Chain", link: "/#solution", icon: <LocalShippingOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "CRM & Forms", link: "/#solution", icon: <DnsOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Location Based Apps", link: "/#solution", icon: <LocationOnOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Booking System", link: "/#solution", icon: <EventOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Real Estate", link: "/#solution", icon: <HouseOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Equine Software", link: "/#solution", icon: <SportsScoreOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Social Media Platforms", link: "/#solution", icon: <PeopleOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Ecommerce & Marketplace", link: "/#solution", icon: <ShoppingCartOutlinedIcon sx={{ color: "#fff" }} /> },
      ],
    },
    {
      name: "Technologies", path: "technologies", icon: <CodeOutlinedIcon />, subMenu: [
        {
          name: "Programming Languages", icon: <CodeOutlinedIcon sx={{ color: "#fff" }} />, nestedItems: ["Java", "Python", "R Language", "Dart", "C++", ".NET (C#)", "JavaScript", "Ruby", "PHP", "Go", "Swift"],
        },
        {
          name: "Framework", icon: <WebOutlinedIcon sx={{ color: "#fff" }} />, nestedItems: ["Spring Framework", "ReactJS", "AngularJS", "NodeJS", "Django", "Flask", "Ruby on Rails", "Laravel", "VueJS"],
        },
        {
          name: "NoSQL Database", icon: <StorageOutlinedIcon sx={{ color: "#fff" }} />, nestedItems: ["MongoDB", "Apache Cassandra", "Microsoft Cosmo DB", "CouchDB", "Redis", "DynamoDB"],
        },
        {
          name: "RDBMS", icon: <DataUsageOutlinedIcon sx={{ color: "#fff" }} />, nestedItems: ["Oracle", "PostgreSQL", "MySQL", "MariaDB", "MS SQL Server", "SQLite"],
        },
        {
          name: "Mobile Application", icon: <PhoneAndroidOutlinedIcon sx={{ color: "#fff" }} />, nestedItems: ["Flutter", "IOS Native", "Android Native", "React Native", "Xamarin", "Ionic"],
        },
        {
          name: "APIs", icon: <ApiOutlinedIcon sx={{ color: "#fff" }} />, nestedItems: ["REST APIs", "SOAP APIs", "GraphQL APIs", "gRPC"],
        },
        {
          name: "Infrastructure", icon: <CloudQueueOutlinedIcon sx={{ color: "#fff" }} />, nestedItems: ["Microsoft Azure Cloud", "Amazon Cloud", "Google Cloud", "Kubernetes", "Apache Kafka", "Docker", "Terraform", "Ansible", "Jenkins"],
        },
      ],
    },
    { name: "Case Studies", link: "/#case-study", icon: <HandshakeOutlinedIcon /> },
    { name: "Company", link: "/#aboutus", icon: <GroupsOutlinedIcon /> },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        background: `
          repeating-linear-gradient(
            180deg,
            #FFF7EE 0%,
            #FFFFFF 50%,
            #FFF7EE 100%
          )
        `,
        backgroundSize: "100% 200vh",
        color: "#000",
        boxShadow: "none",
        px: { xs: 2, md: 4, lg: 10 },
        py: 2,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "flex-start", md: "space-between" },
          alignItems: { xs: "stretch", md: "center" },
          gap: { xs: 0, md: 2, lg: 4 },
          flexWrap: "wrap",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box component={RouterLink} to="/">
            <Logo src={logoImg} alt="Twelve Springs" />
          </Box>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "center",
            gap: { md: 1, lg: 2 },
            alignItems: "center",
            minWidth: 0,
          }}
          onMouseLeave={handleMenuClose}
        >
          {menuItems.map((item) => {
            if (item.subMenu) {
              return (
                <Box key={item.name}>
                  <Button
                    onMouseEnter={handleMenuOpen(item.name)}
                    onClick={handleMenuOpen(item.name)}
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      minWidth: "auto",
                      px: 2,
                      "&:hover": {
                        background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                        color: "#fff",
                      },
                    }}
                    endIcon={<ExpandMoreIcon />}
                  >
                    {item.name}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenu === item.name}
                    onClose={handleMenuClose}
                    MenuListProps={{ onMouseEnter: () => setOpenMenu(item.name), onMouseLeave: handleMenuClose, }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "#000",
                        color: "#fff",
                        borderRadius: 0,
                        minWidth: "300px",
                        maxHeight: '70vh',
                        overflowY: 'auto',
                        "&::-webkit-scrollbar": { width: "5px", },
                        "&::-webkit-scrollbar-track": { background: "transparent", },
                        "&::-webkit-scrollbar-thumb": { background: "rgba(255, 255, 255, 0.15)", borderRadius: "10px", },
                        "&::-webkit-scrollbar-thumb:hover": { background: "rgba(255, 255, 255, 0.3)", },
                        "scrollbar-width": "thin",
                        "scrollbar-color": "rgba(255, 255, 255, 0.15) transparent",
                        "-ms-overflow-style": "scrollbar",
                      },
                    }}
                  >
                    {item.name === "Technologies" ? (item.subMenu.map((subItem) => (
                      <NestedMenuItem
                        key={subItem.name}
                        parent={subItem}
                        onClose={handleMenuClose}
                        navigate={navigate}
                      />
                    ))) : (item.subMenu.map((subItem) => (
                      <MenuItem
                        key={subItem.name}
                        onClick={() => { navigate(subItem.link); handleMenuClose() }}
                        sx={{
                          fontSize: "1rem",
                          py: 1.5,
                          "&:hover": {
                            background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                          },
                        }}
                      >
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText>{subItem.name}</ListItemText>
                      </MenuItem>
                    )))}
                  </Menu>
                </Box>
              );
            }
            return (
              <Button
                key={item.name}
                component="a"
                href={item.link}
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  minWidth: "auto",
                  px: 2,
                  "&:hover": {
                    background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                    color: "#fff",
                  },
                }}
              >
                {item.name}
              </Button>
            );
          })}
        </Box>

        {/* Desktop Contact Us Button */}
        {!isMobile && (
          <Button
            onClick={() => navigate("/landing")}
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 3,
              py: 1,
              fontWeight: 400,
              fontSize: { md: "8px", lg: "14px" },
              fontFamily: "Poppins",
              lineHeight: "20px",
              textTransform: "capitalize",
              // Apply gradient if on the landing page, else black background
              background: isContactPageActive ? "linear-gradient(120deg, #00cbcc, #00bbdf)" : "black",
              color: "white",
              flexShrink: 0,
              "&:hover": {
                background: "linear-gradient(120deg, #00cbcc, #00bbdf)", // Always gradient on hover
                // If already active, a subtle visual change for hover
                opacity: isContactPageActive ? 0.9 : 1, 
              },
            }}
          >
            Talk to Architect
          </Button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <Menu
            anchorEl={mobileAnchorEl}
            open={Boolean(mobileAnchorEl)}
            onClose={handleMobileMenuClose}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "0",
                maxHeight: '70vh',
                overflowY: 'auto',
                minWidth: '250px',
                "&::-webkit-scrollbar": { width: "5px", },
                "&::-webkit-scrollbar-track": { background: "transparent", },
                "&::-webkit-scrollbar-thumb": { background: "rgba(255, 255, 255, 0.15)", borderRadius: "10px", },
                "&::-webkit-scrollbar-thumb:hover": { background: "rgba(255, 255, 255, 0.3)", },
                "scrollbar-width": "thin",
                "scrollbar-color": "rgba(255, 255, 255, 0.15) transparent",
                "-ms-overflow-style": "scrollbar",
              },
            }}
          >
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.subMenu ? (
                  <Box>
                    <MenuItem
                      onClick={() => handleMobileSubMenuToggle(item.name)}
                      sx={{
                        fontSize: "1.1rem",
                        py: 1.5,
                        "&:hover": {
                          background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                        },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                      </Box>
                      {openMobileSubMenu[item.name] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                    </MenuItem>
                    <Collapse in={openMobileSubMenu[item.name]}>
                      <Box sx={{ pl: 4 }}>
                        {item.name === "Technologies" ? (item.subMenu.map((subItem) => (
                          <Box key={subItem.name}>
                            <MenuItem
                              onClick={() => handleMobileSubMenuToggle(subItem.name)}
                              sx={{
                                fontSize: "1rem",
                                py: 1.5,
                                "&:hover": {
                                  background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                                },
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItemIcon>{subItem.icon}</ListItemIcon>
                                <ListItemText>{subItem.name}</ListItemText>
                              </Box>
                              {openMobileSubMenu[subItem.name] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                            </MenuItem>
                            <Collapse in={openMobileSubMenu[subItem.name]}>
                              <Box sx={{ pl: 6 }}>
                                {subItem.nestedItems.map((nestedItem) => (
                                  <MenuItem
                                    key={nestedItem}
                                    onClick={() => { navigate('/technologies'); handleMobileMenuClose() }} // Assuming all nested items navigate to /technologies
                                    sx={{
                                      "&:hover": {
                                        background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                                      },
                                    }}
                                  >
                                    <ListItemText>{nestedItem}</ListItemText>
                                  </MenuItem>
                                ))}
                              </Box>
                            </Collapse>
                          </Box>
                        ))) : (item.subMenu.map((subItem) => (
                          <MenuItem
                            key={subItem.name}
                            onClick={() => { navigate(subItem.link); handleMobileMenuClose() }}
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              "&:hover": {
                                background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                              },
                            }}
                          >
                            <ListItemIcon>{subItem.icon}</ListItemIcon>
                            <ListItemText>{subItem.name}</ListItemText>
                          </MenuItem>
                        )))}
                      </Box>
                    </Collapse>
                  </Box>
                ) : (
                  <MenuItem
                    onClick={() => { navigate(item.link); handleMobileMenuClose() }}
                    sx={{
                      fontSize: "1.1rem",
                      py: 1.5,
                      "&:hover": {
                        background: "linear-gradient(120deg, #00cbcc, #00bbdf)",
                      },
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </MenuItem>
                )}
                {item.name === "Company" && <Divider />}
              </React.Fragment>
            ))}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1, p: 2 }}>
              <Button
                onClick={() => { navigate("/landing"); handleMobileMenuClose() }}
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 0,
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  fontFamily: "Poppins",
                  lineHeight: "24px",
                  textTransform: "capitalize",
                  // Apply gradient if on the landing page, else black background
                  background: isContactPageActive ? "linear-gradient(120deg, #00cbcc, #00bbdf)" : "black",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(120deg, #00cbcc, #00bbdf)", // Always gradient on hover
                    opacity: isContactPageActive ? 0.9 : 1,
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
