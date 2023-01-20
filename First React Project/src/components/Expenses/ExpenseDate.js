import "./ExpenseDate.css";
import '../UI/Card'

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">
        <p>{day}</p>
      </div>
      <div className="expense-date__month">
        <p>{month} </p>
      </div>
      <div className="expense-date__year">
        <p> {year}</p>
      </div>
    </div>
  );
}
export default ExpenseDate;
