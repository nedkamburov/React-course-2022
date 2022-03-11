
import  { createContext, useState } from 'react';

import TodoModel from '../models/todo';

type TodosContextObj = {
  items: TodoModel[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: ()=> {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoModel(todoText);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    }) 
  }

  const removeTodoHandler = (deletedTodoText: string) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.id !== deletedTodoText)
    }) 
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }
  return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
}

export default TodosContextProvider;