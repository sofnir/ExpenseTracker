import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExspenseDataHandler = expenseData => {
    expenseData.date = new Date(expenseData.date);
    const expense = { ...expenseData, id: Math.random().toString() };
    onAddExpense(expense);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {isEditing
        ? <ExpenseForm onSaveExpenseData={saveExspenseDataHandler} onCancel={stopEditingHandler} />
        : <button onClick={startEditingHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;