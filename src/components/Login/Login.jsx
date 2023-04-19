import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    // loginHandler 
    const loginHandler=(event)=>{
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
    }

    return (
        <div className='form-container'>
            <form onSubmit={loginHandler} className='login-form'>
                <h1 className='login-title'>Login</h1>
                <div className='form-control'>
                    <div className="">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" required/>
                </div>
                <div className="">
                    <label className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" required />
                </div>
                {/* <input type="submit" value='Log In' className="submit-btn"/> */}
                </div>
                <p className='form-switch'><small>New to Ema-John ? Please <Link to='/signup'>Sign Up</Link></small></p>
                <div className="separator">or</div>
                <button className='continue-with-google-btn'>Continue with google</button>
            </form>
        </div>
    );
};

export default Login;