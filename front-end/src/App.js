import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CommentList from './components/Comments/CommentList';
import Header from './components/Layout/Header';
import './styles/App.css';

function App() {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/login')
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/post/:postId" element={<CommentList/>}/>
            </Routes>
        </div>
    );
}

export default App;
