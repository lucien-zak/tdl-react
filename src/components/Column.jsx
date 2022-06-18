import React from 'react';
import Task from './Task';
import { useRef } from 'react';

function Column(props) {

    const newTaskInput = useRef();
    return (
        <>
            <div className='column'>
            <div className='newTask'>
                <input ref={newTaskInput} type="text" name="" id="" />
                <button onClick={e => props.onCreateTask(e, newTaskInput, props.column)} type="button">Ajouter</button>
            </div>
                {props.tasks.map(task => {
                    return <Task onBlurTask={props.onBlurTask} onDeleteTask={props.onDeleteTask} onUpdateTask={props.onUpdateTask} columns={props.columns} tasks={task} key={task.id} />
                })}
            </div>
        </>
    )
}

export default Column