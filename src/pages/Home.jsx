import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import "../App.css";

export default function Home() {
  const [bgColor, setBgColor] = useState("container");
  const [ouija, setOuija] = useState("arrow_button");

  return (
    <main className={bgColor}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Grimoire Portfolio | Home </title>
      </Helmet>
      <Header setBgColor={setBgColor} />
      {bgColor !== "container" && (
        <div>
          <AboutMe bgColor={bgColor} />
          <Skills bgColor={bgColor} />
          <Projects bgColor={bgColor} />
          <Contact setOuija={setOuija} ouija={ouija} />
        </div>
      )}
    </main>
  );
}
