import React from 'react'
import { SingleTaskProps } from '../types/Types'
import Task from './Task'

export interface Props {
    loading?: boolean
    tasks: SingleTaskProps[]
    onPinTask?: (id: string) => void
    onUnPinTask?: (id: string) => void
    onArchiveTask?: (id: string) => void
}

const TaskList = ({
    loading,
    tasks,
    onPinTask,
    onArchiveTask,
    onUnPinTask
}: Props) => {

    const events = {
        onPinTask,
        onArchiveTask,
        onUnPinTask
    }

    const loadingText = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>It's</span> <span>worth</span> <span>Waiting</span>
            </span>
        </div>
    );
    if(loading) 
        return <div className="list-items">{loadingText}</div>
    
    if( tasks?.length === 0)
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no task</div>
                    <div className="subtitle-message">Sit back and have a Cup of Coffee.</div>
                </div>
            </div>
        )

    const tasksInOrder = [
        ...tasks.filter( task => task.state === "TASK_PINNED"),
        ...tasks.filter( task => task.state !== "TASK_PINNED"),
    ]


    return (
        <div className="max-w-xl mx-auto bg-gray-200 p-4 my-6 rounded-md">
            {!!tasksInOrder &&
                tasksInOrder.map( task => (
                    <Task key={task.id} task={task} {...events} />
                ))
            }
        </div>
    )
}

export default TaskList
