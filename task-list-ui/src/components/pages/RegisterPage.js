import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/authApi';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password, email);
            navigate('/activate');
        } catch (error) {
            const validationErrors = error.response?.data?.validationErrors || {};
            setErrorMessage(validationErrors); // Сохраняем объект ошибок
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Регистрация</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
                            Имя пользователя
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите имя пользователя"
                        />
                        {/* Отображение ошибки для username */}
                        {errorMessage.username && (
                            <p className="text-red-500 text-sm mt-1">{errorMessage.username}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите email"
                        />
                        {/* Отображение ошибки для email */}
                        {errorMessage.email && (
                            <p className="text-red-500 text-sm mt-1">{errorMessage.email}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                            Пароль
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите пароль"
                        />
                        {/* Отображение ошибки для password */}
                        {errorMessage.password && (
                            <p className="text-red-500 text-sm mt-1">{errorMessage.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition mb-4"
                    >
                        Зарегистрироваться
                    </button>
                </form>

                <p
                    onClick={() => navigate('/login')}
                    className="text-center text-sm text-blue-500 hover:underline cursor-pointer"
                >
                    Уже есть аккаунт? Войти
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
