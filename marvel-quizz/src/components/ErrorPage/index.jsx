// @ts-nocheck
import React from "react";
import errorPageImg from "../../images/batman.png";

const centerH2 = {
  textAlign: "center",
  marginTop: "50px",
};

const centerImg = {
  width: "600px",
  height: "200px",
  display: "block",
  margin: "40px auto",
};
const ErrorPage = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <h2 style={centerH2}>Oups, cette page n'existe pas!</h2>
        <img style={centerImg} src={errorPageImg} alt="error page"></img>
      </div>
    </div>
  );
};

export default ErrorPage;
