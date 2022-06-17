import React from 'react'

function Task(props) {
  return (
    <div className='task'>
        <h1>Task</h1>
        <form>
            <label>Nom de la tache:</label>
            <input type="textarea" name="taskName" />
            <label>Description de la tache:</label>
            <input type="textarea" name="taskDescription" />
            <label>Date de la tache:</label>
            <input type="date" name="taskDate" />
            <label>Priorité de la tache:</label>
            <select name="taskPriority" >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </form>

    </div>
  )
}

export default Task