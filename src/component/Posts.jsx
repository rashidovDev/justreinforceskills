import React from 'react'
import { PlusCircle } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../store/slice/modalSlice'
import PostList from './PostList'

const Posts = () => {
    const posts = useSelector(state => state.posts.items)

    const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const dispatch = useDispatch()
  return (
    <div  className='md:w-[700px] w-[350px] m-auto'> 
    <div className='mt-10'>
        <button onClick={() => dispatch(setModal())}  className='p-3 rounded-[5px] bg-[#3ECF8E] text-[#fff] text-[14px] px-1 py-2 flex justify-center items-center w-[100px]'>
        <PlusCircle size={16}/> <span className='pl-1'>Add new</span> </button>
    </div>
    <div className=' mb-8 mt-3 bg-[#F8F8F8] rounded-[5px] p-5'>
        <h1 className='text-center text-[32px] rounded-[5px] mb-2'>Posts</h1>
        {orderedPost.map((post, idx) => (
        <PostList key={idx + 1} post={post}/>
        ))}
    </div>
    </div>
  )
}

export default Posts