import Home from "../pages";
import About from "../pages/about";
import Layout from "../layouts/Layout";

const routers = ([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ]
},
    
]);

export default routers;