import React, { useState } from "react";
import SignUpCss from "../../styles/SignInSignUp.module.css";

function SignUpForm() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setconfirmPasswordInput] = useState("");
  function showPassword() {
    let x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function emailInputHandler(e) {
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
  function formSubmitHandler(e){
    let input = {
        email: emailInput,
        password: passwordInput,
        confirmPassword: confirmPasswordInput
    }
    setEmailInput('')
    setPasswordInput('')
    setconfirmPasswordInput('')

    e.preventDefault()
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={SignUpCss.formGroup}>
        <label>E-mail</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={emailInput}
          onChange={emailInputHandler}
        />
      </div>
      <div className={SignUpCss.formGroup}>
        <label>Password</label>
        <div className={SignUpCss.password}>
          <input
            id="passwordInput"
            type="password"
            placeholder="Enter your password"
            value={passwordInput}
            onChange={passwordInputHandler}
          />
          <i
            className={`${SignUpCss.showPassword} far fa-eye`}
            onClick={showPassword}
          ></i>
        </div>
      </div>
      <div className={SignUpCss.formGroup}>
        <label>Confirm Password</label>
        <div className={SignUpCss.password}>
          <input
            id="passwordInput"
            type="password"
            placeholder="Confirm your password"
            value={confirmPasswordInput}
            onChange={confirmPasswordInputHandler}
          />
          <i
            className={`${SignUpCss.showPassword} far fa-eye`}
            onClick={showPassword}
          ></i>
        </div>
      </div>
      <div className={SignUpCss.formGroup}>
        <button className={SignUpCss.btn} type="submit">
          Sign Up <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
