import React from 'react'
import Form from '../components/Forms/Form';
import SignInForm from '../components/Forms/SignInForm';
import SignInCss from '../styles/SignInSignUp.module.css'

export default function SignInPage() {
  return (
    <Form>
            <i className={`${SignInCss.icon} fa-solid fa-arrow-right-to-bracket`}></i>
            <h2 className={SignInCss.mheading}>Welcome!</h2>
            <p className={SignInCss.mtext}>Sign in to your account</p>
            <SignInForm></SignInForm>
    </Form>
  )
}
