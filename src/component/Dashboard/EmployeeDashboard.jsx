import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({authData}) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header authData ={authData} />
        <TaskListNumbers authData ={authData}/>
        <TaskList authData ={authData} />
    </div>
  )
}

export default EmployeeDashboard