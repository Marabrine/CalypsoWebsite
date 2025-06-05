import { useState } from "react";
import { createBrowserRouter, replace, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../containers/changeLanguage";
import RootLayout from "../containers/Roots";
import Contact from "./contact/Contact";

function App() {
  const { t } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        // { path: "/search/:sTerm" },
        // {
        //   path: "/items",
        //   children: [
        //     {
        //       path: "/guitar-bass",
        //     },
        //     {
        //       path: "/piano-keyboard",
        //     },
        //     {
        //       path: "/orchestral-strings",
        //     },
        //     {
        //       path: "/brass-wind",
        //     },
        //     {
        //       path: "/drums-percussion",
        //     },
        //     {
        //       path: "/special",
        //     },
        //     {
        //       path: "/accessories",
        //     },
        //     {
        //       path: "/sonata-calypso",
        //     },
        //    { path: "/:itemId"}
        //   ],
        // },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
