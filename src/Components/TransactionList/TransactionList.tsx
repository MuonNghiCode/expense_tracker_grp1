import React, { useEffect } from "react";
import { TransactionService } from "../../Services/TransactionService";
import { Transaction } from "../../Models/Transaction";
import TransactionCard from "../TransactionCard/TransactionCard";
import FormUpdateTransaction from "../FormUpdateTransaction/FormUpdateTransaction";

const TransactionList: React.FC = () => {
  const [transactionList, setTransactionList] = React.useState<Transaction[]>(
    []
  );
  const [formUpdateTransaction, setFormUpdateTransaction] =
    React.useState(false);
  const [initialTransaction, setInitialTransaction] =
    React.useState<Transaction | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await TransactionService.getTransactions();
      setTransactionList(transactions);
    };
    fetchTransactions();
  }, []);

  const handleDeleteTransaction = (id: string) => {
    TransactionService.deleteTransaction(id);
    const newTransactionList = transactionList?.filter(
      (transaction) => transaction.id !== id
    );
    if (newTransactionList) {
      setTransactionList(newTransactionList);
    }
  };

  const handleUpdateTransaction = (transaction: Transaction) => {
    TransactionService.updateTransaction(transaction.id, transaction);
    const newTransactionList = transactionList?.map((t) =>
      t.id === transaction.id ? transaction : t
    );
    if (newTransactionList) {
      setTransactionList(newTransactionList);
    }
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

  console.log("Transaction list:", transactionList);
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
