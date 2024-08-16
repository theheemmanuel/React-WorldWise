import { Outlet } from "react-router";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/2 min-h-[90vh] bg-gray-800 text-white text-center p-4">
      <img className="w-64 mx-auto" src={Logo} alt="" />
      <div className="flex justify-center my-6">
        <NavLink
          to="cities"
          className={({ isActive }) =>
            `rounded-l-2xl px-4 py-2 ${
              isActive ? "bg-gray-900" : "bg-gray-600"
            }`
          }
        >
          Cities
        </NavLink>
        <NavLink
          to="countries"
          className={({ isActive }) =>
            `rounded-r-2xl px-4 py-2 ${
              isActive ? "bg-gray-900" : "bg-gray-600"
            }`
          }
        >
          Countries
        </NavLink>
      </div>
      <Outlet />
      <footer>&copy; Copyright 2024 by WorldWide Inc</footer>
    </div>
  );
};

export default Sidebar;
