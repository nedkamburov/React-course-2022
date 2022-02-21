import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  const DUMMY_USERS = [
    { id: Math.random(), username: 'Valio', age: 25 },
    { id: Math.random(), username: 'Zhana', age: 35 }
  ]

  const [users, setUsers] = useState(DUMMY_USERS);
  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    })
  }

  return (
    <>
      <UserForm onAddUser={addUser} />
      <UsersList users={users} />
    </>
  );
}

export default App;
