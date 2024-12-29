import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoState } from '../state/task'

const Header = ({}) => {
    const todo = useRecoilValue(todoState)
  return (
    <div className='p-4 rounded shadow-md text-center'>
        <p className='text-white text-3xl font-bold font-sans'>What are your plans for Today ?</p>
        <p className='text-xl mt-2 font-mono'><span className='text-violet-300'>You have</span> <span className='text-violet-100'>{todo.length}</span> <span className='text-purple-200 '>open task.</span></p>
    </div>
  )
}

export default Header
