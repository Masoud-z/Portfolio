import { useContext } from "react";
import "./portfolio.css";
import netflixIMG from "../../assets/netflix.jpg";
import landSurferIMG from "../../assets/landSurfer.jpg";
import bracketGeneraIMG from "../../assets/tournamentBracketGenerator.jpg";
import { scrolledComponent } from "../../helper/scrolled";

const Portfolio = () => {
  let active = false;
  const { scrolled }: any = useContext(scrolledComponent);

  if (scrolled === "#portfolio" || scrolled === "#contact") {
    active = true;
  }

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <article className="portfolio__description">
        <p>
          Fortunately I got hired soon after I started learning. Since all the
          code I've written for the company has been private, my Github account
          and portfolio make it look like I didn’t code at all. But I have been
          busy writing code almost every day for past two years.
        </p>
      </article>

      <div className={active ? "container portfolio__container" : "deactive"}>
        <article className="portfolio__item first">
          <div className="portfolio__item-image">
            <img src={landSurferIMG} alt="title" />
          </div>
          <h3>LandSurfer</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Masoud-z/LandSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn font"
            >
              Github
            </a>
            <a
              href="https://land-surfer.vercel.app"
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
            <img src={bracketGeneraIMG} alt="title" />
          </div>
          <h3>Tournament Bracket Generator</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Masoud-z/Tournament-Bracket-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn font"
            >
              Github
            </a>
            <a
              href="https://tournament-bracket-generator-masoud-z.vercel.app/"
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
            <img src={netflixIMG} alt="title" />
          </div>
          <h3>NETFLIX Clone</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Masoud-z/NETFLIX-Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="btn font"
            >
              Github
            </a>
            <a
              href="https://masoud-z.github.io/NETFLIX-Clone/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary font"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item third">
          <div className="portfolio__item-image">
            <img src={netflixIMG} alt="title" />
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
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
