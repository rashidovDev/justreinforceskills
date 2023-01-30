import React, { useState } from 'react'
import { Save, XCircle } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../../store/slice/modalSlice'
import { postAdd } from '../../store/slice/postsSlice'
import { selectAllUsers } from '../../store/slice/userSlice'
import MyInput from '../../utils/MyInput'
import "./modal.css"

const Modal = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState()
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const dispatch = useDispatch()

    const addPost = (e) => {
      e.preventDefault()
      dispatch(postAdd(title, content,image.name, userId))
      dispatch(setModal())
      setTitle('')
      setContent('')    
    }

    console.log(image)

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const isModal = useSelector(state => state.modal.isModal)
  return (
    <div className={`top-0 left-0 right-0 bottom-0 ${isModal ? `fixed` : `hidden`} modal flex justify-center items-center`}>
        <div className='bg-[#fff] rounded-[10px] w-[350px] md:w-[500px] m-auto relative md:p-5 p-4'>
             <h1 className='text-center text-[25px]'>Add Post</h1>
             <div className='w-[100%] m-auto'>
             <label className='md:ml-16' htmlFor="postSelect">Name</label>
             <select
             id='postSelect'
             value={userId}
             onChange={(e) => setUserId(e.target.value)}
             className={`border md:w-[300px] w-[220px]  border-[#DEE2E6] outline-[#407BFF] px-3 py-[6px]`} >
                <option value=''></option>
             {users.map((user, idx) => (
               <option key={idx + 1} value={user.id}>
                    {user.name}
               </option>
             ))}
        </select>
             <div className='md:ml-0 ml-7'>
             <MyInput name="Title" placeholder='Enter title' value={title} setValue={setTitle} />
             </div>
             <MyInput name="Content" placeholder='Enter content' value={content} setValue={setContent} />
             <label className='md:ml-16' htmlFor="postImage">Name</label>
             <input type="file" 
       id="avatar" name="avatar"
       onChange={(e) => setImage(e.target.files[0])}
       accept="image/png, image/jpeg"  className={`border md:w-[300px] w-[220px]  border-[#DEE2E6] outline-[#407BFF] px-3 py-[4px]`}/>
             <div className='mt-10 flex justify-end'>
        <button 
        disabled = {!canSave}
        onClick={addPost}  className='p-3 rounded-[5px] bg-[#5C3EBA] text-[#fff] text-[14px] px-1 py-2 flex  justify-center items-center w-[70px]'>
        <Save size={16}/> <span className='pl-1'>Save</span> </button>
        <button onClick={() => dispatch(setModal())}  className='p-3 ml-2 rounded-[5px] bg-[red] text-[#fff] text-[14px] px-1 py-2 flex justify-center items-center w-[70px]'>
        <XCircle size={16}/> <span className='pl-1'>Save</span> </button>
    </div>
             </div>

        </div>
    </div>
  )
}

export default Modal