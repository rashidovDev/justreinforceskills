import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdd } from './store/slice/postsSlice'

const AddPost = () => {

    const [post, setPost] = useState({
        name : '',
        age : ''
    })

const dispatch = useDispatch()

const addPosts = (e) => {
    e.preventDefault()
        dispatch(postAdd(post.name, post.age))
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