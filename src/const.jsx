import {
  AccessTime,
  History,
  MedicalServicesOutlined,
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Logout } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import HubIcon from "@mui/icons-material/Hub";
import InventoryIcon from "@mui/icons-material/Inventory";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import StorageIcon from "@mui/icons-material/Storage";
import CategoryIcon from "@mui/icons-material/Category";
import CircleIcon from "@mui/icons-material/Circle";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const drawerWidth = "250px";

export const sidebarItems = [
  { title: "Dashboard", to: "/", icon: <DashboardIcon /> },
  {
    title: "Workspace",
    to: "/workspace",
    icon: <DashboardIcon />,
    endicon: <AddCircleOutlineIcon />,
  },
  {
    title: "Orders - Dispatch",
    icon: <History />,
    submenus: [
      {
        title: "Create Dispatch",
        to: "/create-dispatch",
        // icon: <History />,
      },
    ],
  },
  { title: "Inwords", to: "/leaves", icon: <FormatListNumberedRtlIcon /> },
  { title: "QR code", to: "/leaves", icon: <QrCodeScannerIcon /> },
  { title: "Invoices", to: "/invoices", icon: <FileCopyIcon /> },
  { title: "Inventory", to: "/leaves", icon: <InventoryIcon /> },
  {
    title: "Datahub",
    icon: <HubIcon />,
    submenus: [
      {
        title: "Vendors",
        to: "/vendors",
        // icon: <StorageIcon />
      },
      {
        title: "Customers",
        to: "/customers",
        // icon: <StorageIcon />
      },
      {
        title: "Supplier",
        to: "/leaves/all",
        // icon: <StorageIcon />
      },
      {
        title: "Categories",
        to: "/products/add",
        //  icon: <CategoryIcon />
      },
      { title: "Items", to: "/items" },
    ],
  },
  { title: "Notes", to: "/notes", icon: <TextSnippetIcon /> },
  { title: "Settings", to: "/settings", icon: <SettingsIcon /> },
  {
    title: "Logout",
    to: "/leaves",
    icon: <Logout />,
  },
];

export const pageTitles = {
  "/": { title: "Dashboard" },
  "/history": { title: "History" },
  "/leaves": "Leaves",
  "/create-dispatch": { title: "Create Dispatch" },
  "/vendors": "Vendors",
  "/vendors/add": { title: "Add Vendors", back: true },
  "/vendors/edit": { title: "Edit Vendors", back: true },
  "/customers": { title: "Customers" },
  "/customers/add": { title: "Add Customer", back: true },
  "/customers/edit": { title: "Edit Customer", back: true },
  "/items": { title: "Item" },
  "/items/add": { title: "Add Item", back: true },
  "/items/edit": { title: "Edit Item", back: true },
  "/invoices": { title: "Invoices" },
  "/invoices/create": { title: "Create Invoices" },
  "/notes": { title: "Notes" },
  "/workspace": { title: "Workspace" },
  "/workform": { title: "Notebooks", back: "/workspace" },
  "/workform-select": { title: "Select Option", back: true },
  "/display-form": { title: "Design Notebook", back: true },
  "/preview-form": { title: "Preview Notebook", back: true },
  "/views": { title: "Views",  },
  "/add-views": { title: "Views", back: true },
};
