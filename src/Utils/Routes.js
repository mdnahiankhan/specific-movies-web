import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";

import Root from "../components/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            { path: '/body', element: <Body></Body> }
        ]

    }
])
export default router;