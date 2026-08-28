import { LINKS } from "../../data/links";
import { PROJECTS } from "../../data/projects";
import { GitHubIcon, LinkedInIcon } from "../SocialIcons/icons";
import styles from "./Hero.module.css";

// flip to true once /headshot.jpg exists in public/
const HAS_HEADSHOT = false;

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.meta}>
        <p className={styles.kicker}>Software Engineer · UC Davis CS '27</p>
        <p className={styles.status}>
          <span className={styles.pip} aria-hidden="true" />
          Open to internship &amp; new-grad roles
        </p>
      </div>

      <div className={styles.top}>
        <h1 className={styles.name}>
          NATHANIEL
          <br />
          <span className={styles.lastLine}>
            YORK
            <span className={styles.place}>Davis, CA</span>
          </span>
        </h1>

        <div className={styles.portrait}>
          {HAS_HEADSHOT ? (
            <img src="/headshot.jpg" alt="Nathaniel York" className={styles.photo} />
          ) : (
            <div className={`${styles.photoSlot} slot`}>
              <span>Coming soon</span>
            </div>
          )}
        </div>

        <div className={styles.work}>
          <p className={styles.workLabel}>
            <span className={styles.tick} aria-hidden="true" />
            My work
          </p>
          {PROJECTS.map((p) => (
            <a key={p.id} href="#projects" title={p.name} className={styles.workSlot}>
              {p.icon ? <img src={p.icon} alt="" /> : null}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.bottom}>
        <p className={styles.intro}>
          Computer Science student at UC Davis, currently interning as a Software Engineer
          at Kaleon, building a transfer-planning platform for community college students.
        </p>
        <div className={styles.actions}>
          <a href={LINKS.resume} download className={styles.resume}>
            Resume <i className="ph ph-arrow-down" aria-hidden="true" />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.iconBtn}
          >
            <GitHubIcon />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.iconBtn}
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
