import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses not Found</h2>;
  }
  return (
    <ul>
      {props.items.map((value) => (
        <ExpenseItem
          key={value.id}
          title={value.title}
          amount={value.amount}
          date={value.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
