import React, { useEffect, useState } from "react";
import { Transaction } from "../../Models/Transaction";
import TransactionCard from "../TransactionCard/TransactionCard";
import FormUpdateTransaction from "../FormUpdateTransaction/FormUpdateTransaction";

interface TransactionListProps {
  transactions: Transaction[];
  updateTransaction: (
    id: string,
    updatedTransaction: Partial<Transaction>
  ) => void;
  deleteTransaction: (id: string) => void;
  handleViewTransactionDetail: (transactionId: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  updateTransaction,
  deleteTransaction,
  handleViewTransactionDetail,
}) => {
  const [formUpdateTransaction, setFormUpdateTransaction] =
    React.useState(false);
  const [initialTransaction, setInitialTransaction] =
    React.useState<Transaction | null>(null);
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactionList(transactions);
  }, [transactions]);

  const handleDeleteTransaction = (id: string) => {
    deleteTransaction(id);
  };

  const handleUpdateTransaction = (transaction: Transaction) => {
    updateTransaction(transaction.id, transaction);
  };

  const openFormUpdateTransaction = (transaction: Transaction) => {
    console.log("Opening form for transaction:", transaction);
    setFormUpdateTransaction(true);
    setInitialTransaction(transaction);
  };

  const handleCloseFormUpdateTransaction = () => {
    setFormUpdateTransaction(false);
  };

  const formatDateForInput = (date: string | Date) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toISOString().split("T")[0];
  };

  console.log("Form update transaction state:", formUpdateTransaction);
  console.log("Initial transaction:", initialTransaction);

  return (
    <>
      <ul>
        {transactionList ? (
          transactionList.map((transaction) => (
            <li key={transaction.id}>
              <TransactionCard
                transaction={transaction}
                deleteTransaction={handleDeleteTransaction}
                openFormUpdateTransaction={openFormUpdateTransaction}
                onClick={() => handleViewTransactionDetail(transaction.id)}
              />
            </li>
          ))
        ) : (
          <p>No transactions</p>
        )}
      </ul>
      {initialTransaction && (
        <FormUpdateTransaction
          showFormUpdateTransaction={formUpdateTransaction}
          handleCloseFormUpdateTransaction={handleCloseFormUpdateTransaction}
          updateTransaction={handleUpdateTransaction}
          initialTransaction={{
            ...initialTransaction,
            date: formatDateForInput(initialTransaction.date),
          }}
        />
      )}
    </>
  );
};

export default TransactionList;
