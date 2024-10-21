import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  //using the AuthContext for userData:
  const authData = useContext(AuthContext)
  // console.log(authData.employees)
  // console.log(authData.admin)


  //set and get data in LocalStorage:
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // }, [])

  //set user type: Admin or Employee
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])

  //Check Crendentials like email and Password and set User:
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      // console.log('admin')
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      // const employee = authData.employees.find((e) => email == e.email && password == e.password)
      // console.log(employee)
      // if (employee) {
      console.log('employee')
      setUser('employee')
      // setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      // }

    }
    else {
      alert("Invalid Crendentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard /> : '')}
    </>
  )
}

export default App