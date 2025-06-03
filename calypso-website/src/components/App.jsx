import { useState } from "react";
import { createBrowserRouter, replace, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../containers/changeLanguage";
import Home from "./home/Home";

function App() {
  const { t } = useTranslation();

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    // { path: "/search/:sTerm" },
    // {
    //   path: "/items",
    //   children: [
    //     {
    //       path: "/guitar-bass",
    //       children: "/:itemId",
    //     },
    //     {
    //       path: "/piano-keyboard",
    //       children: "/:itemId",
    //     },
    //     {
    //       path: "/orchestral-strings",
    //       children: "/:itemId",
    //     },
    //     {
    //       path: "/brass-wind",
    //       children: "/:itemId",
    //     },
    //     {
    //       path: "/drums-percussion",
    //       children: "/:itemId",
    //     },
    //     {
    //       path: "/special",
    //       children: "/:itemId",
    //     },
    //     {
    //       path: "/accessories",
    //       children: "/:itemId",
    //     },
    //     {
    //       path: "/sonata-calypso",
    //       children: "/:itemId",
    //     },
    //   ],
    // },
    // { path: "/contact" },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
