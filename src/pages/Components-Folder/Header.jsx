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

import logoImg from "../../assets/mainlogo.png";
import buttonImg from "../../assets/button.svg";
import { Divider } from "@mui/material";

const Logo = styled("img")({
  width: "170px",
});

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
    { name: "Contact Us", link: "/landing" },
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
          <Box component={RouterLink} to="/">
            <Logo src={logoImg} alt="Twelve Springs" />
          </Box>
          {isMobile && (
            <Box sx={{}}>
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
                {menuItems.slice(0, 5).map((item) => (
                  <MenuItem
                    key={item.name}
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
                    {item.name}
                  </MenuItem>
                ))}
                <Divider />
                {menuItems.slice(5).map((item) => (
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 1 }}
                  >
                    <Button
                      onClick={() => navigate("/landing")}
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
          {menuItems.slice(0,5).map((item) => (
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
          ))}
        </Box>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
