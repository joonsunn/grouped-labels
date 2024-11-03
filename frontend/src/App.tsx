// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import ThemeSwitcherButton from "./components/themeSwitcher";
// import { useTheme } from "@mui/material";
import { RouterProvider } from 'react-router-dom';
// import Router from "./config/router";
// import Router from "./config/routesConfig";
import { router } from './config/routesConfig';
import { QueryClientProvider } from './tanstack/QueryClientProvider';
// import { AlertProvider } from "@/contexts/alert/AlertContext";

function App() {
  return (
    <QueryClientProvider>
      {/* <AlertProvider> */}
      <RouterProvider router={router} />
      {/* </AlertProvider> */}
    </QueryClientProvider>
  );
}

export default App;
