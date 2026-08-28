import { FACTS } from "../../data/facts";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`sectionHead ${styles.head}`}>
        <span className="sectionNum">03</span>
        <h2 className="sectionTitle">About</h2>
      </div>

      <div className={styles.grid}>
        <div>
          <p className={styles.lead}>
            Full-stack engineering paired with applied machine learning.
          </p>
          <p className={styles.sub}>
            Focused on building and stress-testing ML systems under real-world conditions,
            not just in a notebook.
          </p>

          <p className={styles.sub}>
            My background includes full-stack software development, applied machine
            learning, and API-driven automation. I thrive in fast-paced environments that
            demand quick problem-solving, from a startup team shipping to real users to
            research pipelines built to catch their own mistakes. Lately my work has
            centered on real-world applications of machine learning, and I&rsquo;m drawn to
            keep applying those skills in domains where the technical challenges are still
            unsettled.
          </p>
        </div>

        <div className={styles.facts}>
          {FACTS.map((f) => (
            <div key={f.k} className={styles.fact}>
              <span className={styles.factKey}>{f.k}</span>
              <span className={styles.factVal}>{f.v}</span>
            </div>
          ))}
          <div className={styles.endRule} />
        </div>
      </div>
    </section>
  );
}
