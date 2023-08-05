import Footer from "../../components/Footer/Footer";
import NavbarMain from "../../components/Navbar/NavbarMain";

const LayoutMain = ({ children }) => {
  return (
    <div>
      <header className="layout-main-header w-full">
        <NavbarMain />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutMain;
