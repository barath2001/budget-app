import React, { useRef } from "react";
import Modal from "./UI/Modal";
import "./ViewExpensesModal.css";
import Button from "./UI/Button";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";
import { currencyFormatter } from "../utils";

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { budgets, getBudgetExpenses, deleteBudget, deleteExpense } =
    useBudgets();

  if (!budgetId) return null;

  let budgetName;
  if (budgetId === UNCATEGORIZED_BUDGET_ID) {
    budgetName = "Uncategorized";
  } else {
    const budget = budgets.find((budget) => budget.id === budgetId);

    budgetName = !budget || budget.name;
  }

  const expenses = getBudgetExpenses(budgetId);

  return (
    <Modal show={budgetId} onClose={handleClose}>
      <div className="modal-header">
        <h1 className="modal-title">{`${budgetName} expenses`}</h1>
        {budgetId !== UNCATEGORIZED_BUDGET_ID && (
          <Button
            text={"Delete"}
            variant="danger"
            onClick={() => {
              deleteBudget(budgetId);
              handleClose();
            }}
          />
        )}
      </div>
      <div className="modal-expense-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="modal-expense-item">
            <div className="modal-expense-description">
              {expense.description}
            </div>
            <div>{currencyFormatter.format(expense.amount)}</div>
            <Button
              text="X"
              variant="danger"
              onClick={() => deleteExpense(expense.id)}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
}
