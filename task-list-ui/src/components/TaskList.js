import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    const activeTasks = tasks.filter(task => !task.isCompleted);
    const completedTasks = tasks.filter(task => task.isCompleted);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Активные задачи</h2>
                <div className="space-y-3">
                    {activeTasks.map(task => (
                        <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                    ))}
                </div>
            </div>

            {completedTasks.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Завершенные задачи</h2>
                    <div className="space-y-3">
                        {completedTasks.map(task => (
                            <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
