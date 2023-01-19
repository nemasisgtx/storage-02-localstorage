import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  const [ShowForm, setShowForm] = useState(false);

  const toggleShowForm = () => setShowForm(!ShowForm);
  


  return (
    <div className="new-expense">
      {!ShowForm && (
        <button
          className="top-modal-btn"
          onClick={toggleShowForm}
        >
          {ShowForm ? "Hide" : "Add New Expense"}
        </button>
      )}
      {ShowForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};
export default NewExpense;
