import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({ expensesData }) {

  return (
    <div className="expenses">
      {
        expensesData.map(expenseItem => (
          <ExpenseItem key={expenseItem.id} expenses={expenseItem} />
        ))
      }
    </div>
  )
}

export default Expenses;