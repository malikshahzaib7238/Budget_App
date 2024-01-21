import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget, remaining, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const isBudgetExceeded = totalExpenses > budget;
  const isRemainingNegative = remaining < 0;

  if (isRemainingNegative) {
    // Use window.alert to display a prompt when budget is lower than remaining
    window.alert("You cannot reduce the budget value lower than the spending");
  }

  const alertType = isBudgetExceeded ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency}
        {budget - totalExpenses}
      </span>
    </div>
  );
};

export default Remaining;
