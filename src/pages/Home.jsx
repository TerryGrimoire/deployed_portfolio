import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/EN/header";
import FR from "../components/FR/FR";
import EN from "../components/EN/EN";

import "../App.css";

export default function Home() {
  const [bgColor, setBgColor] = useState("");
  const [language, setLanguage] = useState("fr");
  const [ouija, setOuija] = useState("arrow_button");

  return (
    <main className={bgColor}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Grimoire Portfolio | Home </title>
        <link rel="canonical" href="https://www.terry-grimoire.fr/" />
        <meta
          name="description"
          content="Développeur web et fondateur du Grimoire Numérique, découvrez mon portefolio."
        />
      </Helmet>
      <Header
        setBgColor={setBgColor}
        language={language}
        setLanguage={setLanguage}
      />
      {bgColor !== "container" &&
        (language === "fr" ? (
          <FR ouija={ouija} setOuija={setOuija} bgColor={bgColor} />
        ) : (
          <EN ouija={ouija} setOuija={setOuija} bgColor={bgColor} />
        ))}
    </main>
  );
}
