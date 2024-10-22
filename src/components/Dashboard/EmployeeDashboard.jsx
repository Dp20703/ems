import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../TaskList.jsx/TaskList'

const EmployeeDashboard = ({ data }) => {
  // console.log(data.Id)
  // console.log('in EmployeeDashboard')
  return (
    <div className='h-screen bg-[#1c1c1c] p-10'>
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard