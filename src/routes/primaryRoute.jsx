import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";

// primaryRoute = tiene todas las rutas
export const primaryRoute = createBrowserRouter([
  // createBrowserRouter =recibe el array =todas las rutas
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      {
        // renderia primero el HOME
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "productos",
        element: <h1>Productos</h1>,
      },
      {
        path: "nosotros",
        element: <h1>Nosotros</h1>,
      },
      {
        path: "historias",
        element: <h1>Historias</h1>,
      },
      {
        path: "contacto",
        element: <h1>Contacto</h1>,
      },
    ],
  },
]);
