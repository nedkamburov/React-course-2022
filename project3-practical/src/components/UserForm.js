import React, { useRef, useState } from 'react';
import Button from './UI/Button';
import Card from './UI/Card';
import Modal from './UI/Modal';
import styles from './UserForm.module.css';


const UserForm = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState('');

  const validateInput = (username, age) => {
    if (username.length === 0 && age.length === 0) {
      setError('Please, enter a valid name and age (non-empty values).');
      return;
    } else if (username.length === 0) {
      setError('Please, enter a valid name.');
      return;
    } else if (age.length === 0 || parseInt(age) < 0) {
      setError(`Please, enter a valid age, not ${parseInt(age) < 0 ? 'negative ' + age : 'an empty value'}`);
      return;
    }
    return true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = +ageInputRef.current.value;

    if (validateInput(enteredName, enteredAge)) {
      const newUser = {
        id: Math.random(),
        username: enteredName,
        age: enteredAge
      };

      onAddUser(newUser);
      nameInputRef.current.value = ''; //resetting the fields in a hacky way but it works
      ageInputRef.current.value = ''
    }
  }

  return (
    <Card className={styles.input}>
      {error && <Modal error={error} onModalClose={() => { setError(null) }} />}
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" name="username" id="username"
          ref={nameInputRef} />
        <label htmlFor='age'>Age (Years)</label>
        <input type="text"
          name="age"
          id="age"
          ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default UserForm;