export type TransactionType = "Cash" | "Card" | "Bank";

export type TransactionCategory = "Income" | "Expense";

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: Date;
  category: TransactionCategory;
  type: TransactionType;
}
