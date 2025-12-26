import React, { useState } from 'react'
import { setLocalStorage } from '../utils/localStorage'

const Header = ({data}) => {

  const username = data?data.name:'admin'


  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }



  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl'> Hello <br/> <span className='text-3xl font-semiBold'>{username}🖐️</span> </h1>
    <button className='bg-red-500 text-white px-3 py-2 rounded-full' onClick={logOutUser}>Logout</button>  
    </div>
    
  )
}

export default Header
