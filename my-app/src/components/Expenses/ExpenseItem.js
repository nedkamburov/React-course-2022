import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({ expenses }) {
  const { title: expenseTitle, amount: expenseAmount, date: expenseDate } = expenses;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">€{expenseAmount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;
