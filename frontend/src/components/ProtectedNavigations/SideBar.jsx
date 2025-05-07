import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Dashboard,
  Income,
  Expense,
  Settings,
  ShutDown as Logout,
} from "../../utils/Icons";
import { openModal } from "../../features/logoutModal/logoutModalSlice";

// New distinctive logo (replace with a new image file in /assets or a URL)
import newLogo from "../../assets/penny-wise-logo.png";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isRouteActive = (path) => location.pathname === path;

  return (
    <nav className="hidden xl:flex flex-col w-[15%] h-full border-r border-indigo-200 bg-gradient-to-b from-white via-slate-50 to-indigo-50 py-4 shadow-md">
      {/* Logo Section */}
      <div className="px-4 flex items-center gap-x-3">
        <img src={newLogo} alt="penny wise logo" className="w-[2.5rem]" />
        <h5 className="text-xl font-semibold font-outfit text-slate-800">
          Penny
          <span className="text-indigo-500 font-bold">Wise</span>
        </h5>
      </div>

      {/* Menu Section */}
      <menu className="w-full h-full flex flex-col px-3 mt-12 space-y-2 text-slate-700">
        <li
          className={`link transition-colors duration-200 ${
            isRouteActive("/dashboard")
              ? "bg-indigo-100 text-indigo-600 font-medium rounded-lg shadow-sm"
              : "hover:bg-slate-100 hover:text-indigo-500"
          }`}
          onClick={() => navigate("/dashboard")}
        >
          <Dashboard className="size-[1.5rem]" />
          Dashboard
        </li>

        <li
          className={`link transition-colors duration-200 ${
            isRouteActive("/dashboard/incomes")
              ? "bg-indigo-100 text-indigo-600 font-medium rounded-lg shadow-sm"
              : "hover:bg-slate-100 hover:text-indigo-500"
          }`}
          onClick={() => navigate("/dashboard/incomes")}
        >
          <Income className="size-[1.5rem]" />
          Incomes
        </li>

        <li
          className={`link transition-colors duration-200 ${
            isRouteActive("/dashboard/expenses")
              ? "bg-indigo-100 text-indigo-600 font-medium rounded-lg shadow-sm"
              : "hover:bg-slate-100 hover:text-indigo-500"
          }`}
          onClick={() => navigate("/dashboard/expenses")}
        >
          <Expense className="size-[1.5rem]" />
          Expenses
        </li>

        {/* Settings */}
        <li
          className={`link mt-auto transition-colors duration-200 ${
            isRouteActive("/dashboard/settings")
              ? "bg-indigo-100 text-indigo-600 font-medium rounded-lg shadow-sm"
              : "hover:bg-slate-100 hover:text-indigo-500"
          }`}
          onClick={() => navigate("/dashboard/settings")}
        >
          <Settings className="size-[1.5rem]" />
          Settings
        </li>

        {/* Logout */}
        <li
          className="link mt-6 hover:bg-red-500 hover:text-white transition-colors duration-200 rounded-lg"
          onClick={() => dispatch(openModal())}
        >
          <Logout className="size-[1.5rem]" />
          Logout
        </li>
      </menu>
    </nav>
  );
};

export default SideBar;
