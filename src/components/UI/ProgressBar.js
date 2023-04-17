import "./ProgressBar.css";

export default function ProgressBar({ value, max }) {
  const fillPercentage = (value / max) * 100;
  const fillClass = getProgressBarFillColor(fillPercentage);
  return (
    <div className="progress-bar">
      <div
        className={`fill ${fillClass}`}
        style={{ width: fillPercentage + "%" }}
      ></div>
    </div>
  );
}

function getProgressBarFillColor(fillPercentage) {
  if (fillPercentage <= 50) return "primary";
  else if (fillPercentage <= 75) return "warning";
  else return "danger";
}
