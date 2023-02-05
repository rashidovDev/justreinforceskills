import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../store/slice/userSlice'

const PostAuth = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const auth = users.find(user => user.id === parseInt(userId))
  return (
    <div>by {auth ? auth.name : "Unknown User"}</div>
  )
}

export default PostAuth;