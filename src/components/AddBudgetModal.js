import React, { useRef } from "react";
import Modal from "./UI/Modal";
import "./modalForm.css";
import Button from "./UI/Button";
import { useBudgets } from "../contexts/BudgetsContext";

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();

  const { addBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    handleClose();
  }

  return (
    <Modal show={show} onClose={handleClose}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <h1 className="modal-form-title">New Budget</h1>
        <div className="modal-form-control">
          <label>Name</label>
          <input ref={nameRef} type="text" required />
        </div>
        <div className="modal-form-control">
          <label>Maximum Spending</label>
          <input ref={maxRef} type="number" min={0} step={0.01} required />
        </div>
        <div className="modal-form-action">
          <Button text={"Add"} variant="primary" type="submit" />
        </div>
      </form>
    </Modal>
  );
}
