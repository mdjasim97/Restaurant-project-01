import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <Login />,
      },
      {
        path: "/protfolio",
        element: <SignUp />,
      },
      {
        path: "/clients",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
