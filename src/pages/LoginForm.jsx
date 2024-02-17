import { useState } from "react";
import { LOGO } from "../helpher/helpher";

export function LoginForm() {
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

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
    }
  };

  return (
    <div style={{position:"relative",height:"100%"}}>
      <img src={LOGO} alt="" className="auth-logo" />
      <div style={{ padding: "0% 3.5% 0% 3.5%" }}>
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
              Username
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
              Password
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
