import React, { useState } from "react";
import skillsData from "../../data/skillsData";

function Skills() {
  const [skills, setSkills] = useState("hard");

  return (
    <section>
      <h2 className="skills_title">Skills</h2>
      <div className="button_container">
        <button
          type="button"
          className={
            skills === "hard" ? "button_style2 selected_item" : "button_style2"
          }
          onClick={() => setSkills("hard")}
        >
          Hard Skills
        </button>
        <button
          type="button"
          className={
            skills === "soft" ? "button_style2 selected_item" : "button_style2"
          }
          onClick={() => setSkills("soft")}
        >
          Soft Skills
        </button>
      </div>

      <div className="basic_flex">
        {skillsData
          .filter((el) => el.type === skills)
          .map((el) => (
            <div className="skill_container">
              <img src={el.image} alt={el.title} className="logo_skills" />
              <p> {el.title} </p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skills;
