import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../TaskList.jsx/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='h-screen bg-[#1c1c1c] p-10'>
        <Header/>
        <TaskListNumbers/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard