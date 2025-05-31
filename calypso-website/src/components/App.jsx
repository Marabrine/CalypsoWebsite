import { useState } from "react";
import { createBrowserRouter, replace, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../containers/changeLanguage";
import Home from "./home/Home";

function App() {
  const { t } = useTranslation();

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/search/:sTerm" },
    {
      path: "/items/guitars",
      children: [
        {
          path: ":itemId",
        },
      ],
    },
    { path: "" },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
