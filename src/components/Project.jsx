import React from "react";

function Project({ el }) {
  return (
    <div className="project_container" key={el.id}>
      <h4>{el.title}</h4>
      <img src={el.image} alt={el.title} className="project_img" />
      <p>{el.description}</p>
      <div className="flex_no_wrap">
        {el.technologies.map((element) => (
          <p className="project_technologies">{element} </p>
        ))}
      </div>
      <div className="project_buttons_container">
        <a href={el.github} target="_blank" rel="noreferrer">
          <button type="button" className="project_button">
            Code Review 👀
          </button>
        </a>
        <a href={el.website} target="_blank" rel="noreferrer">
          <button type="button" className="project_button">
            Visit the website 🛴
          </button>
        </a>
      </div>
    </div>
  );
}

export default Project;
