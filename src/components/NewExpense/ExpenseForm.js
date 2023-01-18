import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,enteredTitle: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    SetEnteredAmount("");
    SetEnteredDate("");
    SetEnteredTitle("");
  };

  return (
    <Card>
      <div className="expense-form_outer">
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control form-title">
              <label className="form-label-title">Title: </label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control form-amount">
              <label className="form-label-amount">Amount: </label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control form-date">
              <label className="form-label-date">Date: </label>
              <input
                className="form-inner-date-module"
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                value={enteredDate}
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
