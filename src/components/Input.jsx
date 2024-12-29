import React from 'react'
import { useRecoilState } from 'recoil'
import {todoState, inputState } from '../state/task'

const Input = () => {
    const [todo,setTodo] = useRecoilState(todoState)
    const [inputTask, setInputTask] = useRecoilState(inputState)
    const handleTaskAdded = () => {
        if(inputTask !== ""){
            setTodo([...todo, inputTask])
            setInputTask("")
        }
    }
  return (
    <div className="m-4 mx-auto max-w-lg flex flex-row justify-between" >
        <input 
            type="text" 
            placeholder="Add task"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            className='flex-grow bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 mr-2 p-2 text-lg'
        />
        <button onClick={handleTaskAdded} className='bg-violet-300 rounded-md text-2xl font-bold text-violet-400 hover:bg-violet-200 px-4 py-2'>+</button>
    </div>
  )
}

export default Input