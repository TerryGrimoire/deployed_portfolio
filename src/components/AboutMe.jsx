import React from "react";
import terry from "../assets/terry.png";

function AboutMe() {
  return (
    <section id="About" className="section_container">
      <h2>
        About <span className="span">me</span>{" "}
      </h2>
      <div className="flex_container">
        <img src={terry} alt="terry" className="img_medium_size" />
        <div className="article_container">
          <article>
            <h3 className="finance">
              <span className="span">5</span>years in Financial Sector
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
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
