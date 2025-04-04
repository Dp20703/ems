import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  //using the AuthContext for userData:
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(userData.employees[1].Email)
  // console.log(userData)


  // set and get data in LocalStorage:
  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, [])

  //set user type: Admin or Employee
  const [user, setUser] = useState(null)

  //store the current logged employees's data ex: emp1 or emp2 or emp3 etc..
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    // console.log(loggedInUser)
    if (loggedInUser) {
      const userData = JSON.parse(localStorage.getItem('loggedInUser'))
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      // console.log(userData)
      // console.log(userData.data)
    }
  }, [])


  //Check Crendentials like email and Password and set User:
  const handleLogin = (email, password) => {
    if (email == 'admin@ac.com' && password == '123') {
      // console.log('admin')
      // const admin = authData.admin.find((e) => email == e.Email && password == e.Password)
      console.log('admin')
      setUser('admin')
      // setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else {
      // console.log(userData)
      // console.log(email)
      const employee = userData.find((e) => email == e.Email && password == e.Password)
      console.log(employee)
      if (employee) {
        console.log('employee')
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
      else {
        alert("Invalid Crendentials")
      }
    }

  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : '')}
    </>
  )
}

export default App