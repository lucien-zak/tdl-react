import React from 'react'
import Column from './Column'
import NavBar from './Navbar'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

function Board(props) {

    const columns = [{
        id: uuidv4(),
        taskPriority: 'A Faire'
    }, {
        id: uuidv4(),
        taskPriority: 'En Cours'
    }, {
        id: uuidv4(),
        taskPriority: 'En test'
    }];

    const tasks = [{
        id: uuidv4(),
        taskName: 'Tache 1',
        taskDescription: 'Description de la tache 1',
        taskDate: '2019-01-01',
        taskPriority: 'A Faire'
    }, {
        id: uuidv4(),
        taskName: 'Tache 2',
        taskDescription: 'Description de la tache 2',
        taskDate: '2020-01-01',
        taskPriority: 'En Cours'
    }];

    const intitialState = () => {
        if (localStorage.getItem('tasksState')) {
            return JSON.parse(localStorage.getItem('tasksState'))
        }
        else {
            return tasks;
        }
    }


    const [columnsState, setColumnsState] = useState(columns);
    const [tasksState, setTasksState] = useState(intitialState);

    const addColumn = (e, ref, columns) => {
        e.preventDefault();
        const newColumn = {
            id: uuidv4(),
            taskPriority: ref.current.value
        }
        }
    

    useEffect(() => {
        localStorage.setItem('tasksState', JSON.stringify(tasksState));
    }, [tasksState]);




    const deletetask = (e, id) => {
        e.preventDefault();
        setTasksState(tasksState.filter(task => task.id !== id))
    }

    const createTask = (e, ref, taskPriority) => {
        e.preventDefault();
        if (ref.current.value === '') {
            toast.error('Une tâche ne peut être créée avec un nom vide', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            }); return
        }
        const taskName = ref.current.value;
        setTasksState([...tasksState, {
            id: uuidv4(),
            taskName: taskName,
            taskDescription: '',
            taskDate: '2020-01-01',
            taskPriority: taskPriority
        }]);
        const text = 'La tache "' + taskName + '" a été ajoutée avec succès';
        toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
        ref.current.value = '';

    }

    const updateTask = (event, id) => {
        event.preventDefault();
        const taskField = event.target.name;
        const taskValue = event.target.value;
        var newTasks = tasksState.map(task => {
            if (task.id === id) {
                return { ...task, [taskField]: taskValue }
            }
            return task;
        })
        setTasksState(newTasks);
    }

    const onBlurTask = (event, name) => {
        event.preventDefault();
        toast.info('La tâche "' + name + '" a été modifiée', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }


    const tasksByPriority = (taskPriority) => {
        return tasksState.filter(task => task.taskPriority === taskPriority);
    }


    return (
        <div className='board'>
            <ToastContainer />
            <NavBar />
            {columnsState.map(column => {
                return <Column onBlurTask={onBlurTask} onDeleteTask={deletetask} onCreateTask={createTask} onUpdateTask={updateTask} columns={columnsState} column={column.taskPriority} tasks={tasksByPriority(column.taskPriority)} key={column.id} taskPrioriy={column.taskPrioriy} />
            })}
        </div>
    )
}



export default Board