import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Body from "../components/Body";

import Root from "../components/Root";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            { path: '/body', element: <Body></Body> },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blog', element: <Blog></Blog> }
        ]

    }
])
export default router;