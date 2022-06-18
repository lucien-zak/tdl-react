import React from 'react';


function Task(props) {
    return (
        <div className='task'>
            <h1>{props.tasks.taskName}</h1>
            <form>
                <label>Nom de la tache:</label>
                <input onBlur={e => props.onBlurTask(e, props.tasks.taskName)} onChange={e => props.onUpdateTask(e, props.tasks.id)} value={props.tasks.taskName} type="textarea" name="taskName" />
                <label>Description de la tache:</label>
                <input onBlur={e => props.onBlurTask(e, props.tasks.taskName)} onChange={e => props.onUpdateTask(e, props.tasks.id)} value={props.tasks.taskDescription}  type="textarea" name="taskDescription" />
                <label>Date de la tache:</label>
                <input onBlur={e => props.onBlurTask(e, props.tasks.taskName)} onChange={e => props.onUpdateTask(e, props.tasks.id)} value={props.tasks.taskDate}  type="date" name="taskDate" />
                <label>Priorité de la tache:</label>
                <select onBlur={e => props.onBlurTask(e, props.tasks.taskName)} onChange={e => props.onUpdateTask(e, props.tasks.id)} value={props.tasks.taskPriority} name="taskPriority" >
                    {props.columns.map(column => {
                        return <option key={column.id} value={column.taskPriority}>{column.taskPriority}</option>
                    })}
                </select>
                <button onClick={e => props.onDeleteTask(e, props.tasks.id)}>Supprimer tache</button>
            </form>
        </div>
    )
}
export default Task