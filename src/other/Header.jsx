import React from 'react'

const Header = ({authData}) => {
 
  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl'> Hello <br/> <span className='text-3xl font-semiBold'>{} 🖐️</span> </h1>
    <button className='bg-red-500 text-white px-3 py-2 rounded-full'>Logout</button>  
    </div>
    
  )
}

export default Header
