import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [passwrod, setPassword] = useState('')

  //Handling the from submit feature:
  const SubmiHandler = (e) => {
    e.preventDefault()
    console.log("submitted successfully!")
    console.log("Email is:",email)
    console.log("Password is:",passwrod)
    setEmail('')
    setPassword('')
  }
  return (
    <div className=' h-screen w-screen flex items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form onSubmit={(e) => { SubmiHandler(e) }} className='flex flex-col items-center justify-center'>
          <input onChange={(e) => { setEmail(e.target.value) }} value={email} required className=' bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl' type="email" name="" id="" placeholder='Enter your email' />
          <input onChange={(e) => { setPassword(e.target.value) }} value={passwrod} required className=' bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl mt-3' type="password" name="" id="" placeholder='Enter your password' />
          <button className='border-none bg-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl mt-5'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login