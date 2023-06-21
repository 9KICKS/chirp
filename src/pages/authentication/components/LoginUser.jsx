import React, { useState } from "react";
import "../styles/LoginUser.css";

function LoginUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="chirp-login-page">
            <h1 className="chirp-logo">CHIRP</h1>
            <h1 className="sign-in">Sign In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="username-icon">
                    <input type="text" placeholder="    Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label><br/>
                <label className="password-icon">
                    <input type="password" placeholder="    Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label><br/>
                <button type="submit" className="login-button" onClick={() => window.location.href="/profile-picture"}>Login</button>
                <div className="sign-up-link">
                    Don't have an account? <a href="/register">Sign Up</a>
                </div>
            </form>
        </div>
    );
}

export default LoginUser;