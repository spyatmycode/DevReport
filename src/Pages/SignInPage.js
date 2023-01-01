import React from 'react'
import SignInCss from '../styles/SignInSignUp.module.css'

export default function SignInPage() {
  return (
    <div className={SignInCss.forms}>
        <div className={SignInCss.card}>
        <i className={`${SignInCss.icon} fa-solid fa-user`}></i>
        <h2 className={SignInCss.mheading}>Welcome!</h2>
        <p className={SignInCss.mtext}>Sign in to your account</p>
            <form>
                <div className={SignInCss.formGroup}>
                    <label>E-mail</label>
                    <input type="text" placeholder='Enter your email'/>
                </div>
                <div className={SignInCss.formGroup}>
                    <label>Password</label>
                    <input type="password" placeholder='Enter your password'/>
                </div>
                <div className={SignInCss.formGroup}>
                    <button className={SignInCss.btn} type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    </div>
  )
}
