import { createBrowserRouter, replace, RouterProvider } from "react-router-dom";
import RootLayout from "../containers/Roots";
import Contact from "./contact/Contact";
import ITEMS from "../data/items";
import Home from "./home/Home";
import ErrorPage from "../containers/ErrorPage";
import Accessories from "./accessories/Accessories";
import Guitars from "./guitars/Guitars";
import Pianos from "./piano/Pianos";
import Orchestral from "./orchestral/Orchestral";
import BrassAndWind from "./brass-wind/BrassAndWind";
import Drums from "./drums/Drums";
import Special from "./special/Special";
import Sonata from "./sonata/Sonata";
import ItemDetails from "./itemDetails/itemDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout props={ITEMS} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },

        {
          path: "items",
          children: [
            {
              path: "guitar-bass",
              element: (
                <Guitars
                  props={ITEMS.filter((item) => item.category === "GUITAR")}
                />
              ),
            },
            {
              path: "pianos",
              element: (
                <Pianos
                  props={ITEMS.filter((item) => item.category === "PIANO")}
                />
              ),
            },
            {
              path: "orchestral-strings",
              element: (
                <Orchestral
                  props={ITEMS.filter((item) => item.category === "STRINGS")}
                />
              ),
            },
            {
              path: "brass-wind",
              element: (
                <BrassAndWind
                  props={ITEMS.filter((item) => item.category === "BRASS-WIND")}
                />
              ),
            },
            {
              path: "drums-percussion",
              element: (
                <Drums
                  props={ITEMS.filter((item) => item.category === "DRUMS")}
                />
              ),
            },
            {
              path: "special",
              element: (
                <Special
                  props={ITEMS.filter((item) => item.category === "SPECIAL")}
                />
              ),
            },
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
            {
              path: "sonata-calypso",
              element: (
                <Sonata
                  props={ITEMS.filter((item) => item.category === "SONATA")}
                />
              ),
            },
            { path: ":id", element: <ItemDetails props={ITEMS} /> },
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
