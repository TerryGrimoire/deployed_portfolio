import React, { useState, useEffect } from "react";

import "../../App.css";
import uk from "../../assets/royaume-uni.png";
import fr from "../../assets/france.png";

export default function Header({ setBgColor, language, setLanguage }) {
  const [good, setGood] = useState(false);
  const [bad, setBad] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = (setYes, setNo) => {
    setNo(false);
    setYes(true);
  };

  const handleLanguage = (langue) => {
    setLanguage(langue);
    setOpen(false);
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
    <header
      className={
        good && bad
          ? "section_container header_container"
          : "section_container_initial header_container"
      }
      id="Home"
    >
      {language === "uk" ? (
        <div className="welcome_section">
          <h1> Welcome to my Grimoire !</h1>
          <h2 className="acc">Are you a good witch or a bad witch ?</h2>
        </div>
      ) : (
        <div className="welcome_section">
          <h1> Bienvenue dans mon Grimoire !</h1>
          <h2 className="acc">
            Es-tu une gentille sorcière ou une méchante sorcière ?
          </h2>
        </div>
      )}

      <div className="buttons_container">
        <button
          className="button_style white"
          type="button"
          onClick={() => handleClick(setGood, setBad)}
        >
          {language === "uk" ? "Good Witch" : "Gentille sorcière"}
        </button>
        <button
          className="button_style black"
          type="button"
          onClick={() => handleClick(setBad, setGood)}
        >
          {language === "uk" ? "Bad Witch" : "Méchante sorcière"}
        </button>
      </div>
      <div className="language">
        <button
          type="button"
          className="no_button"
          onClick={() => setOpen(!open)}
        >
          {language === "fr" ? (
            <img src={fr} alt="drapeau français" />
          ) : (
            <img src={uk} alt="drapeau anglais" />
          )}
        </button>
        {open && (
          <div className="language">
            <button type="button" onClick={() => handleLanguage("fr")}>
              Français
            </button>
            <button type="button" onClick={() => handleLanguage("uk")}>
              English
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
