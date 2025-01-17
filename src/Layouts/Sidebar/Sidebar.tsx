import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { CalendarOutlined, DashboardOutlined } from "@ant-design/icons";

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
            <DashboardOutlined
              className="icon"
              style={{ marginRight: "10px", fontSize: "30px" }}
            />
            <span className="link-text">Dashboard</span>
          </NavLink>
          <NavLink
            to="/Calendar"
            className={({ isActive }) =>
              isActive ? "calender active" : "calender"
            }
          >
            <CalendarOutlined
              className="icon"
              style={{ marginRight: "10px", fontSize: "30px" }}
            />
            <span className="link-text">Calendar</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
