import React from 'react'

const TaskList = () => {
  return (
    <div id='TaskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 w-full py-5'>
      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center text-sm'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xlxl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi ad necessitatibus quisquam repellat veritatis!
        </p>
      </div>

      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center text-sm'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xlxl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi ad necessitatibus quisquam repellat veritatis!
        </p>
      </div>

      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center text-sm'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xlxl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi ad necessitatibus quisquam repellat veritatis!
        </p>
      </div>

        <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center text-sm'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xlxl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi ad necessitatibus quisquam repellat veritatis!
        </p>
      </div>

    </div>
  )
}

export default TaskList
