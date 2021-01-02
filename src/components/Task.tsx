import React, { useState } from 'react';

import { SingleTaskProps } from '../types/Types';

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

interface Props {
	task: SingleTaskProps;
	onPinTask?: (id: string) => void;
	onUnPinTask?: (id: string) => void;
	onArchiveTask?: (id: string) => void;
}

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask, onUnPinTask }: Props) => {
	const [ isChecked, setIsChecked ] = useState<boolean>();

	return (
		<div
			className={`list-item ${state} py-2 my-1 px-2 flex justify-between relative rounded ${state ===
			'TASK_ARCHIVED'
				? 'bg-gray-100'
				: 'bg-white'}`}
		>
            { state === "TASK_ARCHIVED" && (
                <div className="absolute w-full -ml-2 mt-3 bg-gray-400" style={{ height: "3px"}}>
                </div>
            )}
            <div>
                <label className="checkbox">
                    <input 
                        type="checkbox"
                        defaultChecked={state==="TASK-PINNED"}
                        disabled={state==="TASK_ARCHIVED" ? true : false}
                        name="checked"
                        className="cursor-pointer"
                        onClick={e => {
                            state !== "TASK_ARCHIVED" && !isChecked
                                ? !!onPinTask && onPinTask(id)
                                : !!onUnPinTask && onUnPinTask(id)
                            setIsChecked(!isChecked)
                        }}
                    />
                </label>
                <div className="title inline">
                    <h1 className="inline px-3">{title}</h1>
                </div>
            </div>

            {state !== "TASK_ARCHIVED" ? (
                <span className="text-blue-400 hover:text-blue-500 cursor-pointer relative mr-0 right-0"
                onClick={() => (
                    state !== "TASK_ARCHIVED" && !!onArchiveTask && onArchiveTask(id)
                )}
                >
                    <FontAwesomeIcon icon={faArchive} />
                </span>
            ): (
                "archived"
            )}

        </div>
	);
};

export default Task;
