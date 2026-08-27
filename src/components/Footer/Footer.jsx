import { LINKS } from "../../data/links";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.kicker}>Get in touch</p>
        <a href={LINKS.email} className={styles.email}>
          {LINKS.emailPlain}
        </a>
        <p className={styles.note}>
          Open to software engineering internship and new-grad opportunities — feel free to
          reach out.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>Nathaniel York © {new Date().getFullYear()}</p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
