import React from 'react';
import User from './User';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {

  return <div className={styles.users}>
    {users.map(user => {
      return <User key={user.id} user={user} />
    })}
  </div>
}

export default UsersList;