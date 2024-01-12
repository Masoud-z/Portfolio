import { useRef, useEffect } from "react";
import "./experience.css";
import emotion from "../../assets/emotion.png";
import { BsBootstrap } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiMaterialui,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiStorybook,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";

const Experience = () => {
  const tiltRef1: any = useRef();
  const tiltRef2: any = useRef();
  const tiltRef3: any = useRef();
  const tiltRef4: any = useRef();
  const tiltRef5: any = useRef();
  const tiltRef6: any = useRef();
  const tiltRef7: any = useRef();
  const tiltRef8: any = useRef();
  const tiltRef9: any = useRef();
  const tiltRef10: any = useRef();
  const tiltRef11: any = useRef();
  const tiltRef12: any = useRef();
  const tiltRef13: any = useRef();
  const tiltRef14: any = useRef();
  const tiltRef15: any = useRef();
  useEffect(() => {
    const tiltNode1: any = tiltRef1.current;
    VanillaTilt.init(tiltNode1, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode2: any = tiltRef2.current;
    VanillaTilt.init(tiltNode2, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode3: any = tiltRef3.current;
    VanillaTilt.init(tiltNode3, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode4: any = tiltRef4.current;
    VanillaTilt.init(tiltNode4, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode5: any = tiltRef5.current;
    VanillaTilt.init(tiltNode5, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode6: any = tiltRef6.current;
    VanillaTilt.init(tiltNode6, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode7: any = tiltRef7.current;
    VanillaTilt.init(tiltNode7, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode8: any = tiltRef8.current;
    VanillaTilt.init(tiltNode8, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode9: any = tiltRef9.current;
    VanillaTilt.init(tiltNode9, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode10: any = tiltRef10.current;
    VanillaTilt.init(tiltNode10, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode11: any = tiltRef11.current;
    VanillaTilt.init(tiltNode11, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode12: any = tiltRef12.current;
    VanillaTilt.init(tiltNode12, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode13: any = tiltRef13.current;
    VanillaTilt.init(tiltNode13, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode14: any = tiltRef14.current;
    VanillaTilt.init(tiltNode14, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    const tiltNode15: any = tiltRef15.current;
    VanillaTilt.init(tiltNode15, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    return () => {
      tiltNode1.vanillaTilt.destroy();
      tiltNode2.vanillaTilt.destroy();
      tiltNode3.vanillaTilt.destroy();
      tiltNode4.vanillaTilt.destroy();
      tiltNode5.vanillaTilt.destroy();
      tiltNode6.vanillaTilt.destroy();
      tiltNode7.vanillaTilt.destroy();
      tiltNode8.vanillaTilt.destroy();
      tiltNode9.vanillaTilt.destroy();
      tiltNode10.vanillaTilt.destroy();
      tiltNode11.vanillaTilt.destroy();
      tiltNode12.vanillaTilt.destroy();
      tiltNode13.vanillaTilt.destroy();
      tiltNode14.vanillaTilt.destroy();
      tiltNode15.vanillaTilt.destroy();
    };
  }, []);
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Toolkit</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <article ref={tiltRef4} className="experience__details">
            <SiJavascript className="experience__details-icon" />
            <h4>JavaScript</h4>
          </article>
          <article ref={tiltRef5} className="experience__details">
            <SiTypescript className="experience__details-icon" />
            <h4>TypeScript</h4>
          </article>
          <article ref={tiltRef1} className="experience__details">
            <FaReact className="experience__details-icon" />
            <h4>React</h4>
          </article>
          <article ref={tiltRef2} className="experience__details">
            <TbBrandNextjs className="experience__details-icon" />
            <h4>Next.js</h4>
          </article>
          <article ref={tiltRef13} className="experience__details">
            <FaNodeJs className="experience__details-icon" />
            <h4>Node.js</h4>
          </article>
          <article ref={tiltRef14} className="experience__details">
            <SiExpress className="experience__details-icon" />
            <h4>Express.js</h4>
          </article>
          <article ref={tiltRef3} className="experience__details">
            <SiRedux className="experience__details-icon" />
            <h4>Redux</h4>
          </article>
          <article ref={tiltRef6} className="experience__details">
            <SiFirebase className="experience__details-icon" />
            <h4>Firebase</h4>
          </article>
          <article ref={tiltRef7} className="experience__details">
            <AiOutlineHtml5 className="experience__details-icon" />
            <h4>HTML</h4>
          </article>
          <article ref={tiltRef8} className="experience__details">
            <TbBrandCss3 className="experience__details-icon" />
            <h4>CSS</h4>
          </article>
          <article ref={tiltRef15} className="experience__details">
            <SiStorybook className="experience__details-icon" />
            <h4>Storybook</h4>
          </article>

          <article ref={tiltRef9} className="experience__details">
            <SiTailwindcss className="experience__details-icon" />
            <h4>Tailwind CSS</h4>
          </article>

          <article ref={tiltRef10} className="experience__details">
            <SiMaterialui className="experience__details-icon" />
            <h4>Material UI</h4>
          </article>

          <article ref={tiltRef11} className="experience__details">
            <img
              src={emotion}
              alt="Emotion"
              className="experience__details-img"
            />
            <h4>Emotion</h4>
          </article>
          <article ref={tiltRef12} className="experience__details">
            <BsBootstrap className="experience__details-icon" />
            <h4>Bootstrap</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
