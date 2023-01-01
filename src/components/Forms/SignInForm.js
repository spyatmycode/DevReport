import React, { useState } from "react";
import SignInCss from "../../styles/SignInSignUp.module.css";
function SignInForm() {
  function showPassword() {
    let x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

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

  function formSubmitHandler(e) {
    let input = {
      email: emailInput,
      password: passwordInput,
    };
    setEmailInput("");
    setPasswordInput("");

    e.preventDefault()
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={SignInCss.formGroup}>
        <label>E-mail</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={emailInput}
          onChange={emailInputHandler}
        />
      </div>
      <div className={SignInCss.formGroup}>
        <label>Password</label>
        <div className={SignInCss.password}>
          <input
            id="passwordInput"
            type="password"
            placeholder="Enter your password"
            value={passwordInput}
            onChange={passwordInputHandler}
          />
          <i
            className={`${SignInCss.showPassword} far fa-eye`}
            onClick={showPassword}
          ></i>
        </div>
      </div>
      <a href="#">forgot password?</a>
      <div className={SignInCss.formGroup}>
        <button className={SignInCss.btn} type="submit">
          Sign In <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
