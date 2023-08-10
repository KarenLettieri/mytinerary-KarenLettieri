import Footer from "../../components/Footer/Footer";
import NavbarMain from "../../components/Navbar/NavbarMain";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="layout-main-header w-full">
        <NavbarMain />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
