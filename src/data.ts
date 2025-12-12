import firstPortfolio from "./images/firstportfolio.png";
import game from "./images/game.png";
import weather from "./images/weather.png";
import matterjs from "./images/matterjs.png";
import mern from "./images/mern.png";
import secondPortfolio from "./images/secondportfolio.png";
import commonDestination from "./images/commondestination.png";
import { Project } from "./types/github";

export const projectsData: Project[] = [
  {
    id: 7,
    title: "Final Project: Common Destination",
    img: commonDestination,
    link: "https://commondestination.netlify.app/",
    repoLink: "https://github.com/Pierluigi10/Common-Destination-Final-Project",
  },
  {
    id: 6,
    title: "Portfolio after six months of study",
    img: secondPortfolio,
    link: "https://pierluigi.netlify.app/",
    repoLink: "https://github.com/Pierluigi10/Portfolio_React",
  },
  {
    id: 5,
    title: "Project with matterJs",
    img: matterjs,
    link: "https://github.com/Pierluigi10/matterjsproject",
    repoLink: "https://github.com/Pierluigi10/matterjsproject",
  },
  {
    id: 4,
    title: "WeatherApp",
    img: weather,
    link: "https://whatistheweatherlike.netlify.app/",
    repoLink: "https://github.com/Pierluigi10/react-weather-app",
  },
  {
    id: 3,
    title: "MERN Showcase App",
    img: mern,
    link: "https://mernshowcase-pb-frontend.vercel.app/",
    repoLink: "https://github.com/Pierluigi10/mernshowcase",
  },
  {
    id: 2,
    title: "Funny game in JavaScript",
    img: game,
    link: "https://littlegamejs.netlify.app/",
    repoLink: "https://github.com/Pierluigi10/littlegamejs",
  },
  {
    id: 1,
    title: "My first portfolio after 1 months of study",
    img: firstPortfolio,
    link: "https://myfirstportfoliodci.netlify.app/",
    repoLink: "https://github.com/Pierluigi10/firstportfolio",
  },
];
