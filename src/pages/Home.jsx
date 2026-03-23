import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Certifications from "../components/Certifications";
import Internships from  "../components/Internships";
import Research from  "../components/Research";
import Footer from "../components/Footer";
import Languages from "../components/Languages";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships/>
      <Research/>
      <Education />
      <Certifications/>
      <Languages/>
      <Contact />
      <Footer/>

    </>
  );
};

export default Home;