import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockTransactions } from "./Mockdata";
import "./TransactionDetail.scss";
import { Transaction } from "../../Models/Transaction";

const TransactionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [transaction, setTransaction] = useState<Transaction | undefined>(
    undefined
  );
  const navigate = useNavigate();

  useEffect(() => {
    const foundTransaction = mockTransactions.find((t) => t.id === id);
    setTransaction(foundTransaction);
  }, [id]);

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

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
        <strong>Amount:</strong> {transaction.amount}
      </p>
      <p>
        <strong>Date:</strong> {transaction.date.toDateString()}
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
