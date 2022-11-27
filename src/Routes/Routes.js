import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";

import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

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
                path: '/category/:id',
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
                // loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>,

            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,

            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>,

            },
            {
                path: '/myproducts',
                element: <MyProducts></MyProducts>,

            },
            {
                path: '/myorders',
                element: <MyOrders></MyOrders>,

            },
        ]
    }
])
export default router