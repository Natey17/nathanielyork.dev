import { useState } from "react";
import { EXPERIENCE } from "../../data/experience";
import styles from "./Experience.module.css";

export function Experience() {
  const [open, setOpen] = useState({});
  const [hover, setHover] = useState(null);

  return (
    <section id="experience" className={styles.section}>
      <div className="sectionHead">
        <span className="sectionNum">01</span>
        <h2 className="sectionTitle">Experience</h2>
        <span className="sectionMeta">
          {String(EXPERIENCE.length).padStart(2, "0")} roles · click to expand
        </span>
      </div>

      {EXPERIENCE.map((job) => {
        const isOpen = !!open[job.id];
        const hot = isOpen || hover === job.id;
        return (
          <article
            key={job.id}
            className={`${styles.row} ${hot ? styles.rowHot : ""}`}
            onMouseEnter={() => setHover(job.id)}
            onMouseLeave={() => setHover((h) => (h === job.id ? null : h))}
          >
            <button
              type="button"
              className={styles.head}
              aria-expanded={isOpen}
              onClick={() => setOpen((o) => ({ ...o, [job.id]: !o[job.id] }))}
            >
              <span className={styles.num}>{job.num}</span>
              <span className={styles.logo}>
                <img src={job.logo} alt="" />
              </span>
              <span className={`${styles.titles} ${hover === job.id && !isOpen ? styles.shift : ""}`}>
                <span className={styles.company}>{job.company}</span>
                <span className={styles.role}>
                  {job.role} · {job.location}
                </span>
              </span>
              <span className={styles.dates}>{job.dates}</span>
              <span className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}>
                <i className="ph ph-plus" aria-hidden="true" />
              </span>
            </button>

            <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
              <div className={styles.panelInner}>
                <div>
                  <p className={styles.label}>Stack</p>
                  {job.stack ? (
                    <ul className={styles.tags}>
                      {job.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.dash}>—</p>
                  )}
                </div>
                <ul className={styles.bullets}>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
      <div className={styles.endRule} />
    </section>
  );
}
