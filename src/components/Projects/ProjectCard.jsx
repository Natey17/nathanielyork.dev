import { useId, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/variants";
import { ChevronIcon } from "../ChevronIcon";
import styles from "./Projects.module.css";

export function ProjectCard({
  name,
  subtitle,
  dates,
  stack,
  bullets,
  link,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <motion.article
      className={styles.card}
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.titleGroup}>
          <span className={styles.name}>{name}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </span>
        <span className={styles.metaGroup}>
          <span className={styles.meta}>{dates}</span>
          <ChevronIcon open={isOpen} />
        </span>
      </button>
      <motion.div
        id={panelId}
        className={styles.panel}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className={styles.stack}>
          {stack.map((item) => (
            <li key={item} className={styles.tag}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles.bullets}>
          {bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project ↗
          </a>
        )}
      </motion.div>
    </motion.article>
  );
}
