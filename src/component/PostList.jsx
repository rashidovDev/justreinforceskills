import React from 'react'

const PostList = ({post}) => {
  return (
    <div className='border-4 border-[#BB2026] p-5 rounded-[10px] my-5'>
       <h1 className='text-[24px] font-semibold'>{post.title}</h1>
       <p>{post.content}</p>
    </div>
  )
}

export default PostList