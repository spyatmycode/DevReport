import React from 'react'
import SignInCss from '../styles/SignInSignUp.module.css'

export default function SignInPage() {
  return (
    <div className={SignInCss.forms}>
        <div className={SignInCss.card}>
            <form>
                <div className={SignInCss.formGroup}>
                    <label>E-mail</label>
                    <input type="text"/>
                </div>
                <div className={SignInCss.formGroup}>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div className={SignInCss.formGroup}>
                    <button className={SignInCss.btn} type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    </div>
  )
}
