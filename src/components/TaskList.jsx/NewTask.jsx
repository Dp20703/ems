import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 w-[300px] h-full bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a new Video</h2>
            <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
            <div className='mt-5'>
            <button className='rounded bg-zinc-900 py-2 px-2 text-sm'>Accepte Task</button>
            </div>
        </div>)
}

export default NewTask