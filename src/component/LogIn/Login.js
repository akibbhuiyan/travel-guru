import React, { useState } from 'react';
import Header2 from '../Header2/Header2';
import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
const Login = () => {
    const [newUser, setNewUser] = useState(false);


    const handleBlur = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <Header2 />
            <div className="login-form-container">
                <form className='login-form'>
                    <h2>{newUser ? 'Create an Account' : 'Login'}</h2>
                    {
                        newUser && <input type="text" name='first-name' placeholder='First Name' onBlur={handleBlur} />
                    }
                    {
                        newUser && <input type="text" name='lastname' placeholder='Last Name' onBlur={handleBlur} />

                    }
                    <input type="email" name='email' placeholder='Email Address' onBlur={handleBlur} />
                    <input type="password" name="password" placeholder='Password' onBlur={handleBlur} />
                    {
                        newUser && <input type="password" name="password" placeholder='Confirm Password' onBlur={handleBlur} />
                    }
                    {
                        !newUser && <div className="remember">
                            <div className='checkbox'>
                                <input type="checkbox" name="checkbox" />
                                <label htmlFor="checkbox">Remember Me</label>
                            </div>
                            <a href="#">Forgot Password</a>
                        </div>
                    }
                    <input type="submit" value={newUser ? 'Create an Account' : "Login"} className='mainBtn' />
                    {
                        newUser ? <span>Didn't Have an Account?<a href="#" onClick={() => setNewUser(!newUser)}> Create an Account </a></span> : <span>Already have an Account?<a href="#" onClick={() => setNewUser(!newUser)}> Login</a></span>

                    }
                </form>
                <div className="devider"><p>Or</p></div>
                <button className='social-login'><BsFacebook className='fb-btn' />Continue With FaceBook</button>
                <button className='social-login'><FcGoogle />Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;