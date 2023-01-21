import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MyInput from '../../utils/MyInput'
import "./modal.css"

const Modal = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const isModal = useSelector(state => state.modal.isModal)
  return (
    <div className={`top-0 left-0 right-0 bottom-0 ${isModal ? `fixed` : `hidden`} modal flex justify-center items-center`}>
        <div className='bg-[#fff] rounded-[10px] w-[350px] md:w-[500px] m-auto relative md:p-5 p-4'>
             <h1 className='text-center text-[25px]'>Add Post</h1>
             <div className='w-[100%] m-auto'>
             <MyInput name="Title" placeholder='Enter title' value={title} setValue={setTitle} />
             <MyInput name="Content" placeholder='Enter content' value={content} setValue={setContent} />
             </div>
        </div>
    </div>
  )
}

export default Modal