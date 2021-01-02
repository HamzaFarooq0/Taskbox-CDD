import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { archive, pinTask, unPinTask } from '../store/taskbox/redux'
import AddTask from './AddTask'
import {SingleTaskProps} from '../types/Types'
import TaskList from './TaskList'

const InboxScreen = () => {
    const task = useSelector(state => state)
    const dispatch = useDispatch();
    
    const onPinTask = ( id: string ) => {
        dispatch(pinTask({ id: id }))
    }

    const onUnPinTask = (id: string) => {
        dispatch(unPinTask({ id: id }))
    }

    const onArchiveTask = (id: string) => {
        dispatch(archive({ id: id }))
    }

    return (
        <div>
            <AddTask />
            <TaskList 
                tasks={task as SingleTaskProps[]}
                onPinTask={onPinTask}
                onUnPinTask={onUnPinTask}
                onArchiveTask={onArchiveTask}
            />
        </div>
    )
}

export default InboxScreen
