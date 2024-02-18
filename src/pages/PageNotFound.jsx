import React from "react";
import "./styles/form.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="not-found-container">
        <p className="logged-message">
          <span style={{fontSize:"20px",fontWeight:"600",}}>404</span>
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

export default PageNotFound;
