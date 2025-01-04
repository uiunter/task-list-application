import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component }) => {
    const { authState } = useAuth();

    if (authState.isLoading) {
        return <div>Загрузка...</div>;
    }

    return authState.isAuthenticated ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
