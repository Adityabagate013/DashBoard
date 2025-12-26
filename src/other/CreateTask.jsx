import React, { useState } from 'react'
import { setLocalStorage } from '../utils/localStorage'

const CreateTask = ({task}) => {

   const [newTask, setNewTask] = useState(null)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

 

  const submitHandler =(e)=>{
    e.preventDefault()

    const data = JSON.parse(localStorage.getItem('employees'))

    const task = {
      taskTitle,taskDescription,taskDate,category,asignTo,
      active:false,
      newTask:true,
      failed:false,
      completed:false 
    }
    
    data.forEach(function(elem){
      if(asignTo == elem.firstName){
        elem.tasks.push(task)
        elem.taskNumber += 1;
        elem.taskCount.task += 1
      }
    })
    localStorage.setItem('userData',JSON.stringify(data))
    
    const handlSubmit = ()=>{
      onAddTask(newTask)
      setNewTask('')
    }

    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
  }

  console.log(task)
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Task Title</h3>
            <input
             type="text"
             value={taskTitle}
             onChange={(e)=>setTaskTitle(e.target.value)}
             placeholder='Make a UI Design'
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
            <input 
              value={taskDate}
             onChange={(e)=> setTaskDate(e.target.value)}
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
             type="date"/>
          </div>
          
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Asign to</h3>
            <input 
             value={asignTo}
             onChange={(e)=>setAssignTo(e.target.value)}
             type="text"
             placeholder='employee name'
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  />
          </div>
          
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Category</h3>
            <input 
              value={category}
             onChange={(e)=>setCategory(e.target.value)}
             type="text" 
             placeholder='design,dex,etc'
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  />
          </div>
        </div>

          <div className='w-2/5 flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
            <textarea
             value={taskDescription}
             onChange={(e)=>setTaskDescription(e.target.value)}
             className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
             
             id="">Write some note...</textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full '>Create Task</button>
          </div>
        </form>
      </div>

  )
}

export default CreateTask
 