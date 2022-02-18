import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({ expensesData }) {
  const [pickedYear, setPickedYear] = useState('');

  const changePickedYear = (newPickedYear) => {
    setPickedYear(newPickedYear)
  }

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onChangePickedYear={changePickedYear} />
        {
          expensesData.map(expenseItem => (
            <ExpenseItem key={expenseItem.id} expenses={expenseItem} />
          ))
        }
      </div>
    </div>
  )
}

export default Expenses;