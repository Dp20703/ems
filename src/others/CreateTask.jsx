import React from 'react'

const CreateTask = () => {
    return (
        <div className='bg-[#1c1c1c] rounded p-5 mt-5'>
            <form className='flex items-start justify-between flex-wrap w-full'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Task Title</h3>
                        <input type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Date</h3>
                        <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Assign to</h3>
                        <input type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" placeholder='emloyee name  ' />
                    </div>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Category</h3>
                        <input type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" placeholder='design , dev ,etc... ' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-smtext-gray-300 mb-1.5 '>Description</h3>
                    <textarea className='h-44 w-full text-sm py-2 px-4 outline-none rounded bg-transparent border-[1px] border-gray-400' rows='10' cols='30'></textarea>
                    <button className='bg-emerald-500 py-3 px-5 rounded text-sm mt-4 w-full hover:bg-emerald-600 '>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask