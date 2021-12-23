import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExspenseDataHandler = expenseData => {
    const expense = { ...expenseData, id: Math.random().toString() };
    props.onAddExpense(expense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExspenseDataHandler} />
    </div>
  );
};

export default NewExpense;