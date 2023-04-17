import React from "react";
import BudgetCard from "./BudgetCard";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";

export default function TotalBudgetCard(props) {
  const { expenses } = useBudgets();

  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);

  if (amount === 0) return null;

  return <BudgetCard name={"Total"} amount={amount} {...props} />;
}
