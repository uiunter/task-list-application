import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        username: null,
        token: null,
        isLoading: true,
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthState({
                isAuthenticated: true,
                username: null,
                token,
                isLoading: false,
            });
        } else {
            setAuthState({
                isAuthenticated: false,
                username: null,
                token: null,
                isLoading: false,
            });
        }
    }, []);

    const userLogin = ({ username, token }) => {
        localStorage.setItem('token', token);
        setAuthState({
            isAuthenticated: true,
            username,
            token,
            isLoading: false,
        });
    };

    const userLogout = () => {
        localStorage.removeItem('token');
        setAuthState({
            isAuthenticated: false,
            username: null,
            token: null,
            isLoading: false,
        });
    };

    return (
        <AuthContext.Provider value={{ authState, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
