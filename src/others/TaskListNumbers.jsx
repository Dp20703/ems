import React from 'react'

const TaskListNumbers = () => {
    return (
        <>
            <div className='flex gap-5 mt-10  justify-between ' >
                <div className='w-[45%] py-6 px-9 rounded-xl bg-red-500'>
                    <h2 className='text-3xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-500'>
                    <h2 className='text-3xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-500'>
                    <h2 className='text-3xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                <div className='w-[45%] py-6 px-9 rounded-xl bg-green-500'>
                    <h2 className='text-3xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>
            </div>
        </>


    )
}

export default TaskListNumbers