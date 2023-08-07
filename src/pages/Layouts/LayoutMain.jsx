import Footer from "../../components/Footer/Footer";
import NavbarMain from "../../components/Navbar/NavbarMain";

const LayoutMain = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="layout-main-header w-full">
        <NavbarMain />
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
