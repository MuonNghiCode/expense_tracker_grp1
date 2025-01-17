import React, { useEffect, useState } from "react";
import { Transaction } from "../../Models/Transaction";
import TransactionCard from "../TransactionCard/TransactionCard";
import FormUpdateTransaction from "../FormUpdateTransaction/FormUpdateTransaction";
import { useTransactionService } from "../../Services/TransactionService";

const TransactionList: React.FC = () => {
  const [formUpdateTransaction, setFormUpdateTransaction] =
    React.useState(false);
  const [initialTransaction, setInitialTransaction] =
    React.useState<Transaction | null>(null);
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);
  const { transactions, updateTransaction, deleteTransaction } =
    useTransactionService();

  useEffect(() => {
    const fetchTransactions = async () => {
      setTransactionList(transactions);
    };

    fetchTransactions();
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
            <div key={transaction.id}>
              <TransactionCard
                transaction={transaction}
                deleteTransaction={handleDeleteTransaction}
                openFormUpdateTransaction={openFormUpdateTransaction}
              />
            </div>
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
