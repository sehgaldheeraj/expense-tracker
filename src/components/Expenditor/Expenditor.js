import React from "react";
import "./Expenditor.css";
const Expenditor = () => {
  return (
    <div className="expenditor-container">
      <div className="expenditor-card">
        <h3>Wallet Balance</h3>
        <button>+ Add Income</button>
      </div>
      <div className="expenditor-card">
        <h3>Expenses</h3>
        <button>+ Add Expenses</button>
      </div>
      <div className="expenditor-card">
        <h1>Chart</h1>
      </div>
    </div>
  );
};

export default Expenditor;
