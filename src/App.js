import React from 'react'
import AddPost from './AddPost'
import Counter from './component/Counter'
import User from './component/User'
import PostList from './PostList'

const App = () => {
  return (
    <div>
      <User/>
      <Counter/>
      <AddPost/>
      <PostList/>
    </div>
  )
}

export default App