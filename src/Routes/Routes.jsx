import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Contract from "../pages/Home/Contract/Contract";
import Login from "../components/Login/Login";
import Register from "../components/Registration/Register";
import English from "../pages/Home/English/English";
import SignUp from "../components/Registration/SignUp";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/english',
                element: <English></English>
            },
            {
                path: '/contract',
                element: <Contract></Contract>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
  ])