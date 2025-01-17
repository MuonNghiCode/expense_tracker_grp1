import { Button } from "antd";
import React from "react";
import FormAddTransaction from "../../Components/FormAddTransaction/FormAddTransaction";
import TransactionList from "../../Components/TransactionList/TransactionList";
import { useTransactionService } from "../../Services/TransactionService";

const TransactionHistory = () => {
  const [showFormAddTransaction, setShowFormAddTransaction] =
    React.useState(false);
  const {
    transactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  } = useTransactionService();

  const handleOpenFormAddTransaction = () => {
    setShowFormAddTransaction(true);
  };

  const handleCloseFormAddTransaction = () => {
    setShowFormAddTransaction(false);
  };

  return (
    <div>
      <Button type="primary" onClick={handleOpenFormAddTransaction}>
        New Transaction
      </Button>
      <TransactionList
        transactions={transactions}
        updateTransaction={updateTransaction}
        deleteTransaction={deleteTransaction}
      />
      <FormAddTransaction
        showFormAddTransaction={showFormAddTransaction}
        handleCloseFormAddTransaction={handleCloseFormAddTransaction}
        createTransaction={createTransaction}
      />
    </div>
  );
};

export default TransactionHistory;
