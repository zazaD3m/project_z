import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
};
export default Layout;
