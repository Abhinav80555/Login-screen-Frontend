import React from "react";
import { useNavigate } from "react-router-dom";
import "../login/login.css";
import { Helmet } from "../../helper/helper";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const title = "Page Not Found";
  Helmet(title);
  return (
    <>
      <div className="not-found-container">
        <p className="logged-message">
          <span style={{ fontSize: "20px", fontWeight: "600" }}>404</span>
          <br />
          Oops ! page not found.
        </p>
        <button
          type="button"
          className="primary-btn"
          style={{ width: "90%" }}
          onClick={() => navigate("/")}
        >
          Back to login
        </button>
      </div>
    </>
  );
};
