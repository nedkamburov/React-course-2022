import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";


function Expenses({ expensesData }) {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filteredExpenses = expensesData.filter(expenseItem => expenseItem.date.getFullYear().toString() === filteredYear);

  const changeFilteredYear = (newFilteredYear) => {
    setFilteredYear(newFilteredYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilteredYear={changeFilteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;