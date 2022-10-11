import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Body from "../components/Body";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";

import Root from "../components/Root";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/body', element: <Body></Body> },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/home', element: <Home></Home> }
        ]

    }
])
export default router;