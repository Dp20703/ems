import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    console.log(data)
    return (
        <div id='tasklist' className='h-[55%] w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto'>
            {data.Tasks.map((elem, idx) => {
                // console.log(elem)
                if (elem.NewTask) {
                    return <NewTask key={idx} />
                }
                if (elem.Active) {
                    return <AcceptTask key={idx} data={data} />
                }
                if (elem.Completed) {
                    return <CompleteTask key={idx} />
                }
                if (elem.Failed) {
                    return <FailedTask key={idx} />
                }
            })}
        </div>
    )
}

export default TaskList