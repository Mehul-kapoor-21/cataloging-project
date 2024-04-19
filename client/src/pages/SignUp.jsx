import React, { useEffect } from 'react'
import "../styles/signin.scss"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth, useNotification } from '../hooks';
import { createUser } from '../api/auth';
import { FiLogIn } from "react-icons/fi";
import { ClipLoader } from "react-spinners";

const isValidEmail = (email) => {
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    return isValid.test(email);
  };

const validateUserInfo = ({ name, email, password }) => {
    const isValidName = /^[a-z A-Z]+$/;
  
    if (!name.trim()) return { ok: false, error: "Name is missing!" };
    if (!isValidName.test(name)) return { ok: false, error: "Invalid name!" };
  
    if (!email.trim()) return { ok: false, error: "Email is missing!" };
    if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };
  
    if (!password.trim()) return { ok: false, error: "Password is missing!" };
    if (password.length < 8)
      return { ok: false, error: "Password must be 8 characters long!" };
  
    return { ok: true };
  };

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
      });

    const navigate=useNavigate();
    const { authInfo } = useAuth();
    const { isLoggedIn } = authInfo; 

  const { updateNotification } = useNotification();
    
    const handleChange = ({ target }) => {
        const { value, name } = target;
        setUserInfo({ ...userInfo, [name]: value });
      };
    const handleClick=()=>{
        navigate("/sign-up");
    }
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { ok, error } = validateUserInfo(userInfo);
    
        if (!ok) return  updateNotification("error", error);
         setLoading(true)
        const response = await createUser(userInfo);
        setLoading(false)
        if (response.error) return updateNotification("error","error");
    
        updateNotification("success","Registration Successfull Please login  to Continue");
    
        navigate("/sign-in", {
          state: { user: response.user },
          replace: true,
        });
    };

      const { name, email, password } = userInfo;
      useEffect(() => {
        if (isLoggedIn) navigate("/");
      }, [isLoggedIn]);
      const [loading,setLoading] = useState(false)

    return (
        <div>
            <div class="main">

                <section class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <form onSubmit={handleSubmit} class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input value={name}
            onChange={handleChange} type="text" name="name" id="name" placeholder="Your Name" />

                                    </div>
                                    <div class="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <input value={email}
            onChange={handleChange} type="email" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input value={password}
            onChange={handleChange} type="password" name="password" id="password" placeholder="Password" />
                                    </div>
                                   
                                    <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                    </div>
                                    <div class="form-group form-button">
                                        <button type="submit" name="signup" id="signup" class="form-submit border-0" value="Register" >
                                        {loading ? (
                                        <ClipLoader color="#36d7b7" />
                                        ) : (
                                        <>
                                            <FiLogIn /> Sign Up
                                        </>
                                        )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="signup-image">
                                <figure><img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="sing up image"/></figure>
                                <div onClick={handleClick}  class="signup-image-link" >I am already member</div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Signup
