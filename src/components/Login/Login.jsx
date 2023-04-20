import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
    // loginHandler 
    const {signIn, continueWithGoogle}=useContext(AuthContext)
    const loginHandler=(event)=>{

        const navigate = useNavigate()
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value

        if(password.length <6){
            alert('password must be 6 characters or more')
            return
        }
        signIn(email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            event.target.reset()
            navigate('/')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        
    }

    const signWithGoogle =()=>{
        continueWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
           
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
         console.log(errorMessage);
          });
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
                <input type="submit" value='Log in' className="submit-btn"/>
                {/* <input type="submit" value='Log In' className="submit-btn"/> */}
                </div>
                <p className='form-switch'><small>New to Ema-John ? Please <Link to='/signup'>Sign Up</Link></small></p>
                <div className="separator">or</div>
                <button onClick={signWithGoogle} className='continue-with-google-btn'>Continue with google</button>
            </form>
        </div>
    );
};

export default Login;