import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, incByAmount, reset } from '../store/slice/counterSlice'

const Counter = () => {  
  const counter = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  
  return (
    <div className='m-10'>
        <div>{counter}</div>
        <div>
            <button onClick={() => dispatch(inc())} className='p-2'>+</button>
            <button onClick={() => dispatch(dec())} className='p-2'>-</button>
            <button onClick={() => dispatch(incByAmount(4))} className='p-2'>incByAmount</button>
            <button onClick={() => dispatch(reset())} className='p-2'>reset</button>
        </div>
        </div>
  )
}

export default Counter;
