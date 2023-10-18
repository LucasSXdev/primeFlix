import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Film from "./pages/Film";
import RootLayout from "./pages/RootLayout";
import Favoritos from "./pages/Favoritos";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "film/:id",
        element: <Film />,
      },
      {
        path: "favoritos",
        element: <Favoritos />,
      },
    ],
  },
]);
