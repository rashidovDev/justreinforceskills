import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdd } from './store/slice/postsSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddPost = () => {

    const [post, setPost] = useState({
        name : '',
        age : ''
    })

const dispatch = useDispatch()

const addPosts = (e) => {
    e.preventDefault()
    const postt = {
        id : new Date(),
        name : post.name,
        age : post.age
    }
    console.log(postt)
        dispatch(postAdd(postt))
}
  return (
    <form onSubmit={addPosts}>
        <label htmlFor="name">
            Name
        </label>
        <input 
        type="text"
        name="name"
        value={post.name}
        onChange={(e) => setPost({...post, name : e.target.value})}
         />
         <label htmlFor="age">
            Age
        </label>
        <input 
        type="text"
        name="age"
        value={post.age}
        onChange={(e) => setPost({...post, age : e.target.value})}
         />
         <button>Add post</button>
    </form>
  )
}

export default AddPost