import { LINKS } from "../../data/links";
import styles from "./SocialIcons.module.css";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function SocialIcons() {
  return (
    <ul className={styles.list}>
      <li>
        <a
          className={styles.link}
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          className={styles.link}
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a className={styles.link} href={`mailto:${LINKS.email}`} aria-label="Email">
          <MailIcon />
        </a>
      </li>
    </ul>
  );
}
