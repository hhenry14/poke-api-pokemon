import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";

import NotFound from "../page/NotFound";
import Home from "../page/Home";
import ContactPage from "../page/ContactPage";
import PagePokemonDetails from "../page/PagePokemonDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "juan/:id",
        element: <PagePokemonDetails />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
