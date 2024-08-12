import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const API_URL = 'https://log-in-sign-up-mern-4mvy.vercel.app/api/auth/signup';

   // Signup.js
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://log-in-sign-up-mern-4mvy.vercel.app/api/auth/signup', { name, email, gender, mobile, password });
        setMessage('User signed up successfully! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
    } catch (error) {
        console.error(error);
        setMessage('An error occurred during signup');
    }
};


    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
