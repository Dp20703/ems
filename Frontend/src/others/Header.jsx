import React, { useState } from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>hello <br /><span className='text-3xl font-semibold'>{props.data.FirstName} 👋</span></h1>
      <button onClick={logOutUser} className='rounded-sm bg-red-600 px-5 py-2 text-white text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header