import React from 'react'
import Task from './Task'

function Column(props) {

    const tasks = props.tasks;
    console.log(tasks);
    
    return (
        <div className='column'>
            {tasks.map(task => {
                return <Task task={task} key={task.id}/>
            })}
        </div>
    )
}

export default Column