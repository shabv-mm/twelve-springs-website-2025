import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import { Container, GlobalStyles } from "@mui/material";

export default function Layout() {
  const { pathname } = useLocation();

  const defaultGradient = "linear-gradient(to bottom, #FFF3E6 0%, #FFFFFF 100%)";
  const landingGradient = "linear-gradient(to bottom, #FFE7D0 0%, #FFFFFF 100%)";

  const activeGradient = pathname === "/landing" ? landingGradient : defaultGradient;
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            background: activeGradient,
          },
        }}
      />
      <Container
        component="main"
        maxWidth="xxl"
        sx={{ pb: 0, px: "0px !important" }}
      >
        <Outlet />
      </Container>
    </>
  );
}
