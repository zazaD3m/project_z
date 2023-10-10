import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import BreadCrumb from "./BreadCrumb";

const Layout = () => {
  return (
    <>
      <Header />
      <BreadCrumb />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
