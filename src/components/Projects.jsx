import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import projectData from "../data/projectData";

function Projects() {
  return (
    <div className="container_carousel">
      <h2 className="project_title">My Projects</h2>
      <Carousel autoPlay infiniteLoop interval={3000} showStatus={false}>
        {projectData.map((el) => (
          <div className="project_container" key={el.id}>
            <a href={el.website} target="_blank" rel="noreferrer">
              <img src={el.image} alt={el.title} className="project_img" />
            </a>
            <h4>{el.title}</h4>
            <p className="span_mobile">{el.description}</p>
            <div className="flex_no_wrap span_mobile">
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
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
