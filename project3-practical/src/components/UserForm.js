import React, { useState } from 'react';
import Button from './UI/Button';
import Card from './UI/Card';
import Modal from './UI/Modal';
import styles from './UserForm.module.css';

const UserForm = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const onUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  }

  const onAgeChange = (e) => {
    const newAge = e.target.value;
    setAge(+newAge);
  }

  const validateInput = (username, age) => {
    if (username.length === 0 && age.length === 0) {
      setError('Please, enter a valid name and age (non-empty values).');
      setShowModal(true);
      return;
    } else if (username.length === 0) {
      setError('Please, enter a valid name.');
      setShowModal(true);
      return;
    } else if (age.length === 0 || parseInt(age) < 0) {
      setError(`Please, enter a valid age, not ${parseInt(age) < 0 ? 'negative ' + age : 'an empty value'}`);
      setShowModal(true);
      return;
    }
    return true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validateInput(username, age)) {
      const newUser = {
        id: Math.random(),
        username: username,
        age: age
      };

      onAddUser(newUser);
    }
  }

  return (
    <Card className={styles.input}>
      {showModal && <Modal error={error} onModalClose={() => { setShowModal(false) }} />}
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" name="username" id="username" value={username} onChange={onUsernameChange} />
        <label htmlFor='age'>Age (Years)</label>
        <input type="text" name="age" id="age" onChange={onAgeChange} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default UserForm;