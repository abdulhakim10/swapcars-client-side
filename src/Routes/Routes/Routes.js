import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../pages/Blog/Blog";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../pages/Dashboard/AddProduct/MyProducts";
import AllBuyers from "../../pages/Dashboard/AllUser/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllUser/AllSellers/AllSellers";

import Dashboard from "../../pages/Dashboard/Dashboard";
import MyBookings from "../../pages/Dashboard/MyBookings/MyBookings";
import MyWishlist from "../../pages/Dashboard/MyBookings/MyWishlist";
import Payment from "../../pages/Dashboard/Payment/Payment";

import Category from "../../pages/Home/Category/Category";
import ErrorPage from "../../pages/Home/Category/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import SignUp from "../../pages/Login/SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/categories/:id",
                loader: ({params}) => fetch(`https://swapcars-assignment12-server.vercel.app/categories/${params.id}`),
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/mybooking',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/wishlists',
                element: <MyWishlist></MyWishlist>
            },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AllUser></AllUser>
            // },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;