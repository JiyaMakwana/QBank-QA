import { useState } from "react";

function LoginForm({onLoginSuccess}) {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email.includes("@")) {
            setError("Email should include one @");
            return;
        }

        if(password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        setError("");
        onLoginSuccess(email)
    }

    return (
            <form onSubmit={handleSubmit}>
                <input  
                    type="text" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input  
                    type="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p style={{color:"red"}}>{error}</p>
                )}

                <button type="submit">Login</button>

            </form>
    )
}


export default LoginForm;