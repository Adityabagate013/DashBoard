import './index.css'
import Login from './component/Auth/Login'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage } from './utils/localStorage'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext)

  // Restore login on refresh
  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'))

      if (loggedInUser && authData) {
        setUser(loggedInUser)

        if (loggedInUser.role === 'employee') {
          const storageEmployees = getLocalStorage().employees || []
          const employeesList = (authData.employees && authData.employees.length)
            ? authData.employees
            : storageEmployees

          const employee = employeesList.find(
            (e) => e.email === loggedInUser.email
          )
          setLoggedInUserData(employee)
        }
      }
    }
  }, [authData])

  const handleLogin = (email, password) => {
    // try reading stored data (fallback if context not populated yet)
    const { employees: storageEmployees = [], admin: storageAdmin = [] } = getLocalStorage()

    // ✅ ADMIN LOGIN (use stored admin if available)
    const storedAdmin = Array.isArray(storageAdmin) ? storageAdmin[0] : storageAdmin
    if (storedAdmin && email === storedAdmin.email && password === storedAdmin.password) {
      const adminUser = { role: 'admin', email, name: storedAdmin.name }
      setUser(adminUser)
      console.log(adminUser);
      localStorage.setItem('LoggedInUser', JSON.stringify(adminUser))
      return
    }

    // ✅ EMPLOYEE LOGIN
    const employeesList = (authData && authData.employees && authData.employees.length)
      ? authData.employees
      : storageEmployees

    const employee = employeesList.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {
      const employeeUser = { role: 'employee', email }
      setUser(employeeUser)
      setLoggedInUserData(employee)
      localStorage.setItem('LoggedInUser', JSON.stringify(employeeUser))
      return
    }

    alert('Invalid Credentials')
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> :''}

      {user?.role === 'admin' && (<AdminDashboard  authData={loggedInUserData}/>)}

      {user?.role === 'employee' && (
        <EmployeeDashboard authData={loggedInUserData} />
      )}
    </>
  )
}

export default App
