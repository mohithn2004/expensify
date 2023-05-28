/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import './LoginScreen.css'


function LoginScreen() {
  return (
    <div className='login-page'>
    <div classname='Logo'>
    
    </div>
    <div className='dragon-pic'>
    <Image src="/dragon (3)-1.png" height={100} width={595} alt='logo' />
    </div>
    <div className='dont-have-an-account'> 
    <h1>don't have an account?</h1>
    </div>

    <div >
    <p className='create-account'>Create an account</p>
    <div className='create-account-line'></div>
    </div>

    <div className='about-us'>
    <h1 className='about-us-heading'>About us</h1>
    <p className='about-us-text'>Introducing Expensify, a comprehensive and user-friendly web application designed to empower individuals in effectively managing their personal finances. MoneyTracker offers a seamless experience by providing a range of features, including user registration and authentication, expense tracking, budget management, financial insight, notifications, and reminders.</p>
    </div>

    <div className='login-form'>
    <div className='login-info'>
    {/* <div className='logo'> */}
      {/* <img src="../images/logos-ui/dragon.jpg" alt='Logo'  width="500" height="600" /> */}
    {/* </div> */}
        <h1 className='login-to-your-account'>Login to your account</h1>
        <form>
            <div className='form-group'>
                <div className='username-section'>
                <label className='username'>Username</label>
                <input type='text' name='username' className='username-input'/>
                <div className='username-line'></div>
                </div>
                <div className='password-section'>
                <label className='password'>Password</label>
                <input type='password' name='password' className='password-input' />
                <div className='password-line'></div>
                <div className='login-footer'>
                   <input className='checkbox' type='checkbox' />
                   <p className='remember-me'>remember me</p>

            
                      <p className='forgot-password'>forgot password</p>
        

                </div>
                <div className='login-button'>
                  <a href="./HomeScreen.js">HomeScreen</a>
                  <div className='login-text'>
                  Login
                  </div>
                  

                  </div>
                </div>
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default LoginScreen