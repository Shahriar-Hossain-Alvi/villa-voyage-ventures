import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import UserProfile from "../Pages/Profile/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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