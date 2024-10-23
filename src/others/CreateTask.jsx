import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [Category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const [userData, setUserData] = useContext(AuthContext)
    // console.log(userData)


    //handle the submit data:
    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({ Title, Description, Date, Category, Active: false, NewTask: true, Completed: false, Failed: false, })
        console.log(newTask)

        const data = userData
        // console.log(data)

        data.forEach(elem => {
            // console.log(elem.taskCount.NewTask)
            if (elem.FirstName == assignTo) {
                elem.Tasks.push(newTask)
                elem.taskCount.NewTask = elem.taskCount.NewTask + 1
                // console.log(elem.Tasks)
            }
        });
        setUserData(data)
        console.log(data)
        setTitle('')
        setDescription('')
        setDate('')
        setAssignTo('')
        setCategory('')
        console.log("Task created")
    }
    return (
        <div className='bg-[#1c1c1c] rounded p-5 mt-5'>
            <form onSubmit={(e) => { submitHandler(e) }}
                className='flex items-start justify-between flex-wrap w-full'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Task Title</h3>
                        <input onChange={(e) => { setTitle(e.target.value) }} value={Title} type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Date</h3>
                        <input onChange={(e) => { setDate(e.target.value) }} value={Date} type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Assign to</h3>
                        <input onChange={(e) => { setAssignTo(e.target.value) }} value={assignTo} type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" placeholder='emloyee name  ' />
                    </div>
                    <div>
                        <h3 className='text-smtext-gray-300 mb-1.5 '>Category</h3>
                        <input onChange={(e) => { setCategory(e.target.value) }} value={Category} type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" placeholder='design , dev ,etc... ' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-smtext-gray-300 mb-1.5 '>Description</h3>
                    <textarea onChange={(e) => { setDescription(e.target.value) }} value={Description} className='h-44 w-full text-sm py-2 px-4 outline-none rounded bg-transparent border-[1px] border-gray-400 placeholder:text-gray-400' placeholder='Description about task' rows='10' cols='30'></textarea>
                    <button className='bg-emerald-500 py-3 px-5 rounded text-sm mt-4 w-full hover:bg-emerald-600'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask