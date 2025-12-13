
import './index.css'
import Login from './component/Auth/Login'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import EmployeeDashboard from './component/Dashboard/employeeDashboard'
import { useState } from 'react'
import { getLocalStorage } from './utils/localStorage'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      console.log('This is Admin');
    }
    else{
      alert('Invalid Credentials')
    }
  }
  handleLogin('admin@me.com', 123);

  return (
    <>
      {!user ? <Login /> : ''}
      {/*<EmployeeDashboard/>*/}
      {/*<AdminDashboard /> */}

    </>
  )
}

export default App
