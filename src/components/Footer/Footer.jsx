import { LINKS } from "../../data/links";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <p className={styles.headline}>Let's build something great</p>
        <div className={styles.ctaRight}>
          <p className={styles.ctaText}>
            Open to software engineering internship and new-grad
            opportunities — feel free to reach out.
          </p>
          <a className={styles.ctaButton} href={`mailto:${LINKS.email}`}>
            Get In Touch ↗
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>Nathaniel York © {year}</p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
