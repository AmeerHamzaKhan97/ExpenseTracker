import React, { useState } from "react";

//
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleHandler = (e) => {
    setEnterTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setEnterAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setEnterDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    // console.log(expenseDate);
    props.onSaveExpenseData(expenseDate);
    setEnterAmount("");
    setEnterDate("");
    setEnterTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enterTitle} type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enterAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enterDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
