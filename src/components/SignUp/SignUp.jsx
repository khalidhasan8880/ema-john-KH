import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    // hooks
    const [error, setError] = useState('')
    // context api 
    const {createUser, continueWithGoogle} = useContext(AuthContext)
    console.log(createUser);
      // signUpHandler 
      const signUpHandler=(event)=>{
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmpassword.value

        if (password !== confirmPassword) {
            alert('password did not matched')
            return
        }
        else if(password.length <6){
            alert('password must be 6 characters or more')
            return
        }
        createUser(email, password).then((userCredential) => {
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
            <form onSubmit={signUpHandler} className='login-form'>
                <h1 className='login-title'>Sign Up</h1>
                <div className='form-control'>
                    <div className="">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" required/>
                </div>
                <div className="">
                    <label  className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" required />
                </div>
                <div className="">
                    <label className="form-label">Confirm Password</label>
                    <input name='confirmpassword' type="password" className="form-control" required />
                </div>
                <input type="submit" value='Sign Up' className="submit-btn"/>
                </div>
                <p className='form-switch'><small>Already have account? Please <Link to='/login'>Log In</Link></small></p>

                <div className="separator">or</div>

                <button onClick={signWithGoogle} className='continue-with-google-btn'>Continue with google</button>
            </form>
        </div>
    );
};

export default SignUp;