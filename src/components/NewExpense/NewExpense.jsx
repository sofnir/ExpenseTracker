import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const saveExspenseDataHandler = expenseData => {
    expenseData.date = new Date(expenseData.date);
    const expense = { ...expenseData, id: Math.random().toString() };
    onAddExpense(expense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExspenseDataHandler} />
    </div>
  );
};

export default NewExpense;