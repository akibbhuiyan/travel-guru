import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header2 from '../Header2/Header2';
import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import firebaseConfig from '../firebaseConfig/Firebase.config';
import { UserContext } from '../../App';
import { useNavigate } from "react-router-dom";
initializeApp(firebaseConfig)
const Login = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        newUser: false,
        error: '',
        success: false

    })
    const auth = getAuth();
    let navigate = useNavigate();
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(e.target.value)
            console.log(isFieldValid);
        }
        if (e.target.name === 'password') {
            const isPassValid = e.target.value.length > 6;
            const passHasNum = /\d{1}/.test(e.target.value);
            isFieldValid = isPassValid && passHasNum;
            console.log(isFieldValid);
        }
        if (isFieldValid) {
            const newUserinfo = { ...user }
            newUserinfo[e.target.name] = e.target.value;

            setUser(newUserinfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(() => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.name = user.firstname + user.lastname;
                    setUser(newUserInfo)
                    setUserLoggedIn(newUserInfo)
                    updateUserInfo(newUserInfo.name)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = 'This Email Address is already used in Another account';
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(() => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setUserLoggedIn(newUserInfo);
                    navigate("../bookingComplete", { replace: true });
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = 'Wrong Email or Password';
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault()
    }
    const updateUserInfo = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            console.log('Name Update SuccesFulle');

        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <Header2 />
            <div className="login-form-container">
                <form className='login-form' onSubmit={handleSubmit}>
                    <h2>{newUser ? 'Create an Account' : 'Login'}</h2>
                    {
                        newUser && <input type="text" name='firstname' placeholder='First Name' onBlur={handleBlur} />
                    }
                    {
                        newUser && <input type="text" name='lastname' placeholder='Last Name' onBlur={handleBlur} />

                    }
                    <input type="email" name='email' placeholder='Email Address' onBlur={handleBlur} />
                    <input type="password" name="password" onBlur={handleBlur} placeholder='Password' />
                    {
                        newUser && <input type="password" name="confirmPassword" placeholder='Confirm Password' onBlur={handleBlur} />
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
                        !newUser ? <span>Didn't Have an Account?<a href="#" onClick={() => setNewUser(!newUser)}> Create an Account </a></span> : <span>Already have an Account?<a href="#" onClick={() => setNewUser(!newUser)}> Login</a></span>

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