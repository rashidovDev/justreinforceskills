import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {
  
    const posts = useSelector(state => state.posts.people)

    const renderPosts = posts.map((post, idx) => (
        <div key={idx + 1}>
            <h1>{post.name}</h1>
            <p>{post.age}</p>
        </div>
    ))
  return (
    <div>
        <h1>PostList</h1>
       {renderPosts}
        </div>

  )
}

export default PostList