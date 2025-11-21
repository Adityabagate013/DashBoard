import React from 'react'
import Header from '../../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <div>
        <form action="">
          <h3>Task Title</h3>
          <input type="text" placeholder='Make a UI Design' />
          <h3>Description</h3>
          <textarea></textarea>
          <h3>Date</h3>
          <input type="date" name="" id="" />
          <input type="text"  />
        </form>
      </div>

    </div>
  )
}

export default AdminDashboard
