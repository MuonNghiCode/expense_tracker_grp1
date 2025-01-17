import { Button } from "antd";
import React from "react";
import FormAddTransaction from "../../Components/FormAddTransaction/FormAddTransaction";
import TransactionList from "../../Components/TransactionList/TransactionList";

const TransactionHistory = () => {
  const [showFormAddTransaction, setShowFormAddTransaction] =
    React.useState(false);

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
      <TransactionList />
      <FormAddTransaction
        showFormAddTransaction={showFormAddTransaction}
        handleCloseFormAddTransaction={handleCloseFormAddTransaction}
      />
    </div>
  );
};

export default TransactionHistory;
