import React from "react";

import "./Button.css";

export default function Button({ text, variant = "", ...additionalProps }) {
  return (
    <button className={`Button ${variant}`} {...additionalProps}>
      {text}
    </button>
  );
}
