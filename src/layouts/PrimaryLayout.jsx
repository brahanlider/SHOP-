import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* renderiza acorde a la ruta donde estan */}
        <Outlet />
      </main>
    </>
  );
};

export default PrimaryLayout;
