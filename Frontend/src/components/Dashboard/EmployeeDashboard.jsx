import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../TaskList.jsx/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data.Id)
  // console.log('in EmployeeDashboard')
  return (
    <div className='h-screen bg-[#1c1c1c] p-10'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard