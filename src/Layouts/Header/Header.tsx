import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { BellOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { useTransactionService } from "../../Services/TransactionService";

const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const [balance, setBalance] = useState<number>(0);
  const { transactions, error } = useTransactionService();

  useEffect(() => {
    const updateBalance = () => {
      if (transactions.length > 0) {
        const calculatedBalance = transactions.reduce(
          (totalBalance, transaction) => {
            const amount = Number(transaction.amount);
            return transaction.type === "Income"
              ? totalBalance + amount
              : totalBalance - amount;
          },
          0
        );
        setBalance(calculatedBalance);
      }
    };

    const intervalId = setInterval(updateBalance, 100);

    return () => clearInterval(intervalId);
  }, [transactions]);

  return (
    <div className="header-container">
      <div className="navbar">
        <div className="navbar-left">
          <Button
            type="default"
            icon={<MenuOutlined style={{ fontSize: "25px" }} />}
            style={{ backgroundColor: "transparent", border: "none" }}
            className="menu-btn"
            onClick={onMenuClick}
          />
          <Link to="/">
            <Image
              width={80}
              height={80}
              src={logo || "/placeholder.svg"}
              alt="logo"
              preview={false}
            />
          </Link>
        </div>
        <div className="navbar-right">
          <div className="remainder-box">
            {error ? (
              <p>Error loading balance</p>
            ) : (
              <p>
                {balance.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
                VND
              </p>
            )}
          </div>
          <Button
            type="default"
            icon={<BellOutlined style={{ fontSize: "25px" }} />}
            style={{ backgroundColor: "transparent", border: "none" }}
            className="notification-btn"
          />
          <Button
            type="default"
            icon={<UserOutlined style={{ fontSize: "25px" }} />}
            style={{ backgroundColor: "transparent", border: "none" }}
            className="user-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
