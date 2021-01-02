import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTask } from '../store/taskbox/redux';

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const AddTask = () => {
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState<string>("");
    const [err, setErr] = useState<string | undefined>();
    
    const handleSubmit = () => {
        if (title !== "") {
            dispatch(addTask({ title }))
            setTitle("")
        } else {
            setErr('Please Enter valid title')
        }
    }

    return (
        <div>
            <div className="max-w-xl mx-auto bg-green-600 p-4 my-6 rounded-md">
                <h1 className="text-center text-3xl capitalize font-semibold text-white">
                    Add Task
                </h1>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <p className="text-white">Title</p>
                        <input
                            className="max-w-lg w-64 p-1 rounded focus:outline-none block"
                            type="text"
                            value={title}
                            onChange={(e)=>{
                                setTitle(e.target.value)
                                setErr("")
                            }}
                        />
                        {err && <p className="text-red-700 my-1 text-sm">{err}</p>}
                        <button
                            type="submit"
                            className="py-1 px-4 focus:outline-none bg-pink-600 text-white rounded my-3"
                            onClick={handleSubmit}
                        >
                            Will Do <FontAwesomeIcon icon={faCoffee} />
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddTask