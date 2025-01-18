import { Transaction } from "../../Models/Transaction";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    name: "Salary",
    amount: 5000,
    date: new Date("2023-01-15"),
    category: "Income",
    type: "Bank",
    description: "Monthly salary payment",
  },
  {
    id: "2",
    name: "Groceries",
    amount: -150,
    date: new Date("2023-01-20"),
    category: "Expense",
    type: "Card",
    description: "Weekly grocery shopping",
  },
  {
    id: "3",
    name: "Utilities",
    amount: -200,
    date: new Date("2023-01-25"),
    category: "Expense",
    type: "Cash",
    description: "Monthly utility bills",
  },
];

