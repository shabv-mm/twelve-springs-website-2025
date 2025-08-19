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
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Divider, ListItemText, ListItemIcon } from "@mui/material";

// Import MUI Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";

import logoImg from "../../assets/mainlogo.png";
import { Search } from "@mui/icons-material";

const Logo = styled("img")({
  width: "170px",
});

// A new component for nested menus to handle the Technologies dropdown
const NestedMenuItem = ({ parent, subItems, onClose }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem onClick={handleOpen}>
        <ListItemText>{parent.name}</ListItemText>
        <ChevronRightIcon />
      </MenuItem>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "0",
            },
          }}
      >
        {parent.nestedItems.map((item) => (
          <MenuItem 
            key={item} 
            onClick={onClose}
            sx={{
                fontSize: "1rem",
                py: 1.5,
                "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                }
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
// track which menu is currently open on desktop: "Services" | "Solutions" | "Technologies" | null
const [openMenu, setOpenMenu] = React.useState(null);


const handleMenuOpen = (menuName) => (event) => {
  setAnchorEl(event.currentTarget);
  setOpenMenu(menuName);
};

// Close currently open menu
const handleMenuClose = () => {
  setAnchorEl(null);
  setOpenMenu(null);
};

  // Define the new menu structure with nested options and icons
  const menuItems = [
    {
      name: "Services",
      path: "services",
      icon: <WbIncandescentOutlinedIcon />,
      subMenu: [
        { name: "Machine Learning & AI", link: "/services/ml-ai", icon: <PsychologyOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Data Science Solutions", link: "/services/data-science", icon: <DataObjectOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Cloud Services", link: "/services/cloud", icon: <CloudOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Web Development", link: "/services/web-development", icon: <WebOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "API Integration", link: "/services/api-integration", icon: <ApiOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Managed Services", link: "/services/managed-services", icon: <ManageAccountsOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "IoT Development", link: "/services/iot-development", icon: <SatelliteAltOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Mobile App Development", link: "/services/mobile-app-development", icon: <PhoneAndroidOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "Software Development", link: "/services/software-development", icon: <CodeTwoToneIcon sx={{ color: "#fff" }} /> },
        { name: "Software Quality Engineering", link: "/services/software-quality", icon: <Search sx={{ color: "#fff" }} /> },
        { name: "Dedicated Teams", link: "/services/dedicated-teams", icon: <PeopleOutlineOutlinedIcon sx={{ color: "#fff" }} /> },
        { name: "UI/UX Design", link: "/services/ui-ux", icon: <DesignServicesOutlinedIcon sx={{ color: "#fff" }} /> },
      ],
    },
    {
      name: "Solutions",
      path: "solutions",
      icon: <DnsOutlinedIcon />,
      subMenu: [
        { name: "e-Learning", link: "/solutions/elearning", icon: <SchoolOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Payment Gateway", link: "/solutions/payment", icon: <PaymentOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Healthcare", link: "/solutions/healthcare", icon: <LocalHospitalOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Automobile", link: "/solutions/automobile", icon: <DirectionsCarFilledOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Logistics / Supply Chain", link: "/solutions/logistics", icon: <LocalShippingOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "CRM & Forms", link: "/solutions/crm", icon: <DnsOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Location Based Apps", link: "/solutions/location-apps", icon: <LocationOnOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Booking System", link: "/solutions/booking", icon: <EventOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Real Estate", link: "/solutions/real-estate", icon: <HouseOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Equine Software", link: "/solutions/equine", icon: <SportsScoreOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Social Media Platforms", link: "/solutions/social-media", icon: <PeopleOutlinedIcon sx={{color: "#fff"}} /> },
        { name: "Ecommerce & Marketplace", link: "/solutions/ecommerce", icon: <ShoppingCartOutlinedIcon sx={{color: "#fff"}} /> },
      ],
    },
    {
      name: "Technologies",
      path: "technologies",
      icon: <CodeOutlinedIcon />,
      subMenu: [
        {
          name: "Programming Languages",
          icon: <CodeOutlinedIcon sx={{color: "#fff"}} />,
          nestedItems: ["Java", "Python", "R Language", "Dart", "C++", ".NET (C#)", "JavaScript", "Ruby", "PHP", "Go", "Swift"],
        },
        {
          name: "Framework",
          icon: <WebOutlinedIcon sx={{color: "#fff"}} />,
          nestedItems: ["Spring Framework", "ReactJS", "AngularJS", "NodeJS", "Django", "Flask", "Ruby on Rails", "Laravel", "VueJS"],
        },
        {
          name: "NoSQL Database",
          icon: <StorageOutlinedIcon sx={{color: "#fff"}} />,
          nestedItems: ["MongoDB", "Apache Cassandra", "Microsoft Cosmo DB", "CouchDB", "Redis", "DynamoDB"],
        },
        {
          name: "RDBMS",
          icon: <DataUsageOutlinedIcon sx={{color: "#fff"}} />,
          nestedItems: ["Oracle", "PostgreSQL", "MySQL", "MariaDB", "MS SQL Server", "SQLite"],
        },
        {
          name: "Mobile Application",
          icon: <PhoneAndroidOutlinedIcon sx={{color: "#fff"}} />,
          nestedItems: ["Flutter", "IOS Native", "Android Native", "React Native", "Xamarin", "Ionic"],
        },
        {
          name: "APIs",
          icon: <ApiOutlinedIcon sx={{color: "#fff"}} />,
          nestedItems: ["REST APIs", "SOAP APIs", "GraphQL APIs", "gRPC"],
        },
        {
          name: "Infrastructure",
          icon: <CloudQueueOutlinedIcon sx={{color: "#fff"}} />,
          nestedItems: ["Microsoft Azure Cloud", "Amazon Cloud", "Google Cloud", "Kubernetes", "Apache Kafka", "Docker", "Terraform", "Ansible", "Jenkins"],
        },
      ],
    },
    { name: "Products", link: "/#testimonials", icon: <HandshakeOutlinedIcon /> },
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
        px: { xs: 2, md: 2, lg: 10 },
        py: 2,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <Box component={RouterLink} to="/">
          <Logo src={logoImg} alt="Twelve Springs" />
        </Box>

        {/* Desktop Menu */}
        <Box
  sx={{
    display: { xs: "none", md: "flex" },
    flexGrow: 1,
    justifyContent: "center",
    gap: 2,
    alignItems: "center",
  }}
  onMouseLeave={() => {
    handleMenuClose();
  }}
>
  {menuItems.map((item) => {
    // Services dropdown
    if (item.subMenu && item.name === "Services") {
      return (
        <Box key={item.name}>
          <Button
            onMouseEnter={handleMenuOpen("Services")}
            onClick={handleMenuOpen("Services")}
            sx={{
              color: "#000",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
            endIcon={<ExpandMoreIcon />}
          >
            {item.name}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={openMenu === "Services"}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseEnter: () => setOpenMenu("Services"),
              onMouseLeave: handleMenuClose,
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
              },
            }}
          >
            {item.subMenu.map((subItem) => (
              <MenuItem
                key={subItem.name}
                onClick={() => {
                  navigate(subItem.link);
                  handleMenuClose();
                }}
                sx={{
                  fontSize: "1rem",
                  py: 1.5,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon>{subItem.icon}</ListItemIcon>
                <ListItemText>{subItem.name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }

    // Solutions dropdown
    if (item.subMenu && item.name === "Solutions") {
      return (
        <Box key={item.name}>
          <Button
            onMouseEnter={handleMenuOpen("Solutions")}
            onClick={handleMenuOpen("Solutions")}
            sx={{
              color: "#000",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
            endIcon={<ExpandMoreIcon />}
          >
            {item.name}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={openMenu === "Solutions"}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseEnter: () => setOpenMenu("Solutions"),
              onMouseLeave: handleMenuClose,
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
              },
            }}
          >
            {item.subMenu.map((subItem) => (
              <MenuItem
                key={subItem.name}
                onClick={() => {
                  navigate(subItem.link);
                  handleMenuClose();
                }}
                sx={{
                  fontSize: "1rem",
                  py: 1.5,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon>{subItem.icon}</ListItemIcon>
                <ListItemText>{subItem.name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }

    // Technologies dropdown (uses NestedMenuItem inside)
    if (item.subMenu && item.name === "Technologies") {
      return (
        <Box key={item.name}>
          <Button
            onMouseEnter={handleMenuOpen("Technologies")}
            onClick={handleMenuOpen("Technologies")}
            sx={{
              color: "#000",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
            endIcon={<ExpandMoreIcon />}
          >
            {item.name}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={openMenu === "Technologies"}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseEnter: () => setOpenMenu("Technologies"),
              onMouseLeave: handleMenuClose,
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
              },
            }}
          >
            {item.subMenu.map((subItem) => (
              <NestedMenuItem
                key={subItem.name}
                parent={subItem}
                onClose={handleMenuClose}
              />
            ))}
          </Menu>
        </Box>
      );
    }

    // simple link (no dropdown)
    return (
      <Button
        key={item.name}
        component="a"
        href={item.link}
        sx={{
          color: "#000",
          textTransform: "none",
          fontFamily: "Poppins",
        }}
      >
        {item.name}
      </Button>
    );
  })}
</Box>


        {/* Contact Button */}
        {!isMobile && (
          <Button
            onClick={() => navigate("/landing")}
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 3,
              py: 1,
              fontWeight: 400,
              fontSize: { md: "10px", lg: "16px" },
              fontFamily: "Poppins",
              lineHeight: "24px",
              textTransform: "capitalize",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Contact Us
          </Button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              disableRestoreFocus
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              {menuItems.map((item) => (
                <React.Fragment key={item.name}>
                  {item.subMenu && item.name === "Services" ? (
                      <Box>
                        <MenuItem onClick={(event) => handleSubMenuOpen(event, item.path)}>
                          {item.icon}
                          <ListItemText>{item.name}</ListItemText>
                          <ExpandMoreIcon />
                        </MenuItem>
                         <Menu
                            anchorEl={anchorEl}
                            open={item.path === "services" && Boolean(anchorEl)} // Use correct anchor and state
                            onClose={handleMenuClose}
                            sx={{
                              "& .MuiPaper-root": {
                                backgroundColor: "#000",
                                color: "#fff",
                                borderRadius: "0",
                              },
                            }}
                          >
                           {item.subMenu.map((subItem) => (
                            <MenuItem
                              key={subItem.name}
                              onClick={() => {
                                navigate(subItem.link);
                                handleMenuClose();
                              }}
                              sx={{
                                fontSize: "1rem",
                                py: 1.5,
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                }
                              }}
                            >
                                <ListItemIcon>
                                    {subItem.icon}
                                </ListItemIcon>
                                {subItem.name}
                            </MenuItem>
                          ))}
                         </Menu>
                      </Box>
                  ) : item.subMenu && item.name === "Solutions" ? (
                      <Box>
                        <MenuItem onClick={(event) => handleSubMenuOpen(event, item.path)}>
                          {item.icon}
                          <ListItemText>{item.name}</ListItemText>
                          <ExpandMoreIcon />
                        </MenuItem>
                         <Menu
                           anchorEl={anchorEl}
                           open={item.path === "solutions" && Boolean(anchorEl)} // Use correct anchor and state
                           onClose={handleMenuClose}
                           sx={{
                               "& .MuiPaper-root": {
                                   backgroundColor: "#000",
                                   color: "#fff",
                                   borderRadius: 0
                               }
                           }}
                         >
                           {item.subMenu.map((subItem) => (
                             <MenuItem
                               key={subItem.name}
                               onClick={() => {
                                 navigate(subItem.link);
                                 handleMenuClose();
                               }}
                               sx={{
                                   fontSize: "1rem",
                                   py: 1.5,
                                   "&:hover": {
                                       backgroundColor: "rgba(255, 255, 255, 0.1)",
                                   }
                               }}
                             >
                                <ListItemIcon>
                                    {subItem.icon}
                                </ListItemIcon>
                                <ListItemText>{subItem.name}</ListItemText>
                             </MenuItem>
                           ))}
                         </Menu>
                      </Box>
                  ) : item.subMenu && item.name === "Technologies" ? (
                       <Box>
                         <MenuItem onClick={(event) => handleSubMenuOpen(event, item.path)}>
                           {item.icon}
                           <ListItemText>{item.name}</ListItemText>
                           <ExpandMoreIcon />
                         </MenuItem>
                         <Menu
                           anchorEl={anchorEl}
                           open={item.path === "technologies" && Boolean(anchorEl)} // Use correct anchor and state
                           onClose={handleMenuClose}
                           sx={{
                               "& .MuiPaper-root": {
                                   backgroundColor: "#000",
                                   color: "#fff",
                                   borderRadius: 0
                               }
                           }}
                         >
                           {item.subMenu.map((subItem) => (
                             <MenuItem
                               key={subItem.name}
                               onClick={() => {
                                 handleMenuClose();
                               }}
                               sx={{
                                 fontSize: "1rem",
                                 py: 1.5,
                                 "&:hover": {
                                     backgroundColor: "rgba(255, 255, 255, 0.1)",
                                 }
                               }}
                             >
                               <ListItemIcon>
                                 {subItem.icon}
                               </ListItemIcon>
                               {subItem.name}
                             </MenuItem>
                           ))}
                         </Menu>
                       </Box>
                  ) : (
                    <MenuItem
                      onClick={handleMenuClose}
                      component="a"
                      href={item.link}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        fontFamily: "Poppins",
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.icon}
                      {item.name}
                    </MenuItem>
                  )}
                  {item.name === "Company" && <Divider />}
                </React.Fragment>
              ))}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Button
                  onClick={() => {
                    navigate("/landing");
                    handleMenuClose();
                  }}
                  variant="contained"
                  sx={{
                    textAlign: "center",
                    borderRadius: 0,
                    width: "90%",
                    fontWeight: 400,
                    fontSize: "1.1rem",
                    fontFamily: "Poppins",
                    lineHeight: "24px",
                    textTransform: "capitalize",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;