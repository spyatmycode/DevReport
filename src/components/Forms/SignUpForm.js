import React, { useState } from "react";
import SignUpCss from "../../styles/SignInSignUp.module.css";

import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth } from "../../firebase/firebaseConfig";


function SignUpForm({ setIsLoggedIn }) {
  /* const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setconfirmPasswordInput] = useState(""); */

  const [newUser, setNewUser] = useState({ email: "", password: "", username: "" });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value })

  }







  const handleSubmit = async (e) => {

    e.preventDefault()
    if ((newUser.password === newUser.confirmPassword) && newUser.email && newUser.password) {
      console.log(newUser);
      await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((userCred) => {
          console.log(userCred);
          e.target.reset()
          sendEmailVerification(auth.currentUser)
          setIsLoggedIn(true)

          updateProfile(auth.currentUser, {
            displayName: newUser.username
          })

          console.log(auth.currentUser);


          // Email verification sent!
          alert("Email verification sent !")
          // ...
        }).catch((err) => {
          console.log(err);
        })

    }
    else {
      console.log("Passwords do not match");
    }
    /* await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCred) => {
        console.log(userCred);
      })
      .catch((err) => {
        console.log(err);
      })

    e.target.reset()
    setNewUser({}) */

  }

  function showPassword() {
    let x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  /* function emailInputHandler(e) {
    let input = e.target.value;
    setEmailInput(input);
  }
  function passwordInputHandler(e) {
    let input = e.target.value;
    setPasswordInput(input);
  }
  function confirmPasswordInputHandler(e) {
    let input = e.target.value;
    setconfirmPasswordInput(input)
  }
  function formSubmitHandler(e) {
    let input = {
      email: emailInput,
      password: passwordInput,
      confirmPassword: confirmPasswordInput
    }
    setEmailInput('')
    setPasswordInput('')
    setconfirmPasswordInput('')
  
    e.preventDefault()
  } */


  return (
    <form onSubmit={handleSubmit}>
      <div className={SignUpCss.formGroup}>
        <label className={SignUpCss.label}>E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          // value={emailInput}
          onChange={handleChange}
          className={SignUpCss.input}
          required
        />
      </div>
      <div className={SignUpCss.formGroup}>
        <label className={SignUpCss.label}>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your email"
          // value={emailInput}
          onChange={handleChange}
          className={SignUpCss.input}
        />
      </div>
      <div className={SignUpCss.formGroup}>
        <label className={SignUpCss.label}>Password</label>
        <div className={SignUpCss.password}>
          <input
            id="passwordInput"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className={SignUpCss.input}
            // value={passwordInput}
            onChange={handleChange}
          />
          <i
            className={`${SignUpCss.showPassword} far fa-eye`}
            onClick={showPassword}
          ></i>
        </div>
      </div>
      <div className={SignUpCss.formGroup}>
        <label className={SignUpCss.label}>Confirm Password</label>
        <div className={SignUpCss.password}>
          <input

            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            // value={confirmPasswordInput}
            className={SignUpCss.input}
            onChange={handleChange}
          />
          <i
            className={`${SignUpCss.showPassword} far fa-eye`}
            onClick={showPassword}
          ></i>
        </div>
      </div>
      <div className={SignUpCss.formGroup}>
        <button className={SignUpCss.btn} type="submit">
          Sign Up <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
