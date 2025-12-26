// ...existing code...
import './index.css'
import Login from './component/Auth/Login'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import { setLocalStorage } from './utils/localStorage'

// ...existing code...

function App() {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
 

  // Restore login on refresh
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem('loggedInUser') // use the same key as setItem
      
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data) 
      }
    }
  }, [authData])

    const handleLogin = (email, password) => {
       if(email === 'admin@example.com' && password === '123'){
         setUser('admin')

        localStorage.setItem('loggedInUser', JSON.stringify({ role : 'admin'}))
       }
        else if(authData){
          const employee = authData.employees.find((e) => email == e.email && e.password == password)
          
          if (employee) {
          setUser('employee')
          setLoggedInUserData(employee)
          
          localStorage.setItem('loggedInUser', JSON.stringify({ role :'employee',data: employee }))
          }
        }else{ 
        alert("Invalid Credentials");
        }
    }
     

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> :''}

      {user == 'admin'
        ? <AdminDashboard changeUser={setUser} />
        : (user == 'employee'
            ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>
            : null)}
    </>
  )
}

export default App
