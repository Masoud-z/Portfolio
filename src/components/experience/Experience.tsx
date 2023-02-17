import React from "react";
import "./experience.css";
import emotion from "../../assets/emotion.png";
import { BsBootstrap } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiMaterialui, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Toolkit</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details">
            <AiOutlineHtml5 className="experience__details-icon" />
            <h4>HTML</h4>
          </article>

          <article className="experience__details">
            <TbBrandCss3 className="experience__details-icon" />
            <h4>CSS</h4>
          </article>

          <article className="experience__details">
            <SiJavascript className="experience__details-icon" />
            <h4>JavaScript</h4>
          </article>

          <article className="experience__details">
            <SiTypescript className="experience__details-icon" />
            <h4>TypeScript</h4>
          </article>

          <article className="experience__details">
            <FaReact className="experience__details-icon" />
            <h4>React</h4>
          </article>

          <article className="experience__details">
            <TbBrandNextjs className="experience__details-icon" />
            <h4>Next.js</h4>
          </article>

          <article className="experience__details">
            <img
              src={emotion}
              alt="Emotion"
              className="experience__details-img"
            />
            <h4>Emotion</h4>
          </article>

          <article className="experience__details">
            <SiMaterialui className="experience__details-icon" />
            <h4>Material UI</h4>
          </article>

          <article className="experience__details">
            <BsBootstrap className="experience__details-icon" />
            <h4>Bootstrap</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
