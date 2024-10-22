import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = ({data}) => {
  // const data = {
  //   "FirstName": "Admin",
  // }
  return (
    <div className='h-screen w-full p-7'>
      <Header data={data} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard