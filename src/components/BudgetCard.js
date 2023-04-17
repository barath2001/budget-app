import { currencyFormatter } from "../utils";
import "./BudgetCard.css";
import ProgressBar from "./UI/ProgressBar";
import Button from "./UI/Button";

export default function BudgetCard({
  name,
  amount,
  max,
  onAddExpenseClick,
  onViewExpenseClick,
}) {
  const maxContent = max ? ` / ${currencyFormatter.format(max)}` : "";

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-name">{name}</div>
        <div className="card-amount">
          {currencyFormatter.format(amount)}
          {maxContent}
        </div>
      </div>
      {max && <ProgressBar value={amount} max={max} />}
      <div className="card-actions">
        {onAddExpenseClick && (
          <Button
            text={"Add Expense"}
            variant="secondary"
            onClick={onAddExpenseClick}
          />
        )}
        {onViewExpenseClick && (
          <Button text={"View Expenses"} onClick={onViewExpenseClick} />
        )}
      </div>
    </div>
  );
}
