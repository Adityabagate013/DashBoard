import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

  return (
    <div id='TaskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 w-full py-5'>
      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask  key={elem.taskId} data={elem}/>
        }
        if(elem.NewTask){
          return <NewTask key={elem.taskId} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={elem.taskId} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={elem.taskId} data={elem}/>
        }
      })}
        </div>
  )
}

export default TaskList
