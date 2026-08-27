import { MotionConfig } from "framer-motion";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { EASE_STANDARD } from "./animations/variants";
import styles from "./App.module.css";

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE_STANDARD }}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className={styles.layout}>
        <Sidebar />
        <main id="main-content" className={styles.main}>
          <Experience />
          <Projects />
        </main>
      </div>
      <Footer />
    </MotionConfig>
  );
}

export default App;
