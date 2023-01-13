import React from 'react'
import AddPost from './AddPost'
import Counter from './component/Counter'
import PostList from './PostList'

const App = () => {
  return (
    <div>
      <Counter/>
      <AddPost/>
      <PostList/>
    </div>
  )
}

export default App