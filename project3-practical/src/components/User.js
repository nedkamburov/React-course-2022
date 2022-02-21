import React from 'react'

const User = ({ user }) => {
  return <div className="user">
    {user.username} ({user.age} years old)
  </div>
}

export default User