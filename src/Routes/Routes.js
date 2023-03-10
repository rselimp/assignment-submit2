import { createBrowserRouter, Router } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;