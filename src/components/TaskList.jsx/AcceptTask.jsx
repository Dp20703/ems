import React from 'react'

const AcceptTask = ({ data }) => {
    // console.log(data.Tasks[1].Title)
    return (
        <div className='flex-shrink-0 w-[300px] h-full bg-red-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm px-3 py-1 rounded bg-red-600'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Title</h2>
            <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium reprehenderit expedita minus fuga harum.</p>
            <div className='flex mt-5 justify-between'>
                <button className='rounded bg-green-500 py-2 px-2 text-sm'>Mark as Completed</button>
                <button className='rounded bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask