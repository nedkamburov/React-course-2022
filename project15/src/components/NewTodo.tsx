import React, { useContext, useRef } from 'react'
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);
  
  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    } 

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" name="text" id="text" />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;