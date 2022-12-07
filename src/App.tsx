import { useRef, useEffect, useState } from 'react';
import './App.css';

import About from './components/about/about';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';

import { scrolledComponent } from './helper/scrolled';

function App() {
  
  const headerRef = useRef<HTMLTableSectionElement>(null);
  const aboutRef = useRef<HTMLTableSectionElement>(null);
  const experienceRef = useRef<HTMLTableSectionElement>(null);
  const portfolioRef = useRef<HTMLTableSectionElement>(null);
  // const testimonialsRef = useRef<HTMLTableSectionElement>(null);
  const contactRef = useRef<HTMLTableSectionElement>(null);
  const footerRef = useRef<HTMLTableSectionElement>(null);


	useEffect(() => {
		window.addEventListener("scroll", scrollBehavior);
		return () => {
			window.removeEventListener("scroll", scrollBehavior);
		};
	}, []);

	const scrollBehavior = () => {
    const posHeader= headerRef.current?.offsetTop as number;
    const posAbout= aboutRef.current?.offsetTop as number;
    const posExperience= experienceRef.current?.offsetTop as number;
    const posPortfolio= portfolioRef.current?.offsetTop as number;
    // const posTestimonials= testimonialsRef.current?.offsetTop as number;
    const posContact= contactRef.current?.offsetTop as number;
    const posFooter= footerRef.current?.offsetTop as number;

    if (
			window.scrollY + window.innerHeight > posHeader &&
      window.scrollY + window.innerHeight < posAbout
		) {
      setScrolled("#header");
    }
		else if (
			window.scrollY + window.innerHeight > posAbout &&
      window.scrollY + window.innerHeight < posExperience
		) setScrolled("#about");
    else if ( window.scrollY + window.innerHeight > posExperience && 
      window.scrollY + window.innerHeight < posPortfolio
      ) setScrolled('#experience');
      else if ( window.scrollY + window.innerHeight > posPortfolio && 
        window.scrollY + window.innerHeight < posContact
        ) setScrolled('#portfolio');
          else if ( window.scrollY + window.innerHeight > posContact &&
            window.scrollY + window.innerHeight < posFooter 
            ) setScrolled('#contact');
            else if( window.scrollY + window.innerHeight -80 > posFooter)  setScrolled('footer');
	};

  const [scrolled, setScrolled] = useState('#header');

  return (
    <scrolledComponent.Provider value={{scrolled,setScrolled}}>
    <div ref={headerRef}>
      <Header/>
    </div>

    <Nav />

    <div ref={aboutRef}>
      <About />
    </div>

    <div ref={experienceRef}>
      <Experience />
    </div>

    <div ref={portfolioRef}>
      <Portfolio />
    </div>

    {/* <div ref={testimonialsRef}>
      <Testimonials />
    </div> */}

    <div ref={contactRef}>
      <Contact />
    </div>

    <div ref={footerRef}>
      <Footer />
    </div>
    </scrolledComponent.Provider>
  );
}

export default App;
