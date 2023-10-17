import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import Layout from "./components/Layout";

// PAGES
import About from "./pages/About";
import HomePage from "./pages/home/HomePage";
import StorePage from "./pages/store/StorePage";
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";

import "./App.css";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Account from "./pages/auth/Account";
import RecoverAccount from "./pages/auth/RecoverAccount";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route key={1} path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="store" element={<StorePage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="account">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover" element={<RecoverAccount />} />
        <Route path=":accountPage" element={<Account />} />
        <Route index element={<Account />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
