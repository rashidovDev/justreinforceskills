import React from 'react'
import AddPost from './AddPost'
import Modal from './component/Modal/Modal'
import Navbar from './component/Navbar'
import Posts from './component/Posts'
import User from './component/User'

const App = () => {
  return (
    <>
      <Navbar/> 
      <Posts/>
      <Modal/>
    </>
  )
}

export default App