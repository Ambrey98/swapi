import { FavProvider } from "context/FavContext";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <FavProvider>
          <Outlet />
        </FavProvider>
      </main>
    </>
  );
}

export default Layout;