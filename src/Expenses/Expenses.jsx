import ExpenseItem from './ExpenseItem';
import Card from '../components/UI/Card';
import './Expenses.css';

function Expenses({ expenses }) {
  return (
    <Card className='expenses'>
      {expenses.map(expense => {
        return <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
      })}
    </Card>
  );
}

export default Expenses;