import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Homes/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import Cart from "../Pages/UserDashboard/Cart/Cart";
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'menu',
        element: <Menu></Menu>
      },
      {
        path:"order/:category",
        element:<Order></Order>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'cart',
        element: <Cart></Cart>
      }
    ]
  }
]);

export default Router;
