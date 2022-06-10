import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEdit, setIsEdit] = useState(false);
  const saveExpenseDataHandler = (enterData) => {
    const expenseData = {
      ...enterData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };
  const startEditingHandler = () => {
    setIsEdit(true);
  };

  const stopEditingHandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
