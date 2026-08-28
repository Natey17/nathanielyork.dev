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
            What pulled me into this work wasn&rsquo;t a single &ldquo;aha&rdquo; moment. It
            was noticing how much of a difference the right tool makes for someone who&rsquo;s
            stuck. At Kaleon that&rsquo;s a community college student trying to figure out if
            their credits transfer. At Design Hub it was teaching myself just enough
            automation to save a club a few hours a week. Small stakes, real relief.
          </p>
          <p className={styles.sub}>
            I like the parts of software that touch people directly: UX details,
            accessibility, the stuff that&rsquo;s easy to skip and obvious when it&rsquo;s
            missing. Statistics and backend work are where I spend most of my time, but
            that&rsquo;s the reason I care whether it&rsquo;s right.
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
