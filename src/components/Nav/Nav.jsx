import { LINKS } from "../../data/links";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <span className={styles.mark}>NY</span>
        <div className={styles.links}>
          <a className={styles.link} href="#experience">
            Experience
          </a>
          <a className={styles.link} href="#projects">
            Projects
          </a>
        </div>
        <a className={styles.cta} href={`mailto:${LINKS.email}`}>
          Contact ↗
        </a>
      </div>
    </nav>
  );
}
