import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

const Home = lazy(() => import("../Home"));
const About = lazy(() => import("../About"));
const Contact = lazy(() => import("../Contact"));
const Cart = lazy(() => import("../Cart"));
const Category = lazy(() => import("../Category"));
const Register = lazy(() => import("../Register"));
const Login = lazy(() => import("../Login"));
const Logout = lazy(() => import("../Logout"));
const UserDashboard = lazy(() => import("../Dashboard/UserDashboard"));
const ForgotPassword = lazy(() => import("../ForgotPassword"));
const AdminDashboard = lazy(() => import("../Dashboard/AdminDashboard"));
const Error = lazy(() => import("../Error"));
const DeleteProduct = lazy(() => import("../Admin/DeleteProduct"));
const UpdateProduct = lazy(() => import("../Admin/UpdateProduct"));
const Protected = lazy(() => import("../Routes/Protected"));
const CreateCategory = lazy(() => import("../Admin/CreateCategory"));
const CreateProduct = lazy(() => import("../Admin/CreateProduct"));
const Users = lazy(() => import("../Admin/Users"));
const AllOrders = lazy(() => import("../Admin/AllOrders"));
const Products = lazy(() => import("../Admin/Products"));
const Profile = lazy(() => import("../User/Profile"));
const Orders = lazy(() => import("../User/Orders"));
const ProductDetails = lazy(() => import("../ProductDetails"));
const SearchItems = lazy(() => import("../SearchItems"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
        element: <Protected AboutcheckFor={"user"} />,
        children: [
          {
            path: "",
            element: <UserDashboard />,
            children: [
              { path: "profile", element: <Profile /> },
              { path: "orders", element: <Orders /> },
            ],
          },
        ],
      },
      {
        path: "admin-dashboard",
        element: <Protected checkFor={"admin"} />,
        children: [
          {
            path: "",
            element: <AdminDashboard />,
            children: [
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
      {
        path: "*",
        element: <h1>No Page Found</h1>,
      },
    ],
  },
]);
export default appRouter;
