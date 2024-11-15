import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import News from "../components/News";
import CategoryNews from "../components/pages/CategoryNews";
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
          element:<CategoryNews></CategoryNews>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)  
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