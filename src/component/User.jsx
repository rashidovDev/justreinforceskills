import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../store/slice/userSlice'

const User = () => {
  const user = useSelector(selectAllUsers)
  return (
    <div>
        {user.map(us => (
          <p key={user.id}>{us.name}</p>
        ))}
    </div>
  )
}

export default User