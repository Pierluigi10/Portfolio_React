import firstPortfolio from "./images/firstportfolio.png";
import game from "./images/game.png";
import weather from "./images/weather.png";
import matterjs from "./images/matterjs.png";
import mern from "./images/mern.png";
import secondPortfolio from "./images/secondportfolio.png";
import commonDestination from "./images/commondestination.png";

export interface Project {
  id: number;
  title: string;
  img: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 7,
    title: "Final Project: Common Destination",
    img: commonDestination,
    link: "https://commondestination.netlify.app/",
  },
  {
    id: 6,
    title: "Portfolio after six months of study",
    img: secondPortfolio,
    link: "https://pierluigi.netlify.app/",
  },
  {
    id: 5,
    title: "Project with matterJs",
    img: matterjs,
    link: "https://github.com/Pierluigi10/matterjsproject",
  },
  {
    id: 4,
    title: "WeatherApp",
    img: weather,
    link: "https://whatistheweatherlike.netlify.app/",
  },
  {
    id: 3,
    title: "MERN Showcase App",
    img: mern,
    link: "https://mernshowcase-pb-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Funny game in JavaScript",
    img: game,
    link: "https://littlegamejs.netlify.app/",
  },
  {
    id: 1,
    title: "My first portfolio after 1 months of study",
    img: firstPortfolio,
    link: "https://myfirstportfoliodci.netlify.app/",
  },
];
