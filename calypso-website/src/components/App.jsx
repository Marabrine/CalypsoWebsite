import { createBrowserRouter, replace, RouterProvider } from "react-router-dom";
import RootLayout from "../containers/Roots";
import Contact from "./contact/Contact";
import ITEMS from "../data/items";
import Home from "./home/Home";
import ErrorPage from "../containers/ErrorPage";
import Accessories from "./accessories/Accessories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout props={ITEMS} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },

        // { path: "/search/:sTerm" },
        {
          path: "items",
          children: [
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
            {
              path: "accessories",
              element: (
                <Accessories
                  props={ITEMS.filter(
                    (item) => item.category === "ACCESSORIES"
                  )}
                />
              ),
            },
            //     {
            //       path: "/sonata-calypso",
            //     },
            //    { path: "/:itemId"}
          ],
        },
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
