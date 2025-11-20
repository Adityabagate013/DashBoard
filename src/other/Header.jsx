import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl'> Hello <br/> <span className='text-3xl font-semiBold'>Aditya 🖐️</span> </h1>
    <button className='bg-red-500 text-white px-3 py-'>Logout</button>  
    </div>
    
  )
}

export default Header
