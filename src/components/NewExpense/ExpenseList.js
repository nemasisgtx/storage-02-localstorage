import "./ExpenseList.css";
import ExpenseItem from "../Expenses/ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">No Expense Found!</h2>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;