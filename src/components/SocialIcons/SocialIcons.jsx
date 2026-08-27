import { LINKS } from "../../data/links";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";
import styles from "./SocialIcons.module.css";

const ITEMS = [
  { href: LINKS.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: LINKS.email, label: "Email", Icon: EmailIcon, external: false },
];

export function SocialIcons() {
  return (
    <ul className={styles.list}>
      {ITEMS.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className={styles.link}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
