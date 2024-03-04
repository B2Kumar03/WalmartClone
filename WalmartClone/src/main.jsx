import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style/index.css";
import { AuthProvider } from "./AuthContext/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider>
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
 </AuthProvider>
);
