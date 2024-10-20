import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[55%] w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto'>
            <div className='flex-shrink-0 w-[300px] h-full bg-red-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
            </div>
            <div className='flex-shrink-0 w-[300px] h-full bg-pink-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
            </div>
            <div className='flex-shrink-0 w-[300px] h-full bg-yellow-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
            </div>
            <div className='flex-shrink-0 w-[300px] h-full bg-green-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
            </div>
            <div className='flex-shrink-0 w-[300px] h-full bg-blue-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
            </div>
        </div>
    )
}

export default TaskList