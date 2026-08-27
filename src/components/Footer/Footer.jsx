import { SocialIcons } from "../SocialIcons/SocialIcons";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>
          Nathaniel York © {year}
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
