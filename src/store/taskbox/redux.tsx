//Create Store
import { configureStore, createSlice } from '@reduxjs/toolkit'

//Initial State
const initialState = [
    { id: "1", title: "Complete Project", state: "TASK_INBOX" },
    { id: "2", title: "Book Reading", state: "TASK_INBOX" },
    { id: "3", title: "Go for shopping", state: "TASK_INBOX" },
    { id: "4", title: "Go to Bed", state: "TASK_INBOX" }
]

//Create Sline 
const taskReducer = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        
        //Adding Task to List
        addTask: (state, action) => {
            let id = '0';
            if (state.length !== undefined && state.length !== null) {
                id = (state.length + 1).toString()
            }
            return [
                ...state,
                { id: id, title: action.payload.title, state: "TASK_INBOX" }
            ]
        },

        //Adding Task to PinTask List
        pinTask: (state, action) => {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        state: 'TASK_PINNED',
                    }
                } else {
                    return item;
                }
            })
        },

        //Adding Task to unPinTask List
        unPinTask: (state, action) => {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        state: 'TASK_INBOX',
                    }
                } else {
                    return item
                }
            })
        },

        //Adding Task to archiveTask List
        archive: (state, action) => {
            return state.map(item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        state: "TASK_ARCHIVED",
                    }
                } else {
                    return item;
                }
            })
        }
    }
})

//Reducer 
const store = configureStore({
    reducer: taskReducer.reducer
})

export const { pinTask, unPinTask, archive, addTask} = taskReducer.actions

export { taskReducer, store }
