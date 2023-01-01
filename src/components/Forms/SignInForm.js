import React from 'react'
import SignInCss from '../../styles/SignInSignUp.module.css'
function SignInForm() {
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
        <div className={SignInCss.formGroup}>
            <label>E-mail</label>
            <input type="text" placeholder='Enter your email'/>
        </div>
        <div className={SignInCss.formGroup}>
            <label>Password</label>
            <div className={SignInCss.password}>
                <input id="passwordInput" type="password" placeholder='Enter your password'/>
                <i className={`${SignInCss.showPassword} far fa-eye`} onClick={showPassword}></i>
            </div>
        </div>
        <a href='#'>forgot password?</a>
        <div className={SignInCss.formGroup}>
            <button className={SignInCss.btn} type='submit'>Sign In <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </form>
  )
}

export default SignInForm