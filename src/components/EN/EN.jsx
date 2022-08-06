import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function EN({ bgColor, setOuija, ouija }) {
  return (
    <div>
      <AboutMe bgColor={bgColor} />
      <Skills bgColor={bgColor} />
      <Projects bgColor={bgColor} />
      <Contact setOuija={setOuija} ouija={ouija} />
    </div>
  );
}

export default EN;
