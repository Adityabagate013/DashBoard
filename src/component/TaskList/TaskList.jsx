import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({authData}) => {
  console.log("authData is ",authData)
  return (
    <div id='TaskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 w-full py-5'>
      {data.taskNumber.map((elem,id)=>{
        if(elem.active){
          return <AcceptTask key={data.id} />
        }
        if(elem.NewTask){
          return <NewTask key={data.id}/>
        }
        if(elem.completed){
          return <CompleteTask key={data.id} />
        }
        if(elem.failed){
          return <FailedTask key={data.id} />
        }
      })}
     

    </div>
  )
}

export default TaskList
