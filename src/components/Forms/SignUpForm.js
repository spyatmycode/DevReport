import React from 'react'
import SignUpCss from '../../styles/SignInSignUp.module.css'

function SignUpForm() {
        function showPassword() {
            let x = document.getElementById("passwordInput");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password"
            }
        }
  return (
    <form>
        <div className={SignUpCss.formGroup}>
            <label>E-mail</label>
            <input type="text" placeholder='Enter your email'/>
        </div>
        <div className={SignUpCss.formGroup}>
            <label>Password</label>
            <div className={SignUpCss.password}>
                <input id="passwordInput" type="password" placeholder='Enter your password'/>
                <i className={`${SignUpCss.showPassword} far fa-eye`} onClick={showPassword}></i>
            </div>
        </div>
        <div className={SignUpCss.formGroup}>
            <label>Confirm Password</label>
            <div className={SignUpCss.password}>
                <input id="passwordInput" type="password" placeholder='Enter your password'/>
                <i className={`${SignUpCss.showPassword} far fa-eye`} onClick={showPassword}></i>
            </div>
        </div>
        <a href='#'>forgot password?</a>
        <div className={SignUpCss.formGroup}>
            <button className={SignUpCss.btn} type='submit'>Sign In <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </form>
  )
}


export default SignUpForm;