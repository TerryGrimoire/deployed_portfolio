import lemontecito from "../assets/lemontecito.png";
import error404 from "../assets/error404.png";
import earthkeeper from "../assets/earthkeeper.png";
import eductesvieux from "../assets/eductesvieux.png";
import dragrace from "../assets/dragrace.png";
import portfolio from "../assets/portfolio.png";

const projectData = [
  {
    id: 0,
    title: "Le Montecito 🍸",
    image: lemontecito,
    description:
      "Le Montecito is one of my favourite bar in Nantes. A month before my intensive course started, I decided to train in HTML/CSS and created from scratch this website. It's my first project ever and a new version of the website is to be developped in a near future with React.",
    technologies: ["HTML5", "CSS3"],
    website: "https://www.lemontecito.fr/",
    github: "https://github.com/TerryGrimoire/Montecito",
  },
  {
    id: 1,
    title: "ERROR 404 ⛔",
    image: error404,
    description:
      "First project in group - Wild Code School : We had 2 weeks to create a fully responsive website using mostly HTML and CSS. We also added some vanilla JavaScript but the main goal of this project was to train on HTML and CSS. After noticing that we no longer found the error 404 when navigating online, we decided to create a website to save the ERROR 404. The ERRROR 404 : Page not found, is part of the geek culture but also part of the web history. As developers, we must preserve those things and that's the reason why we started this project.",
    technologies: ["HTML5", "CSS3", "JavaScript Vanilla"],
    website:
      "https://kevinlavigne.github.io/projet1-error404/accueil.html?fbclid=IwAR3XNExTYM4jE2B1gzH3i3vIAAcGAxjpsATgBzjwkeCyQKI9MskNZz034oM",
    github: "https://github.com/TerryGrimoire/Error404",
  },
  {
    id: 2,
    title: "3arth-keeper 🌍",
    image: earthkeeper,
    description:
      "Our second project at the Wild Code School. We now have to use React to create a responsive website. Our data must be fetched from APIs from our choice. We decided to create a website about the critical situation of the earth. We created our website based on the idea that we have 3 years left before it's too late. We read the report of the Intergovernmental Panel on Climate Change, IPCC and we decided that we have to do something about it.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "API Rest"],
    website: "https://3arthkeeper.netlify.app/",
    github: "https://github.com/TerryGrimoire/3arth-keeper",
  },
  {
    id: 3,
    title: "EducTesVieux 👧",
    image: eductesvieux,
    description:
      "It was created in 24H during a Hackathon. The chosen subject was ecology. We competed against 12 other teams. We won the second place of the Hackathon and the price for best UX Design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "API Rest"],
    website: "https://eductesvieux.netlify.app/",
    github: "https://github.com/TerryGrimoire/EducTesVieux",
  },
  {
    id: 4,
    title: "Drag Race project 👑",
    image: dragrace,
    description:
      "This is one of my first personal project. I wanted to work on things that I like and creating a website about my favourite drag queens seems like the best idea to me.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "API Rest"],
    website: "https://mamaru.netlify.app/",
    github: "https://github.com/TerryGrimoire/Drag-Race",
  },
  {
    id: 5,
    title: "My portfolio 🪄",
    image: portfolio,
    description: "My personal portfolio with all my projects.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "API Rest"],
    website: "https://github.com/TerryGrimoire/Portefolio",
    github: "https://github.com/TerryGrimoire/Portefolio",
  },
];

export default projectData;
