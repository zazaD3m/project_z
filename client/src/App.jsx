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
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";

import "./App.css";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Account from "./pages/auth/Account";
import RecoverAccount from "./pages/auth/RecoverAccount";
import SingleBlog from "./pages/blog/SingleBlog";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import RefundPolicy from "./pages/policies/RefundPolicy";
import ShippingPolicy from "./pages/policies/ShippingPolicy";
import TermsOfServices from "./pages/policies/TermsOfServices";
import StorePageLayout from "./pages/store/StorePageLayout";
import StorePageProducts from "./pages/store/StorePageProducts";
import ProductPage from "./pages/product/ProductPage";
import Cart from "./pages/cart&checkout/Cart";
import Checkout from "./pages/cart&checkout/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route key={1} path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="store" element={<StorePageLayout />}>
        <Route index element={<StorePageProducts />} />
        <Route path=":category" element={<StorePageProducts />} />
        <Route path=":category/:brand" element={<StorePageProducts />} />
        <Route path=":category/:brand/:productId" element={<ProductPage />} />
      </Route>
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/:id" element={<SingleBlog />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="account">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover" element={<RecoverAccount />} />
        <Route path=":accountPage" element={<Account />} />
        <Route index element={<Account />} />
      </Route>
      <Route path="cart">
        <Route index element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="refund-policy" element={<RefundPolicy />} />
      <Route path="shipping-policy" element={<ShippingPolicy />} />
      <Route path="terms-of-services" element={<TermsOfServices />} />
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
