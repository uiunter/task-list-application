import React, { useState } from 'react';
import {TrashIcon} from "@heroicons/react/16/solid";

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.title);

    const handleCheckboxChange = () => {
        updateTask({ id: task.id, isCompleted: !task.isCompleted });
    };

    const handleDueDateChange = (e) => {
        updateTask({ id: task.id, dueDate: e.target.value });
    };

    const handleTextClick = () => setIsEditing(true);
    const handleTextChange = (e) => setEditedText(e.target.value);
    const handleTextBlur = () => {
        setIsEditing(false);
        if (editedText !== task.title) {
            updateTask({ id: task.id, title: editedText });
        }
    };

    const handleTextKeyPress = (e) => {
        if (e.key === 'Enter') handleTextBlur();
    };

    return (
        <div className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${task.isCompleted ? 'bg-green-50' : 'bg-gray-50'}`}>
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-green-500"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleTextChange}
                        onBlur={handleTextBlur}
                        onKeyPress={handleTextKeyPress}
                        autoFocus
                        className="border-b-2 border-gray-300 focus:outline-none focus:border-green-500 w-full"
                    />
                ) : (
                    <span
                        onClick={handleTextClick}
                        className={`cursor-pointer text-gray-800 ${
                            task.isCompleted ? 'line-through text-gray-500' : ''
                        }`}
                    >
                        {task.title}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-3">
                <input
                    type="date"
                    value={task.dueDate || ''}
                    onChange={handleDueDateChange}
                    className="border rounded p-1 text-sm"
                />
                <button
                    onClick={() => deleteTask(task.id)}
                    className="text-gray-500 hover:text-red-500"
                    title="Удалить задачу"
                >
                    <TrashIcon className="w-6 h-6"/>
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
