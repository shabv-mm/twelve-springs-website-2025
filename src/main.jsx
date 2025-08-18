import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigate,
  ScrollRestoration,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "./layout";
import { StoreContextProvider } from "./common/StoreContext";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import Landing from "./Landing";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "400",
  },
  
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: "20px",
          px: "40px",
          textTransform: "capitalize",
        },
      },
    },
  },
});

function Root() {
  return (
    <Fragment>
      <ScrollRestoration />

      <ThemeProvider theme={theme}>
        <StoreContextProvider>
          <CssBaseline />
          <Outlet />
        </StoreContextProvider>
      </ThemeProvider>
    </Fragment>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { path: "/", Component: Dashboard },
          { path: "/home", Component: Dashboard },
          { path: "/landing", Component: Landing },
        ],
      },

      { path: "/terms-services", Component: TermsConditions },
      { path: "/privacy-policy", Component: PrivacyPolicy },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
