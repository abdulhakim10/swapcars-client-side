import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Category from "../../pages/Home/Category/Category";
import Home from "../../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/categories/:id",
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
                element: <Category></Category>
            }
        ]
    }
])

export default router;