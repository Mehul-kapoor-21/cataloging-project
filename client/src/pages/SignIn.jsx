import React, { useEffect } from 'react'
import "../styles/signin.scss"
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { useState } from 'react';
import { useAuth, useNotification } from '../hooks';

const validateUserInfo = ({ email, password }) => {
    if (!email.trim()) return { ok: false, error: "Email is missing!" };
  
    if (!password.trim()) return { ok: false, error: "Password is missing!" };
    if (password.length < 8)
      return { ok: false, error: "Password must be 8 characters long!" };
  
    return { ok: true };
  };

const Signin = () => {
    const { handleLogin, authInfo ,isLoggedIn} = useAuth();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
      });

    const navigate=useNavigate();
    const { updateNotification } = useNotification(); 
    const [loading ,setLoading] = useState(false)

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setUserInfo({ ...userInfo, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const { ok, error } = validateUserInfo(userInfo);
        if (!ok) updateNotification("error",error);
        console.log(error)
        setLoading(true)
        await handleLogin(userInfo.email, userInfo.password);
        setLoading(false) 
    
      };

    const handleClick=()=>{
        navigate("/signup");
    }
    useEffect(() => {
      if (isLoggedIn) navigate("/");
    }, [isLoggedIn]);

    const {email, password } = userInfo;
  return (
    <div>
        <div class="main">
      <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="sing up image"/></figure>
                        <div onClick={handleClick} class="signup-image-link">Create an account </div>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign in</h2>
                        <form onSubmit={handleSubmit} class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input value={email}
        onChange={handleChange} type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label for="password"><i class="zmdi zmdi-lock"></i></label>
                                <input value={password}
        onChange={handleChange} type="password" name="password" id="password" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <button type="submit" name="signin" id="signin" class="form-submit border-0">
                                {loading?<ClipLoader color="#36d7b7" />: <><FiLogIn /> Sign In</> }
                                </button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>

        </section>
      </div>
    </div>
  )
}

export default Signin
