// import Expenses from "../Expenses/Expenses";
// import ExpenseItem from '../Expenses/ExpenseItem';
// import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const filterSelectHandler = (event) => {
    
    props.onChangeFilter(event.target.value);
    // ExpenseItem.filter((value) => {
    //   if ( value === ExpenseDate.year) {
    //     return year.ExpenseItem;
    //   }
    // });
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterSelectHandler}>
          <option value="2022">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2022">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
