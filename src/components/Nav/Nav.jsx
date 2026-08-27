import { LINKS } from "../../data/links";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.dot} aria-hidden="true" />
          NY
        </a>
        <div className={styles.links}>
          <a href="#experience" className={styles.link}>
            Experience
          </a>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href={LINKS.email} className={styles.contact}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
