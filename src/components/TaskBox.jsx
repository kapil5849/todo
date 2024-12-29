import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {todoState} from '../state/task'

const TaskBox = () => {
    const [todo,setTodo] = useRecoilState(todoState)
    useEffect(() => {
        const savedTask = JSON.parse(localStorage.getItem('todoState'))
        if(savedTask){
            setTodo(savedTask)
        }
    },[setTodo])
    useEffect(() => {
        localStorage.setItem('todoState',JSON.stringify(todo))
    },[todo])
    const handleDeleteTask = (index) => {
        const updateTodo = todo.filter((_,i) => (i!==index))
        setTodo(updateTodo)
    }
  return(
    <div className='text-white flex flex-col gap-4 mx-auto max-w-lg'>
        {
            todo.map((task,index) => (
                <div key={index} className='bg-slate-600 hover:border-2 hover:border-white rounded-lg flex justify-between items-center p-6'>
                    <div className='flex flex-col'>
                        <p className='text-xl font-mono text-blue-300'>{task}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <button onClick={() => handleDeleteTask(index)} className='bg-violet-300 rounded-md m-2 p-2 text-sm font-bold text-violet-400 hover:bg-violet-200'>Delete</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TaskBox