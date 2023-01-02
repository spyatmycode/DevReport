import React, { useState } from "react";
import SignInCss from "../../styles/SignInSignUp.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignInForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [returnUser, setReturnUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnUser({ ...returnUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(returnUser);
    if (returnUser.email && returnUser.password) {
      await signInWithEmailAndPassword(
        auth,
        returnUser.email,
        returnUser.password
      )
        .then((userCred) => {
          console.log(userCred);
          e.target.reset();
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", true);
          alert("DevReport: Sign In successful");

          navigate("/feed");

          // Email verification sent!

          // ...
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  /* function showPassword() {
    let x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  /* const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState(""); */

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

  function formSubmitHandler(e) {
    let input = {
      email: emailInput,
      password: passwordInput,
    };
    setEmailInput("");
    setPasswordInput("");

    e.preventDefault()
  } */
  return (
    <form onSubmit={handleSubmit}>
      <div className={SignInCss.formGroup}>
        <label className={SignInCss.label}>E-mail</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className={SignInCss.input}
          // value={emailInput}
          // onChange ={emailInputHandler}
        />
      </div>
      <div className={SignInCss.formGroup}>
        <label className={SignInCss.label}>Password</label>
        <div className={SignInCss.password}>
          <input
            onChange={handleChange}
            id="passwordInput"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className={SignInCss.input}
            // value={passwordInput}
            // onChange={passwordInputHandler}
          />
          {
            <i
              className={`${SignInCss.showPassword} far fa-eye`}
              onClick={showPassword}
            ></i>
          }
        </div>
      </div>
      <a href="/">forgot password?</a>
      <div className={SignInCss.formGroup}>
        <button className={SignInCss.btn} type="submit">
          Sign In <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
