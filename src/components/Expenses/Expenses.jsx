import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

const Expenses = ({ expenses }) => {
  const [_yearFilter, setYearFilter] = useState('2020');

  const filterHandler = year => {
    setYearFilter(year);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={_yearFilter} onFilter={filterHandler} />
      {expenses
        .filter(expense => expense.date.getFullYear() === parseInt(_yearFilter))
        .map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        })}
    </Card>
  );
}

export default Expenses;