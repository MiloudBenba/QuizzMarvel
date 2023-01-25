import React, { useRef, useEffect, useState } from "react";

const Landing = () => {
  // const useRef call
  const refWolverine = useRef(null);

  // useState for button
  const [btn, setBtn] = useState(false);

  // useEffect to add/remove "startingImg" class after 1.5s with setTimeout
  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      //button set to true when class is removed
      setBtn(true);
    }, 1500);
  }, []);

  // const for buttons with condition to appear after "startingImg" class removed
  const displayBtn = btn && (
    <>
      <div className="leftBox">
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox">
        <button className="btn-welcome">Connexion</button>
      </div>
    </>
  );

  return (
    <main ref={refWolverine} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;
