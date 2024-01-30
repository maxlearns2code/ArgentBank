import { Outlet } from "react-router-dom";
import Footer from "/src/layout/Footer";
import Menu from "/src/layout/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
