import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/api';
import { getToken } from '../../utils/auth'; 
import '../../styles/Auth.css';

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = getToken();
        if (token){
            navigate('/post/f6732e0d-b7b7-4508-9569-52c1247eda87');
        }
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await loginUser({ email, username });
        if (success) {
            navigate('/post/f6732e0d-b7b7-4508-9569-52c1247eda87');
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <button onClick={handleRegisterRedirect} className="register-button">
                    Register
                </button>
            </form>
            
        </div>
    );
}

export default Login;
