import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Homes/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import AddItems from "../Pages/UserDashboard/AddItems/AddItems";
import AllUsers from "../Pages/UserDashboard/AllUsers/AllUsers";
import Cart from "../Pages/UserDashboard/Cart/Cart";
import ManageItems from "../Pages/UserDashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/UserDashboard/UpdateItem/UpdateItem";
import AdminRoute from "./AdminRoute";
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
      // normal user routes
      {
        path:'cart',
        element: <Cart></Cart>
      },
      // Admin Routes
      {
        path: "addItems",
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:"manageItems",
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch (`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "users",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);

export default Router;
