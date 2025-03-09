import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews1 from "../pages/CategoryNews1";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to="/category/01"></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews1></CategoryNews1>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                // element: <h2>this is category ongoing</h2>
            },
        ],
    },
    {
        path: "/news",
        element: <h1>News Layout</h1>
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },
])


export default router;