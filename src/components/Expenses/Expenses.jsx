import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [_yearFilter, setYearFilter] = useState('2020');

  const filterHandler = year => {
    setYearFilter(year);
  };

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(_yearFilter));

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={_yearFilter} onFilter={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;