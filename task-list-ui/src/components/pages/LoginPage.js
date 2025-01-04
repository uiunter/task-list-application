import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { authenticate } from '../../api/authApi';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({});
    const navigate = useNavigate();
    const { userLogin } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await authenticate(username, password);
            userLogin({ username, token: data.token });
            navigate('/');
        } catch (error) {
            const validationErrors = error.response?.data?.validationErrors || {};
            setErrorMessage(validationErrors); // Устанавливаем объект ошибок
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4 text-center">Вход</h1>
                <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                    {/* Ошибка для username */}
                    {errorMessage.username && (
                        <p className="text-red-500 text-sm mt-1">{errorMessage.username}</p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                    {/* Ошибка для password */}
                    {errorMessage.password && (
                        <p className="text-red-500 text-sm mt-1">{errorMessage.password}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Войти
                </button>
                <p className="mt-3 text-center text-gray-600">
                    Нет аккаунта?{' '}
                    <button
                        onClick={() => navigate('/register')}
                        className="text-blue-500 hover:underline"
                    >
                        Зарегистрироваться
                    </button>
                </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
