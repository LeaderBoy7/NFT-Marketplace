import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Marketplace from "./Pages/Marketplace/Marketplace";
import Rankings from "./Pages/Rankings/Rankings";
import Wallet from "./Pages/Wallet/Wallet";
import Signup from "./Pages/Signup/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "marketplace",
          element: <Marketplace />,
        },
        {
          path: "rankings",
          element: <Rankings />,
        },
        {
          path: "wallet",
          element: <Wallet />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return (
    <div className="max-w-[1280px]">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
