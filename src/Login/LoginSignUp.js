import './LoginSignUp.css'
import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

function LoginSignUp() {
    const history = useNavigate();

    const toggleActiveClass = (isActive) => {
        if (isActive) {
            document.getElementById('auth-container').classList.add('auth-active');
        } else {
            document.getElementById('auth-container').classList.remove('auth-active');
        }
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;

        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            toast.error('Email is already in use. Please use a different email.');
            return;
        }

        if (email && password) {
            localStorage.setItem(email, JSON.stringify({ name, password }));
            toast.success('Registration successful!');
        } else {
            toast.error('Please enter all the fields.');
        }
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
    
        const user = localStorage.getItem(email);
    
        if (user) {
            const userDetails = JSON.parse(user);
            if (password === userDetails.password) {
                toast.success("Login Successful");
                localStorage.setItem('isLoggedIn', 'true'); // Set login status in localStorage
                history('/'); // Navigate to the home page after successful login
            } else {
                toast.error('Incorrect password!');
            }
        } else {
            toast.error('User does not exist!');
        }
    };

    return (
        <div className='loginbody'>
            <ToastContainer />
            <div className="auth-container" id="auth-container">
                <div className="auth-form-container auth-sign-up">
                    <form onSubmit={handleSignUp}>
                        <h1>Create Account</h1>
                        <span> use your email for registration</span>
                        <input type="text" placeholder="Name" required></input>
                        <input type="email" placeholder="Email" required></input>
                        <input type="password" placeholder="Password" required></input>
                        <button type="submit" >Sign Up</button>
                    </form>
                    
                </div>
                <div className="auth-form-container auth-sign-in">
                    <form onSubmit={handleSignIn}>
                        <h1>Sign In</h1>
                        <span>use your email password</span>
                        <input type="email" placeholder="Email" required></input>
                        <input type="password" placeholder="Password" required></input>
                        <a href="#">Forget Your Password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="auth-toggle-container">
                    <div className="auth-toggle">
                        <div className="auth-toggle-panel auth-toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="auth-hidden" id="auth-login" onClick={() => toggleActiveClass(false)}>Sign In</button>
                        </div>
                        <div className="auth-toggle-panel auth-toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details and get started</p>
                            <button className="auth-hidden" id="auth-register" onClick={() => toggleActiveClass(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;