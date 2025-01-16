import { Transaction } from "../Models/Transaction";

const STORAGE_KEY = "transactions";

const saveToLocalStorage = (transactions: Transaction[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

const loadFromLocalStorage = (): Transaction[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

let transactions: Transaction[] = loadFromLocalStorage();

export const TransactionService = {
  createTransaction: (transaction: Omit<Transaction, "id">): Transaction => {
    const newTransaction = { ...transaction, id: Date.now().toString() };
    transactions.push(newTransaction);
    saveToLocalStorage(transactions);
    return newTransaction;
  },

  getTransactions: (): Transaction[] => {
    return transactions;
  },

  getTransactionById: (id: string): Transaction | undefined => {
    return transactions.find((transaction) => transaction.id === id);
  },

  updateTransaction: (
    id: string,
    updatedTransaction: Partial<Transaction>
  ): Transaction | undefined => {
    const index = transactions.findIndex(
      (transaction) => transaction.id === id
    );
    if (index !== -1) {
      transactions[index] = { ...transactions[index], ...updatedTransaction };
      saveToLocalStorage(transactions);
      return transactions[index];
    }
    return undefined;
  },

  deleteTransaction: (id: string): boolean => {
    const index = transactions.findIndex(
      (transaction) => transaction.id === id
    );
    if (index !== -1) {
      transactions.splice(index, 1);
      saveToLocalStorage(transactions);
      return true;
    }
    return false;
  },
};
