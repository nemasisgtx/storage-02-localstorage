import Card from "../UI/Card";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const formHandler = () => {
    
  // };
  const titleChangeHandler = () => {
    console.log("Title Changed!");
  };
  return (
    <Card>
    <div className="new-expense__controls">
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
        </div>
      </div>
    </form>
    </div>
    </Card>
  );
};

export default ExpenseForm;