import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import News from "../components/News";
import CategoryNews from "../components/pages/CategoryNews";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
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
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
          {
            path:'/auth',
            element:<Login></Login>,
            
          }, 
          {
            path:'/auth/register',
            element:<Register></Register>
            
          }, 
        ]
      },
      
  ]);
  export default router;