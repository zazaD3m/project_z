import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import BreadCrumb from "./BreadCrumb";
import ScrollToTop from "./ScrollToTop";
import { ScrollToTopButton } from "./ScrollToTopButton";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
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
