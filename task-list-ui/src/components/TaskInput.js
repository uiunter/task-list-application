import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleInputChange = (e) => setTaskTitle(e.target.value);

    const handleAddTask = () => {
        if (taskTitle.trim()) {
            addTask({ title: taskTitle });
            setTaskTitle('');
        }
    };

    return (
        <div className="flex items-center gap-4 mb-6">
            <input
                type="text"
                value={taskTitle}
                onChange={handleInputChange}
                placeholder="Введите новую задачу..."
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
                onClick={handleAddTask}
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500"
            >
                Добавить
            </button>
        </div>
    );
};

export default TaskInput;
