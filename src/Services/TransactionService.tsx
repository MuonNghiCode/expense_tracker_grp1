import { useReducer } from "react";
import { Transaction } from "../Models/Transaction";

const STORAGE_KEY = "transactions";

const saveToLocalStorage = (transactions: Transaction[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

const loadFromLocalStorage = (): Transaction[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

type TransactionAction =
  | { type: "CREATE"; payload: Omit<Transaction, "id"> }
  | {
      type: "UPDATE";
      payload: { id: string; updatedTransaction: Partial<Transaction> };
    }
  | { type: "DELETE"; payload: { id: string } };

const transactionReducer = (
  state: Transaction[],
  action: TransactionAction
): Transaction[] => {
  switch (action.type) {
    case "CREATE":
      const newTransaction = { ...action.payload, id: Date.now().toString() };
      const newState = [...state, newTransaction];
      saveToLocalStorage(newState);
      return newState;
    case "UPDATE":
      const updatedState = state.map((transaction) =>
        transaction.id === action.payload.id
          ? { ...transaction, ...action.payload.updatedTransaction }
          : transaction
      );
      saveToLocalStorage(updatedState);
      return updatedState;
    case "DELETE":
      const filteredState = state.filter(
        (transaction) => transaction.id !== action.payload.id
      );
      saveToLocalStorage(filteredState);
      return filteredState;
    default:
      return state;
  }
};

export const useTransactionService = () => {
  const [transactions, dispatch] = useReducer(
    transactionReducer,
    [],
    loadFromLocalStorage
  );

  const createTransaction = (transaction: Omit<Transaction, "id">) => {
    dispatch({ type: "CREATE", payload: transaction });
  };

  const updateTransaction = (
    id: string,
    updatedTransaction: Partial<Transaction>
  ) => {
    dispatch({ type: "UPDATE", payload: { id, updatedTransaction } });
  };

  const deleteTransaction = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  return {
    transactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  };
};
