import React, { useEffect, useState } from "react";
import Logout from "../LogOut/index";
import Quiz from "../Quiz";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const [userSession, setUserSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let listener = onAuthStateChanged(auth, (user) => {
      // @ts-ignore
      user ? setUserSession(user) : navigate("/");
    });
    return () => {
      listener();
    };
  }, [navigate]);

  return userSession === null ? (
    <>
      <div className="loader"></div>
      <p className="loaderText">Chargement...</p>
    </>
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout />
        <Quiz />
      </div>
    </div>
  );
};

export default Welcome;
