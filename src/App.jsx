
import './index.css'
import Login from './component/Auth/Login'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import EmployeeDashboard from './component/Dashboard/employeeDashboard'
import { useContext, useEffect, useState } from 'react'
import { getLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)

   const authData = useContext(AuthContext)

   useEffect(()=>{
    if(authData){
      const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
      if(LoggedInUser){
        setUser(LoggedInUser.role)
      }
    }
   },[authData])
    

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser({role :'admin'})
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
    }else  if(authData){
      const employee = authData.employees.find((e) => email ==e.email && e.password == password)
      if(employee){
           setUser({role:'employee'})
           localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee'}))
      }  
    }
    else{
      alert('Invalid Credentials')
    }
  }


  return (
    <>
      {!user && <Login handleLogin = {handleLogin} />}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard/>}

    </>
  )
}

export default App
