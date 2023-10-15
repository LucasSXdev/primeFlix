import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Film from "./pages/Film";
import RootLayout from "./pages/RootLayout";

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
        path: "film",
        element: <Film />,
      },
    ],
  },
]);
