import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return (
    <>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="navigation-link">
          <NavLink
            to="/Dashboard"
            className={({ isActive }) =>
              isActive ? "dashboard active" : "dashboard"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/Calendar"
            className={({ isActive }) =>
              isActive ? "calender active" : "calender"
            }
          >
            Calendar
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
