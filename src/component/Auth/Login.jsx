import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const submithandler=(e)=>{
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 rounded-xl p-20 mt-5'>
        <form onSubmit={(e)=>{
              submithandler(e)
        }} className='flex flex-col items-center justify-center'>
          <input
           value={email}
           onChange={(e)=>{setEmail(e.target.value)}}
           required
           className='text-white outline-none bg-transparent placeholder:text-gray-400 border-2 mb-5  border-emerald-600 text-xl py-3 px-5 rounded-full' 
           type="email" 
           placeholder='Enter Your Email' />

          <input 
          required 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className='text-white outline-none bg-transparent placeholder:text-gray-400 border-2  border-emerald-600 text-xl py-3 px-5 rounded-full' 
          type="password" 
          placeholder='Enter Your Password' />

          <button className=' mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
          </form>
      </div>
    </div>
  )
}

export default Login
