
import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Components/Dashboard/Cart";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, children: [

        {path: '/', element: <Home/> },
        {path: '/our-menu', element: <OurMenu/>},
        {path: '/our-shop/:category', element:<OurShop/> },
        {path: '/login', element: <Login/>},
        {path: '/sign-up', element: <SignUp/>},
    ]
  },
  {
    path: '/dashboard', element: <Dashboard/> , children: [

      {path: '/dashboard/cart', element: <Cart/>}
    ]
  }
])