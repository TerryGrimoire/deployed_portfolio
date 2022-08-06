import React from "react";
import { Helmet } from "react-helmet";
import terry from "../../assets/terry.png";
import Goodwitch from "../../assets/Goodwitch.png";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

function AboutMe({ bgColor }) {
  return (
    <section id="About" className="section_container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Grimoire Portfolio | About Me </title>
      </Helmet>
      <h2>
        About <span className="span">me</span>
      </h2>
      <div className="flex_container">
        <img
          src={bgColor.includes("good") ? Goodwitch : terry}
          alt="terry"
          className="img_medium_size"
        />
        <div className="article_container">
          <article>
            <h3 className="finance">
              <span className="span"> 5 </span>years in Financial Sector
            </h3>
            <p>
              For more than five years, I have been working in the financial
              sector. From traditional organizations to startups; I know the
              ways and practices of traditional banks and have experienced the
              excitement and intensity of expanding fintechs. My work experience
              goes from huge American payment services providers to European
              Cryptocurrencies and NFTs Exchanges. I can proudly say that the
              financial industry holds no more secrets for me.
            </p>
          </article>
          <article>
            <h3 className="travel">
              <span className="span"> 8 </span>years travelling
            </h3>
            <p>
              For the last eight years, I have been working abroad, not only
              learning new ways of doing things, but also discovering new
              cultures and opening my mind to so many topics. With each travel,
              I grew into another person. I worked in Austria, Germany, Spain,
              Canada, France and La Réunion. I strongly believe that no one can
              survive in this world without adaptation. Traveling is the best
              way to become agile and more adaptable.
            </p>
          </article>
          <article>
            <h3 className="coding">
              <span className="span"> 22 </span>weeks of intensive web
              development course
            </h3>
            <p>
              For 22 weeks, I have been working day and night from Monday to
              Sunday to finally achieve my goal: Become a full-stack web
              developer. Sacrifices were made, and long terrible nights were
              spent, but there is not an inch of regret. I deeply believe that
              this is what I am meant to be.
            </p>
          </article>
          <div className="flex_container about_me_mobile">
            <a
              href="https://github.com/TerryGrimoire"
              target="_blank"
              rel="noreferrer"
              className="flex_container about_me_a"
            >
              <p className="no_margin">Github profile</p>
              <img src={github} alt="github" className="about_me_img" />
            </a>
            <a
              href="https://www.linkedin.com/in/terry-grimoire/"
              target="_blank"
              rel="noreferrer"
              className="flex_container about_me_a"
            >
              <p className="no_margin">Linkedin profile</p>
              <img src={linkedin} alt="linkedin" className="about_me_img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
