import { useContext, useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import { scrolledComponent } from "../../helper/scrolled";

const Portfolio = () => {
  let active = false;
  const { scrolled, setScrolled }: any = useContext(scrolledComponent);

  if (scrolled == "#portfolio" || scrolled == "#contact") {
    active = true;
  }

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className={active ? "container portfolio__container" : "deavtive"}>
        <article className="portfolio__item first">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="title" />
          </div>
          <h3>title</h3>

          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn font"
            >
              Github
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary font"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item second">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="title" />
          </div>
          <h3>title</h3>

          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn font"
            >
              Github
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary font"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item third">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="title" />
          </div>
          <h3>title</h3>

          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn font"
            >
              Github
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary font"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
