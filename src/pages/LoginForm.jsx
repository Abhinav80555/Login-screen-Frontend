import { useState } from "react";
import './styles/form.css'
import { LOGO } from "../helpher/helpher";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email id");
    } else if (!password.trim()) {
      setPasswordError("Password is required");
    } else {
      navigate("/logged");
    }
  };

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <img src={LOGO} alt="" className="auth-logo" />
      <div  className="login-form-container">
        <h2 className="auth-card-header">
          Please login to <br />
          continue
        </h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="email"
              id="email"
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
          <p className="text-nav-link" style={{ fontSize: "12px" }}>
            Forgot password?
          </p>
          <button type="submit" className="primary-btn">
            Continue
          </button>
        </form>
      </div>
      <p className="auth-card-footer">
        Don’t have an account?
        <span
          className="text-nav-link"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            marginLeft: "5px",
          }}
        >
          Sign up
        </span>
      </p>
    </div>
  );
}
