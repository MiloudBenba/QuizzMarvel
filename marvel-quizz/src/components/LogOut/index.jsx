import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (checked) {
      signOut(auth)
        .then(() => {
          console.log("Vous êtes déconnecté");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          console.log("Une erreur est survenue !");
        });
    }
  }, [checked, navigate]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span className="slider"></span>
        <p>Se déconnecter</p>
      </label>
    </div>
  );
};

export default Logout;
