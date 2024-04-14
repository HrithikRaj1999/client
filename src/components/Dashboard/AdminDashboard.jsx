import React from "react";
import AdminMenu from "../Admin/AdminMenu";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";

const AdminDashboard = ({ children }) => {
  const [auth] = useAuth();
  return (
    <div className="flex m-2">
      <div className="w-3/12">
        <AdminMenu />
      </div>

      <div className="w-9/12">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
