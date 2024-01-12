import { useContext } from "react";
import "./about.css";
import me from "../../assets/me-about.jpg";
import CV from "../../assets/Masoud-Zeinalabedini.pdf";
import { scrolledComponent } from "../../helper/scrolled";

const About = () => {
  const { scrolled }: any = useContext(scrolledComponent);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className="size">
        <span className="color">About</span> Me
      </h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="border">
            <p>
              Hi there! I'm <span className="name">Masoud</span>, a
              <span className="color"> Wed Developer (React | Node.js)</span>{" "}
              with <span className="color"> three years </span> of
              experience with a background in Game Development.
              <br /> <br />
              I'm always looking for opportunities to expand upon my skills and{" "}
              <span className="color">
                am currently seeking a full-time Web developer
                position
              </span>
              .
            </p>
          </div>

          <div className="cta">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
            <a href={CV} download className="btn">
              Download CV
            </a>
          </div>
        </div>

        <div className="about__me">
          <div
            className={
              scrolled === "#about"
                ? "about__me-image active"
                : "about__me-image "
            }
          >
            <img src={me} alt="Masoud" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
