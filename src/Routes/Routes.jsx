import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import News from "../components/News";
const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Error</div>,
      },
    {
      path: "/",
      element: <MainLayout></MainLayout>
    },
    {
        path: "/news",
        element: <News></News>,
      },
  ]);
  export default router;