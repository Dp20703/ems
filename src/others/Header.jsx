import React, { useState } from 'react'

const Header = ({ data }) => {
  // console.log(data)
  // console.log(data.FirstName)  
  const [userName, setUserName] = useState('')
  // if(!data.FirstName=='admin'){
  //   setUserName("Admin")
  // }
  // else{
  //   setUserName(data.FirstName)
  // }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>hello <br /><span className='text-3xl font-semibold'>userName 👋</span></h1>
      <button className='rounded-sm bg-red-600 px-5 py-2 text-white text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header