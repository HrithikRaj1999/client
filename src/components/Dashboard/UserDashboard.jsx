import React from "react";
import { useAuth } from "../../context/auth";
import UserMenu from "../User/UserMenu";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  const [auth] = useAuth();
  return (
    <div className="flex m-2">
      <div className="w-3/12">
        <UserMenu />
      </div>

      <div className="w-9/12">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
