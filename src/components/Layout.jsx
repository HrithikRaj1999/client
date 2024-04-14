import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchProvider } from "../context/searchContext";
import { CartProvider } from "../context/cartContext";
import { ProductProvider } from "../context/ProductContext";
import { CategoriesProvider } from "../context/categoriesContext";
import { AuthProvider } from "../context/auth";
import { Outlet } from "react-router-dom";
const Layout = ({ children = null, title, description, keywords, author }) => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ProductProvider>
          <CartProvider>
            <SearchProvider>
              <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
              </Helmet>
              <div className="flex flex-col min-h-screen">
                <div className="top-0 z-50 bg-white shadow-md">
                  <Header />
                </div>
                <main className="flex-grow">
                  <ToastContainer autoClose="1000" position="bottom-left" />
                  <Outlet />
                </main>
                <div className="mt-auto">
                  <Footer />
                </div>
              </div>
            </SearchProvider>
          </CartProvider>
        </ProductProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
};
Layout.defaultProps = {
  title: "Ecommerce app",
  description: "mern stack project",
  keywords: "mern,react,node,mongoDb",
  author: "Hrithik Raj",
};
export default Layout;
