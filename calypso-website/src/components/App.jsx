import { useState } from "react";
import { createBrowserRouter, replace, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../containers/changeLanguage";
import Home from "./home/Home";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
