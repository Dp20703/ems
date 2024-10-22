import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 w-[300px] h-full bg-yellow-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
    <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
    <div className='mt-5 '>
<button className='w-full rounded bg-red-500 py-2 px-2  text-sm'>Failed</button>
</div>
</div>
  )
}

export default FailedTask