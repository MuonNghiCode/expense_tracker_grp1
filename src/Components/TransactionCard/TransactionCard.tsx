import React from "react";
import { Transaction } from "../../Models/Transaction";
import "./TransactionCard.css";
import { Button } from "antd";

interface TransactionCardProps {
  transaction: Transaction;
  deleteTransaction: (id: string) => void;
  openFormUpdateTransaction: (transaction: Transaction) => void;
}
const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
  deleteTransaction,
  openFormUpdateTransaction,
}) => {
  const formatDate = (date: string | Date) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString();
  };

  return (
    <>
      <li className="transaction-card">
        <div className="transaction-card-header">
          <p>{formatDate(transaction.date)}</p>
          <h1>{transaction.name}</h1>
          <p>{transaction.amount}</p>
        </div>
        <div className="transaction-card-divider">
          <p>{transaction.category}</p>
          <p>{transaction.type}</p>
        </div>
        <div className="transaction-action">
          <Button
            type="primary"
            onClick={() => openFormUpdateTransaction(transaction)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => deleteTransaction(transaction.id)}
          >
            Delete
          </Button>
        </div>
      </li>
    </>
  );
};

export default TransactionCard;
