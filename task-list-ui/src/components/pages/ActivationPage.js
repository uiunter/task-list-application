import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactCodeInput from 'react-code-input';
import { activateAccount } from '../../api/authApi';

const ActivationPage = () => {
    const [activationCode, setActivationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleActivation = async () => {
        try {
            await activateAccount(activationCode);
            navigate('/login');
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Неверный код активации');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-100">
                <h1 className="text-2xl font-bold mb-4 text-center">Активация аккаунта</h1>
                <p className="text-sm text-gray-600 mb-6 text-center">
                    Введите код активации, отправленный на вашу почту.
                </p>
                <div className="flex justify-center mb-4">
                    <ReactCodeInput
                        type="text"
                        fields={6}
                        onChange={(value) => setActivationCode(value)}
                        inputStyle={{
                            margin: '8px',
                            width: '48px',
                            height: '48px',
                            border: '1px solid #ccc',
                            borderRadius: '6px',
                            textAlign: 'center',
                            fontSize: '18px',
                        }}
                    />
                </div>
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
                )}
                <button
                    onClick={handleActivation}
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Активировать
                </button>
            </div>
        </div>
    );
};

export default ActivationPage;
