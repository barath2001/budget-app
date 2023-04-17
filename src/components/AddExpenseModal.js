import React, { useRef } from "react";
import Modal from "./UI/Modal";
import "./modalForm.css";
import Button from "./UI/Button";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";

export default function AddExpenseModal({
  show,
  handleClose,
  defaultBudgetId,
}) {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const { budgets, addExpense } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    });
    handleClose();
  }

  return (
    <Modal show={show} onClose={handleClose}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <h1 className="modal-form-title">New Expense</h1>
        <div className="modal-form-control">
          <label>Description</label>
          <input ref={descriptionRef} type="text" required />
        </div>
        <div className="modal-form-control">
          <label>Amount</label>
          <input ref={amountRef} type="number" min={0} step={0.01} required />
        </div>
        <div className="modal-form-control">
          <label>Budget</label>
          <select ref={budgetIdRef} defaultValue={defaultBudgetId}>
            <option value={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-form-action">
          <Button text={"Add"} variant="primary" type="submit" />
        </div>
      </form>
    </Modal>
  );
}
