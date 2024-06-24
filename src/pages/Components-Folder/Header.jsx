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
// import { Link } from "react-scroll";

import logo from "../../assets/mainlogo.svg";
import logoImg from "../../assets/mainlogo.png";
import buttonImg from "../../assets/button.svg";
import { Link } from "react-router-dom";

const Logo = styled("img")({
  // height: 40,
  width: "170px",
  // marginRight: 'auto',
});

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { name: "Services", link: "/#expertise" },
    { name: "Solutions", link: "/#solution" },
    { name: "Technologies", link: "/#technologies" },
    { name: "Products", link: "/#testimonials" },
    { name: "Company", link: "/#aboutus" },
    // { name: "Blog", link: "blog" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
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
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "flex-start", lg: "center" },
          alignItems: { xs: "stretch", md: "center" },
          gap: { md: 1, lg: 15 },
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Logo src={logoImg} alt="Twelve Springs" />
          {isMobile && (
            <Box sx={{ borderRadius: 5 }}>
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
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    smooth={true}
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontFamily: "poppins",
                      fontSize: "1.2rem",
                    }}
                  >
                    <MenuItem onClick={handleMenuClose}>{item.name}</MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              smooth={true}
              duration={1000}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ color: "#000", textTransform: "none" }}>
                {item.name}
              </Button>
            </Link>
          ))}
        </Box>
        {!isMobile && (
          <Link to="/#contactus" smooth={true} duration={1000}>
            <Button
              className="getintouchbtn"
              variant="contained"
              sx={{
                borderRadius: 0,
                px: 3,
                py: 1,
                fontWeight: "400",
                fontSize: { md: "10px", lg: "16px" },
                fontFamily: "poppins",
                // height: { md: 10 },
                lineHeight: "24px",
                textTransform: "capitalize",
                backgroundColor: "black",
              }}
            // endIcon={!isTab && <img src={buttonImg} style={{ marginLeft: 5 }} />}
            >
              Get in Touch
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
