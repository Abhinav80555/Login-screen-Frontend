import React from "react";
import "./styles/form.css";
import { Helmet } from "../helpher/helpher";

const LoggedSucces = () => {
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

export default LoggedSucces;
