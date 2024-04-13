import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import UserProfile from "../Pages/Profile/UserProfile";
import Login from "../Pages/Profile/Login";
import Register from "../Pages/Profile/Register";
import EstateDetails from "../Pages/Estates/EstateDetails";
import ErrorPage from "../Layouts/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs";
import Favorites from "../Pages/Favorites";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../fakeData.json')
            },
            {
                path: "/estateCard/:id",
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: () => fetch("../fakeData.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/userprofile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: "/updateprofile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/favorites",
                element: <PrivateRoute><Favorites></Favorites></PrivateRoute>,
                loader: () => fetch("../fakeData.json")
            }
        ]
    },
]);

export default router;