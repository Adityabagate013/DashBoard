import React, { useState } from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import CreateTask from '../../other/CreateTask'

const EmployeeDashboard = (props) => {

   const [newTask, setNewTask] = useState(null)

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
        <CreateTask setNewTask={setNewTask}/>
    </div>
  )
}

export default EmployeeDashboard

