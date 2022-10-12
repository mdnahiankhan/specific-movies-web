import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quez from "../components/Quez";

import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/topics', element: <Topics></Topics> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/quez/:id', loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
                }, element: <Quez></Quez>
            }
        ]

    },

])
export default router;