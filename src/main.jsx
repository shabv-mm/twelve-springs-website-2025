import React, { Fragment, useRef } from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigate,
  ScrollRestoration,
} from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Dashboard from "./Dashboard";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { indigo, red, blue, blueGrey } from "@mui/material/colors";
import { SWRConfig } from "swr";
import { DragDropContext } from "react-beautiful-dnd";
import Layout from "./layout";
import { StoreContextProvider } from "./common/StoreContext";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "400",
  },
  palette: {
    // primary: {
    //   main: indigo[900],
    // },
    // info: {
    //   main: blue[700],
    // },
    // error: {
    //   main: red[900],
    // },
    // warning: {
    //   main: blueGrey[500],
    // },
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
    // ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { path: "/", Component: Dashboard },
          { path: "/home", Component: Dashboard }

        ],
        // children: [{ path: "/terms-services", Component: TermsConditions }],
        // children: [{ path: "/privacy-policy", Component: PrivacyPolicy }],
      },

      { path: '/terms-services', Component: TermsConditions },
      { path: '/privacy-policy', Component: PrivacyPolicy },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
