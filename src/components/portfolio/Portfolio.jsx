import React from "react";
import Img1 from "../../assets/calculator.png";
import Img2 from "../../assets/food1.png";
import Img3 from "../../assets/weather1.png";
import Img4 from "../../assets/weather1.png";
import Img5 from "../../assets/netflix2.png";
import Img6 from "../../assets/whatsapp5.png";
import Img8 from "../../assets/translator.png";
import Img9 from "../../assets/quiz1.png";

import Img10 from "../../assets/covid1.png";
import "./Portfolio.css";
// import { Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

const data = [
  {
    id: "e1",
    image: Img10,
    title: " Covid Tracker App",
    github: "https://github.com/Gbambor-Jnr/covid-tracker",
    demo: "https://covid-tracker-d2a15.web.app/",
  },

  {
    id: "e2",
    image: Img2,
    title: "React Food Order App",
    github: "https://github.com/Gbambor-Jnr/my-food-app",
    demo: " https://gbambor-jnr.github.io/my-food-app/",
  },
  {
    id: "e3",
    image: Img3,
    title: "Weather App with React",
    github: "https://github.com/Gbambor-Jnr/weather-app",
    demo: "https://gbambor-jnr.github.io/weather-app/",
  },
  {
    id: "e4",
    image: Img8,
    title: "Translator App with React",
    github: "https://github.com/Gbambor-Jnr/language-translator",
    demo: "https://gbambor-jnr.github.io/language-translator/",
  },
  {
    id: "e5",
    image: Img5,
    title: "Netflix Clone with React",
    github: "https://github.com/Gbambor-Jnr/netflix-clone",
    demo: "https://reactfilms-33015.web.app/welcome",
  },
  {
    id: "e6",
    image: Img6,
    title: " Whatsapp Clone with React",
    github: "https://github.com/Gbambor-Jnr/whatsapp-clone",
    demo: " https://gbambor-jnr.github.io/whatsapp-clone/",
  },
  {
    id: "e7",
    image: Img9,
    title: "Quiz Game/App With Typescript",
    github: "https://github.com/Gbambor-Jnr/Quz-App",
    demo: "https://gbambor-jnr.github.io/Quz-App/",
  },
  {
    id: "e2",
    image: Img1,
    title: " Javascript Calculator/Projects",
    github:
      "https://github.com/Gbambor-Jnr/Starter-for-Javascript-calculator/tree/main/starter",
    demo: "https://gbambor-jnr.github.io",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article className="portfolio__item" key={item.id}>
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="text-light">{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={item.demo} className="btn btn-primary" target="_blank">
                  livedemo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
