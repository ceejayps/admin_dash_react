import React, { useRef } from "react";
import { BiLock, BiUser } from "react-icons/bi";
import { FaLock, FaPersonBooth, FaUser } from "react-icons/fa";
import "../signIn.css";

const SignIn = () => {
  const onSubmit = (e) => {

  };

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="signInDiv">
      <form className="SignUpForm" onSubmit={onSubmit}>
        <div className="formTitleTextDiv">
          <label htmlFor="LOGIN" className="formTitleText">
            LOGIN
          </label>
        </div>

        <label htmlFor="email">Email</label>

        <div className="formInputDiv">
          <BiUser className="formInputIcons" />
          <input
            ref={emailRef}
            type="email"
            placeholder="email@mail.com"
            id="email"
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className="formInputDiv">
          <BiLock className="formInputIcons" />
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="type your password"
          />
        </div>
        <div className="forgetPasswordButton">
          <p></p>
          <label htmlFor="forgetpassword">Forgot Password</label>
        </div>

        <button className="formSubmitButton" type="submit">
          Sign In
        </button>

        <div className="createAccount">
          <p>don't have an account? <span>Register</span></p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
