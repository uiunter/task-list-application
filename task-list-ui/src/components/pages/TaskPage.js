import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskInput from '../TaskInput';
import TaskList from '../TaskList';
import { fetchTasks, createTask, updateTaskById, deleteTaskById } from '../../api/taskApi';
import { useAuth } from '../AuthContext';
import {ArrowRightOnRectangleIcon} from "@heroicons/react/20/solid";


const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const { authState, userLogout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authState.isAuthenticated) {
            navigate('/login');
            return;
        }

        fetchTasks(authState.token)
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, [authState, navigate]);

    const addTask = (task) => {
        createTask(task, authState.token)
            .then((newTask) => setTasks([...tasks, newTask]))
            .catch((error) => console.error('Error adding task:', error));
    };

    const updateTask = (updatedFields) => {
        updateTaskById(updatedFields.id, updatedFields, authState.token)
            .then(() => {
                setTasks(tasks.map((task) =>
                    task.id === updatedFields.id ? { ...task, ...updatedFields } : task
                ));
            })
            .catch((error) => console.error('Error updating task:', error));
    };

    const deleteTask = (taskId) => {
        deleteTaskById(taskId, authState.token)
            .then(() => setTasks(tasks.filter((task) => task.id !== taskId)))
            .catch((error) => console.error('Error deleting task:', error));
    };

    const handleLogout = () => {
        userLogout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 relative">
                <button
                    onClick={handleLogout}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                    title="Logout"
                >
                    <ArrowRightOnRectangleIcon className="w-6 h-6" />
                </button>
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">To-Do List</h1>
                <TaskInput addTask={addTask} />
                <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
};

export default TaskPage;
