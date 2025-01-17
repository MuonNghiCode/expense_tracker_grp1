import { Outlet } from "react-router-dom";
import "./MainLayout.scss";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useState } from "react";

const MainLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="header-layout">
      <Header onMenuClick={toggleSidebar} />
      <div className="sidebar-layout">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className="main-layout">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
