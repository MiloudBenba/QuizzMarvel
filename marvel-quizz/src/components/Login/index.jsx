import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // state const for email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // connection button state for appearance condition
  const [btn, setBtn] = useState(false);
  // const state to handle error
  const [error, setError] = useState("");
  // useNavigate redirection
  const navigation = useNavigate();

  // useeffect to check under condition if email/password matchs minimum requirements
  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  // submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        navigation("/welcome", { replace: true });
        // ...
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error);
      });
  };

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin"></div>
        <div className="formBoxRight">
          <div className="formContent">
            <h2>Connexion</h2>
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

              <div className="inputBox">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>

              {btn ? (
                <button>Connexion</button>
              ) : (
                <button disabled>Connexion</button>
              )}
            </form>
            <div className="linkContainer">
              <span>
                <Link className="simpleLink" to="/signup">
                  Nouveau sur Marvel quiz? Inscrivez-vous.
                </Link>
              </span>
              <span>
                <Link className="simpleLink" to="/forgetpassword">
                  Vous avez oublié votre mot de passe? réinitialisez-le ici.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
