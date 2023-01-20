import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import Card from '../UI/Card';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
    setShowForm(false);
  };

  const [ShowForm, setShowForm] = useState(false);

  const startEditingHandler = () => setShowForm(!ShowForm);

  const stopExpenseHandler = () => setShowForm(false);

  return (
    <div className="new-expense">
      {/* // {!ShowForm && (
    //   <button
    //     className="top-modal-btn"
    //     onClick={toggleShowForm}
    //   >
    //     {ShowForm ? "Hide" : "Add New Expense"}
    //   </button>
    // )} */}
    <Card>
      {!ShowForm && (
        <button className="top-modal-btn" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
    </Card>
      {ShowForm && (
        <ExpenseForm
          onCancel={stopExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
