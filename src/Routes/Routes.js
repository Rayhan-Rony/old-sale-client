import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers.js/AllBuyers";
import Allsellers from "../Pages/Dashboard/Allsellers/Allsellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,

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
            {
                path: '/blogs',
                element: <Blogs></Blogs>,

            },
            {
                path: '/allsellers',
                element: <Allsellers></Allsellers>,

            },
            {
                path: '/allbuyers',
                element: <AllBuyers></AllBuyers>,

            },
            {
                path: '/reporteditems',
                element: <ReportedItems></ReportedItems>,

            },
        ]
    }
])
export default router