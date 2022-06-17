import React from 'react'
import Column from './Column'
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

function Board(props) {
    
    const columns = [{
        id: uuidv4(),
        taskPrioriy: 'A Faire'
    },{
        id: uuidv4(),
        taskPrioriy: 'En Cours'
    },
    ];

    const tasks = [{
        id: uuidv4(),
        taskName: 'Tache 1',
        taskDescription: 'Description de la tache 1',
        taskDate: '2020-01-01',
        taskPriority: 'A Faire'
    },{
        id: uuidv4(),
        taskName: 'Tache 2',
        taskDescription: 'Description de la tache 2',
        taskDate: '2020-01-01',
        taskPriority: 'En Cours'
    }];  

    const tasksByPriority = (taskPriority) => {
        return tasks.filter(task => task.taskPriority === taskPriority);
    }

    const [columnsState, setColumnsState] = useState(columns);

    return (
        <div className='board'>
            {columnsState.map(column => {
                return <Column tasks={tasksByPriority(column.taskPrioriy)} key={column.id} taskPrioriy={column.taskPrioriy}/>
            })}
        </div>
    )
}

export default Board