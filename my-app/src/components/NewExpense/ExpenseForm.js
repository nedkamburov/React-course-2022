import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const currentDate = new Date();
  const [enteredDate, setEnteredDate] = useState(currentDate);
  const [isFormHidden, setIsFormHidden] = useState(true);


  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(new Date(e.target.value));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // convert the values to numbers
      date: enteredDate
    }

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate(currentDate);
  }

  const toggleFormHandler = () => {
    setIsFormHidden(!isFormHidden);
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate(currentDate);
  }

  const content = isFormHidden
    ? <button onClick={toggleFormHandler}>Add New Expense</button>
    : (<form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-06-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={toggleFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>);

  return (
    <div>
      {content}
    </div>
  )
}

export default ExpenseForm;
