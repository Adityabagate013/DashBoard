import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center text-sm'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xlxl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi ad necessitatibus quisquam repellat veritatis!
        </p>
        <div className='mt-4'>
          <button className='bg bg-red-500'>Completed Task</button>
        </div>
      </div>
  )
}

export default CompleteTask
