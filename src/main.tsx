import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Poppins",
        colorScheme: "dark",
        fontSizes: {
          xs: 10,
          sm: 14,
          md: 16,
          lg: 18,
          xl: 20,
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
