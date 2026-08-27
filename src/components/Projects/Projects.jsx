import { useState } from "react";
import { PROJECTS } from "../../data/projects";
import { LINKS } from "../../data/links";
import styles from "./Projects.module.css";

export function Projects() {
  const [hover, setHover] = useState(null);

  return (
    <section id="projects" className={styles.section}>
      <div className={`sectionHead ${styles.head}`}>
        <span className="sectionNum">02</span>
        <h2 className="sectionTitle">Projects</h2>
        <span className="sectionMeta">
          {String(PROJECTS.length).padStart(2, "0")} builds
        </span>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className={`${styles.card} ${hover === p.id ? styles.cardHot : ""}`}
            onMouseEnter={() => setHover(p.id)}
            onMouseLeave={() => setHover((h) => (h === p.id ? null : h))}
          >
            <div className={`${styles.preview} ${p.preview ? "" : "slot"}`}>
              <span className={styles.badge}>Solo developer</span>
              {p.preview ? (
                <img src={p.preview} alt="" />
              ) : (
                <span className={styles.previewLabel}>16:9 preview</span>
              )}
            </div>

            <div className={styles.body}>
              <div className={styles.titleRow}>
                {p.icon ? (
                  <span className={styles.icon}>
                    <img src={p.icon} alt="" />
                  </span>
                ) : null}
                <h3 className={styles.name}>{p.name}</h3>
              </div>

              <p className={styles.tagline}>{p.tagline}</p>

              <ul className={styles.tags}>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className={styles.actions}>
                <a
                  href={p.url}
                  target={p.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.primary}
                >
                  <i className="ph ph-globe" aria-hidden="true" />
                  Website
                </a>
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondary}
                  >
                    <i className="ph ph-github-logo" aria-hidden="true" />
                    GitHub
                  </a>
                ) : (
                  <span className={`${styles.secondary} ${styles.disabled}`}>
                    <i className="ph ph-github-logo" aria-hidden="true" />
                    GitHub
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}

        <div className={styles.soon}>
          <span className={styles.soonLabel}>
            <span className={styles.tick} aria-hidden="true" />
            In progress
          </span>
          <span className={styles.soonTitle}>Coming soon</span>
          <span className={styles.soonBody}>Next build in the works.</span>
        </div>
      </div>

      <p className={styles.more}>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
          Everything else on github.com/Natey17{" "}
          <i className="ph ph-arrow-up-right" aria-hidden="true" />
        </a>
      </p>
    </section>
  );
}
