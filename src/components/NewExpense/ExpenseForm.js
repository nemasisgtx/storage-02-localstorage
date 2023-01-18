import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };

  return (
    <Card>
      <div className="new-expense__controls">
        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title: </label>
              <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount: </label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date: </label>
              <input className="form-inner-date-module"
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <button className="form-btn">Add Expense</button>
        </form>
      </div>
    </Card>
  );
};

export default ExpenseForm;
