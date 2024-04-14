import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Context providers
import { AuthProvider } from "./context/auth";
import { CategoriesProvider } from "./context/categoriesContext";
import { ProductProvider } from "./context/ProductContext";
import { SearchProvider } from "./context/searchContext";
import { CartProvider } from "./context/cartContext";

// Lazy loaded components
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));
const Category = lazy(() => import("./components/Category"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));
const Logout = lazy(() => import("./components/Logout"));
const UserDashboard = lazy(() =>
  import("./components/Dashboard/UserDashboard")
);
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
const AdminDashboard = lazy(() =>
  import("./components/Dashboard/AdminDashboard")
);
const ErrorPage = lazy(() => import("./components/Error"));
const DeleteProduct = lazy(() => import("./components/Admin/DeleteProduct"));
const UpdateProduct = lazy(() => import("./components/Admin/UpdateProduct"));
const Protected = lazy(() => import("./components/Routes/Protected"));
const CreateCategory = lazy(() => import("./components/Admin/CreateCategory"));
const CreateProduct = lazy(() => import("./components/Admin/CreateProduct"));
const Users = lazy(() => import("./components/Admin/Users"));
const AllOrders = lazy(() => import("./components/Admin/AllOrders"));
const Products = lazy(() => import("./components/Admin/Products"));
const Profile = lazy(() => import("./components/User/Profile"));
const Orders = lazy(() => import("./components/User/Orders"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const SearchItems = lazy(() => import("./components/SearchItems"));
const Spinner = lazy(() => import("./components/Spinner"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "search", element: <SearchItems /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "category", element: <Category /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      { path: "product-details/:slug", element: <ProductDetails /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      {
        path: "user-dashboard",
        element: <Protected checkFor={"user"} />,
        children: [
          { path: "", element: <UserDashboard /> },
          { path: "profile", element: <Profile /> },
          { path: "orders", element: <Orders /> },
        ],
      },
      {
        path: "admin-dashboard",
        element: <Protected checkFor={"admin"} />,
        children: [
          { path: "", element: <AdminDashboard /> },
          { path: "createCategory", element: <CreateCategory /> },
          { path: "createProduct", element: <CreateProduct /> },
          { path: "users", element: <Users /> },
          { path: "products", element: <Products /> },
          { path: "update-product/:slug", element: <UpdateProduct /> },
          { path: "delete-product", element: <DeleteProduct /> },
          { path: "all-orders", element: <AllOrders /> },
        ],
      },
    ],
  },
]);

const App = () => (
  <RouterProvider router={appRouter}>
    <AuthProvider>
      <CategoriesProvider>
        <ProductProvider>
          <CartProvider>
            <SearchProvider></SearchProvider>
          </CartProvider>
        </ProductProvider>
      </CategoriesProvider>
    </AuthProvider>
  </RouterProvider>
);

export default App;
