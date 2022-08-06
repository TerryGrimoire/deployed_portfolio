import React from "react";
import AboutMe from "./AboutMe_FR";
import Skills from "./Skills_FR";
import Projects from "./Projects_FR";
import Contact from "./Contact_FR";

function FR({ bgColor, setOuija, ouija }) {
  return (
    <div>
      <AboutMe bgColor={bgColor} />
      <Skills bgColor={bgColor} />
      <Projects bgColor={bgColor} />
      <Contact setOuija={setOuija} ouija={ouija} />
    </div>
  );
}

export default FR;
