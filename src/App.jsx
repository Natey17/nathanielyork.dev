import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <div className="rule">
          <div />
        </div>
        <Experience />
        <Projects />
        <div className="rule">
          <div />
        </div>
        <About />
      </main>
      <Footer />
    </>
  );
}
