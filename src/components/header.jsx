import React, { useState, useEffect } from "react";

import "../App.css";

export default function Header({ setBgColor }) {
  const [good, setGood] = useState(false);
  const [bad, setBad] = useState(false);

  const handleClick = (setYes, setNo) => {
    setNo(false);
    setYes(true);
  };

  useEffect(() => {
    if (good) {
      setBgColor("good good_animation");
    } else if (bad) {
      setBgColor("bad  bad_animation");
    } else {
      setBgColor("container");
    }
  }, [good, bad]);

  return (
    <header className="section_container" id="Home">
      <div className="welcome_section">
        <h1> Welcome to my Grimoire !</h1>
        <h2 className="acc">Are you a good witch or a bad witch ?</h2>
      </div>

      <div className="buttons_container">
        <button
          className="button_style white"
          type="button"
          onClick={() => handleClick(setGood, setBad)}
        >
          Good Witch
        </button>
        <button
          className="button_style black"
          type="button"
          onClick={() => handleClick(setBad, setGood)}
        >
          Bad Witch
        </button>
      </div>
    </header>
  );
}
