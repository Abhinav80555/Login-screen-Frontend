import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, MAN } from "../../helper/helper";
import "./login.css";

export function LoginForm({ setIsLogged }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const staticEmail = "test@paperflite.com";
  const staticPassword = "12345678";
  const title = "Login";

  Helmet(title);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required.");
      return false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email id.");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Password is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    if (isEmailValid && isPasswordValid) {
      if (email === staticEmail && password === staticPassword) {
        setIsLogged(true);
        setTimeout(() => {
          navigate("/logged");
        }, 100);
      } else {
        setPasswordError("Incorrect email or password.");
      }
    }
  };

  return (
    <>
      <div className="login-form-container">
        <h2 className="auth-card-header">
          Please login to <br />
          continue
        </h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="email"
              id="email"
              spellCheck={false}
              className="form__field"
              placeholder="Your Email"
              autoComplete="off"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="email" className="form__label">
              username
            </label>
            <p className="validation-error-text">{emailError}</p>
          </div>
          <div className="form__group">
            <input
              type="password"
              id="password"
              spellCheck={false}
              className="form__field"
              placeholder="Your password"
              autoComplete="off"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="password" className="form__label">
              password
            </label>
            <p className="validation-error-text">{passwordError}</p>
          </div>

          <p className="text-nav-link f-12 forgot-text">
            <Link
              style={{ display: "contents", width: "max-contents" }}
              to={"/forgot"}
              className="text-nav-link"
            >
              Forgot password?
            </Link>
          </p>

          <button type="submit" className="primary-btn">
            Continue
          </button>
        </form>
      </div>

      <p className="auth-card-footer">
        Don’t have an account?
        <Link style={{ display: "contents" }} to={"/signup"}>
          <span className="text-nav-link f-16 signup-text">Sign up</span>
        </Link>
      </p>

      <div className="man-img-container">
        <img src={MAN} alt="man-img" className="man-img" />
      </div>
    </>
  );
}
