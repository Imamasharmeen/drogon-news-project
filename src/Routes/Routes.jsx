import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import News from "../components/News";
const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Error</div>,
      },
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'',
          element:<Navigate to='/category/01'></Navigate>
        },
        {
          path:"/category/:id",
          element:<h1>this is category</h1>
        }, 
      ]
    },
    {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "auth",
        element: <h1>Login</h1>,
      },
  ]);
  export default router;