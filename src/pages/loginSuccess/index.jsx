import React from "react";
import { Helmet } from "../../helpher/helpher";
import '../login/login.css';

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

