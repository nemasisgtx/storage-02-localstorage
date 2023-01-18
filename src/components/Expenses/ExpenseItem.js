import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, SetTitle] = useState(props.title);
  // const clickHandler = () => {
  //   SetTitle("Updated!");
  //   console.log(title);
  //   // const expenseDate = new Date(2021, 2, 28);
  //   // const expenseTitle = 'Car Insurance 1';
  //   // const expenseAmount = 500.50;
  // };

  return (
    <Card className=" expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button >EXP</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
