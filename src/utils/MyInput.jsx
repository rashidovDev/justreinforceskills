import React from 'react'

const MyInput = (props) => {
  return (
    <div className='my-5 md:w-[550px] w-[250px] m-auto flex items-center'>
        <label htmlFor="" className='mr-2 text-[#999] text-[14px] w-[100px] flex justify-end'>
            {props.name}
        </label>
        <input 
        className={`border md:w-[300px] w-[220px]  border-[#DEE2E6] outline-[#407BFF] px-3 py-[6px]`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        />
    </div>
  )
}

export default MyInput;