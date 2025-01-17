import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { BellOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <div className="navbar-left">
            <Button
              type="default"
              icon={<MenuOutlined style={{ fontSize: "25px" }} />}
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              className="menu-btn"
              onClick={onMenuClick}
            ></Button>
            <Link to="/">
              <Image
                width={80}
                height={80}
                src={logo}
                alt="logo"
                preview={false}
              />
            </Link>
          </div>
          <div className="navbar-right">
            <div className="remainder-box">
              <p>100.xxx.xxx VND</p>
            </div>
            <Button
              type="default"
              icon={<BellOutlined style={{ fontSize: "25px" }} />}
              style={{ backgroundColor: "transparent", border: "none" }}
              className="notification-btn"
            ></Button>
            <Button
              type="default"
              icon={<UserOutlined style={{ fontSize: "25px" }} />}
              style={{ backgroundColor: "transparent", border: "none" }}
              className="user-btn"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
