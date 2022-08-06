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
        <title>Grimoire Portefolio | À propos </title>
      </Helmet>
      <h2>
        À propos de <span className="span">moi</span>
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
              <span className="span"> 5 </span>ans dans le secteur financier
            </h3>
            <p>
              Pendant plus de 5 ans, J'ai travaillé dans le secteur financier.
              Mon expérience professionnelle est vaste. Elle va du grand groupe
              américain, processeur de paiement pour les petites et moyennes
              entreprises du Québec à la plateforme européenne spécialisée dans
              la cryptomonnaie et les NFTs. J'ai également travaillé dans les
              banques traditionnelles françaises et allemandes. Ces expériences
              me permettent aujourd'hui de vous proposer non seulement un site
              internet solide et sécurisé, mais également des services d'aide à
              la négociation auprès de vos partenaires bancaires et financiers.
            </p>
          </article>
          <article>
            <h3 className="travel">
              <span className="span"> 8 </span>ans de voyage
            </h3>
            <p>
              Pendant les 8 dernières années, j'ai travaillé à l'étranger. Non
              seulement j'y ai appris de nouvelles façons de voir et faire les
              choses mais j'y ai également découvert de nouvelles cultures et
              cela m'a permis d'ouvrir mon esprit sur de nombreux sujets. Chaque
              voyage m'a changé en une nouvelle personne. J'ai eu la chance de
              travailler en Autriche, en Allemagne, en Espagne, au Canada, en
              France et à la Réunion. Parce que rien ni personne ne peut
              survivre dans ce monde sans s'adapter, je continue sans cesse de
              sortir de ma zone de confort et vivre avec agilité et
              adaptabilité.
            </p>
          </article>
          <article>
            <h3 className="coding">
              <span className="span"> 22 </span>semaines de formation intensive
              en développement web
            </h3>
            <p>
              Pendant 22 semaines, j'ai travaillé jour et nuit du lundi au
              dimanche pour enfin atteindre mon objectif : Devenir un
              développeur web full stack. J'ai fait de nombreux sacrifices en
              travaillant sans cesse et avec acharnement. Cela m'a permis
              d'acquérir les compétences nécessaire à mon activité actuelle. De
              renforcer également celles que j'avais déjà et surtout de
              confirmer que ce métier était fait pour moi.
            </p>
          </article>
          <div className="flex_container about_me_mobile">
            <a
              href="https://github.com/TerryGrimoire"
              target="_blank"
              rel="noreferrer"
              className="flex_container about_me_a"
            >
              <p className="no_margin">Profil Github</p>
              <img src={github} alt="github" className="about_me_img" />
            </a>
            <a
              href="https://www.linkedin.com/in/terry-grimoire/"
              target="_blank"
              rel="noreferrer"
              className="flex_container about_me_a"
            >
              <p className="no_margin">Profil Linkedin</p>
              <img src={linkedin} alt="linkedin" className="about_me_img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
