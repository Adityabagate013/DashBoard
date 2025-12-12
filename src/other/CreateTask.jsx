import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form action="" className='flex flex-wrap w-full items-start justify-between'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Task Title</h3>
            <input type="text" placeholder='Make a UI Design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Description</h3>
            <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name='' id='' color='30' rows="10"></textarea>
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="date"/>
          </div>
          
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Asign to</h3>
            <input type="text" placeholder='employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  />
          </div>
          
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Category</h3>
            <input type="text" placeholder='design,dex,etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  />
          </div>

          <div className='w-2/5 flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5 ' >Description</h3>
            <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id=""></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full '>Create Task</button>
          </div>
        </form>
      </div>

  )
}

export default CreateTask
 