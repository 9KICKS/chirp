import React, { useState } from "react";
import "../styles/RegisterUser.css";

function RegisterUser() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="chirp-register-page">
            <h1 className="chirp-logo">CHIRP</h1>
            <h1 className="sign-up">Sign Up</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label className="username-icon">
                    <input type="text" placeholder="    Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label><br/>
                <label className="username-icon">
                    <input type="email" placeholder="   Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label><br/>
                <label className="password-icon">
                    <input type="password" placeholder="    Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label><br/>
                <label className="password-icon">
                    <input type="password" placeholder="    Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label><br/>
                <button type="submit" className="register-button">Register</button>
                <div className="sign-in-link">
                    Already have an account? <a href="/login">Sign In</a>
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;