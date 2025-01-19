import React from "react";
import { Transaction } from "../../Models/Transaction";
import "./TransactionCard.css";
import { Button } from "antd";

interface TransactionCardProps {
  transaction: Transaction;
  deleteTransaction: (id: string) => void;
  openFormUpdateTransaction: (transaction: Transaction) => void;
  onClick?: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
  deleteTransaction,
  openFormUpdateTransaction,
  onClick,
}) => {
  const formatDate = (date: string | Date) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString();
  };

  return (
    <li className="transaction-card" onClick={onClick}>
      <div className="transaction-card-header">
        <div className="transaction-card-header-left">
          <p>{formatDate(transaction.date)}</p>
          <h1>{transaction.name}</h1>
        </div>
        <div className="transaction-card-header-right">
          <p>{transaction.amount}đ</p>
        </div>
      </div>
      <div className="transaction-card-divider">
        {transaction.category === "Income" ? (
          <p style={{ color: "green" }}>Income++</p>
        ) : (
          <p style={{ color: "red" }}>Expense--</p>
        )}
        <p>{transaction.type}</p>
      </div>
      <div className="transaction-action">
        <div className="action-left">
          <Button
            type="primary"
            onClick={(e) => {
              e.stopPropagation();
              openFormUpdateTransaction(transaction);
            }}
          >
            Edit
          </Button>
        </div>
        <div
          className="action-divider"
          style={{ border: "1px solid white" }}
        ></div>
        <div className="action-right">
          <Button
            type="primary"
            danger
            onClick={(e) => {
              e.stopPropagation();
              deleteTransaction(transaction.id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TransactionCard;
