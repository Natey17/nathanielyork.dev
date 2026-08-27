import { MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { EASE_STANDARD } from "./animations/variants";

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE_STANDARD }}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
