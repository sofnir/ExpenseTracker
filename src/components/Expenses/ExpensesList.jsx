import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.length === 0
        ? (<h2 className="expenses-list__fallback">Found no expenses.</h2>)
        : (expenses.map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        }))}
    </ul>
  );
};

export default ExpensesList;