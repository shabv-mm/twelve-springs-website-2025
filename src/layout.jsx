import Box from "@mui/material/Box";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, GlobalStyles } from "@mui/material";

export default function Layout() {
  return (
    <>
      <GlobalStyles styles={{ body: { backgroundColor: "transparent" } }} />
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
