import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TransactionDetail.css";
import { Transaction } from "../../Models/Transaction";
import { useTransactionService } from "../../Services/TransactionService";

const TransactionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [transaction, setTransaction] = useState<Transaction | undefined>(
    undefined
  );
  const navigate = useNavigate();
  const { transactions } = useTransactionService();

  useEffect(() => {
    const foundTransaction = transactions.find((t) => t.id === id);
    setTransaction(foundTransaction);
  }, [id, transactions]);

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  // Convert date to Date object if it's a string
  const transactionDate =
    typeof transaction.date === "string"
      ? new Date(transaction.date)
      : transaction.date;

  return (
    <div className="transaction-detail">
      <h1>Transaction Detail</h1>
      <p>
        <strong>ID:</strong> {transaction.id}
      </p>
      <p>
        <strong>Name:</strong> {transaction.name}
      </p>
      <p>
        <strong>Amount:</strong> {transaction.amount}đ
      </p>
      <p>
        <strong>Date:</strong> {transactionDate.toDateString()}
      </p>
      <p>
        <strong>Category:</strong> {transaction.category}
      </p>
      <p>
        <strong>Type:</strong> {transaction.type}
      </p>
      <p>
        <strong>Description:</strong> {transaction.description}
      </p>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default TransactionDetail;
