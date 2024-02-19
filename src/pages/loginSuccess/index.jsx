import React from "react";
import '../login/login.css';
import { Helmet } from "../../helper/helper";

export const LoginSuccess = () => {
  const title = "Logged In Successfully";
  Helmet(title);
  return (
    <div className="not-found-container">
      <p className="logged-message">
        Logged-In <br />
        Successfully
      </p>
    </div>
  );
};

