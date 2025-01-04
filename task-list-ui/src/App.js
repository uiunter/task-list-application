// App.jsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TaskPage from './components/pages/TaskPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from "./components/pages/RegisterPage";
import ActivationPage from "./components/pages/ActivationPage"; // Пример страницы входа
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<ProtectedRoute element={<TaskPage />} />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/activate" element={<ActivationPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
