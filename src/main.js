import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
// REQUIRED for Select to work
import "@mantine/core/styles.css";
import "./components/Styles/Style.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(MantineProvider, { children: _jsx(App, {}) }) }));
