import { RouterProvider } from "react-router-dom";
import "./App.css";
import { primaryRoute } from "./routes/primaryRoute";

function App() {
  return (
    <>
      {/* maneja las diferentes secciones sin problema */}
      <RouterProvider router={primaryRoute} />
    </>
  );
}

export default App;
// 2 3 30
