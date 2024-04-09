import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import UserProfile from "../Pages/Profile/UserProfile";
import Login from "../Pages/Profile/Login";
import Register from "../Pages/Profile/Register";
import EstateDetails from "../Pages/Estates/EstateDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('../fakeData.json')
            },
            {
                path: "/estateCard/:id",
                element: <EstateDetails></EstateDetails>,
                loader: ()=>fetch("../fakeData.json")
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
                element: <UserProfile></UserProfile>
            },
            {
                path: "/updateprofile",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },
]);

export default router;