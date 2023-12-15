import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import ThemeProvider from "./components/themeProvider";
import Login from "./pages/auth/Login";
import AddProduct from "./pages/products/AddProduct";
import AddBrand from "./pages/brands/AddBrand";
import Brands from "./pages/brands/Brands";
import AddCategory from "./pages/categories/AddCategory";
import Orders from "./pages/orders/Orders";
import Enquiries from "./pages/enquiries/Enquiries";
import Categories from "./pages/categories/Categories";
import AddColor from "./pages/colors/AddColor";
import Colors from "./pages/colors/Colors";
import Customers from "./pages/customers/Customers";
import EditColor from "./pages/colors/EditColor";
import FormTest from "./pages/formtesting/FormTest";
import EditProduct from "./pages/products/EditProduct";

import SkeletonDashboard from "./pages/dashboard/SkeletonDashboard";

import "./App.css";

const Products = lazy(() => import("./pages/products/Products"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route key={1} path="/">
      <Route path="login" element={<Login />} />
      <Route path="formtest" element={<FormTest />} />
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<SkeletonDashboard />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="customers" element={<Customers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="enquiries" element={<Enquiries />} />
        <Route path="catalog">
          <Route path="products">
            <Route
              index
              element={
                <Suspense fallback={<SkeletonDashboard />}>
                  <Products />
                </Suspense>
              }
            />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="editproduct" element={<EditProduct />} />
          </Route>
          <Route path="brands">
            <Route index element={<Brands />} />
            <Route path="addbrand" element={<AddBrand />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path="addcategory" element={<AddCategory />} />
          </Route>
          <Route path="colors">
            <Route index element={<Colors />} />
            <Route path="addcolor" element={<AddColor />} />
            <Route path="editcolor/:id" element={<EditColor />} />
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
