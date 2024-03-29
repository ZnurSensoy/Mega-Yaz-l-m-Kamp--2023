import React from "react";
import Register from "./Register";
import Login from "./Login";
import "./Auth.css";

const Author = () => {
  return (
    <React.Fragment>
      <section className="account-page">
        <div className="container">
          <div className="account-wrapper">
            <Login />
            <Register />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Author;