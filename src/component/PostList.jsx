import React from 'react'
import PostAuth from './PostAuth'
import TimeManage from './TimeManage'


const PostList = ({post}) => {

  return (
    <div className='border-4 border-b-indigo-500 p-5 rounded-[10px] my-5'>
       <img src={post.image} alt="imag" className='w-[100%]' />
       <h1 className='text-[24px] font-semibold'>{post.title}</h1>
       <p>{post.content}</p>
       <div><PostAuth userId={post.userId} /></div>
       <div><TimeManage timeStamp={post.date}/></div>
    </div>
  )
}

export default PostList