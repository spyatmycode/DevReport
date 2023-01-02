import React from 'react'
import Form from '../components/Forms/Form'
import SignUpForm from '../components/Forms/SignUpForm'
import SignUpCss from '../styles/SignInSignUp.module.css'

function SignUpPage({ setIsLoggedIn }) {
  return (
    <Form>
      <i className={`${SignUpCss.icon} fa-solid fa-user`}></i>
      <h2 className={SignUpCss.mheading}>Create New Account!</h2>
      <SignUpForm setIsLoggedIn={setIsLoggedIn} />
    </Form>
  )
}

export default SignUpPage