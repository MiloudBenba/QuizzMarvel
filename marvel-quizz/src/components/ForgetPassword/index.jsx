// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // css style for span popUp success when email sent
  const popUpSuccess = {
    border: "1 solid green",
    background: "green",
    color: "#f1f1f1",
  };
  // css style for span popUp when error has occurred
  const popUpError = {
    border: "1 solid red",
    background: "red",
    color: "#f1f1f1",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError(null);
        // Error message alert
        setSuccess(
          `Un email pour réinitialiser votre mot de passe vient d'être envoyé à l'adresse ${email}`
        );
        setEmail(null);

        setTimeout(() => {
          navigate("/login");
        }, 5000);
      })
      .catch(() => {
        // Error message alert
        setError("L'adresse email n'est pas reconnue, veuillez vérifier.");
        setEmail(null);
      });
  };

  const disabled = email === "";

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftForget"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {success && <span style={popUpSuccess}>{success}</span>}
            {error && <span style={popUpError}>{error}</span>}
            <h2>Mot de passe oublié ?</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <button disabled={disabled}>Récuperer mon mot de passe</button>
            </form>
            <div className="linkContainer">
              <span>
                <Link className="simpleLink" to="/login">
                  Connectez-vous
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
