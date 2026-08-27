import { useId, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/variants";
import { ChevronIcon } from "../ChevronIcon";
import styles from "./Experience.module.css";

export function ExperienceItem({
  role,
  company,
  location,
  dates,
  stack,
  bullets,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <motion.article className={styles.item} variants={fadeInUp}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.triggerText}>
          <span className={styles.role}>
            {role} <span className={styles.company}>— {company}</span>
          </span>
          <span className={styles.meta}>
            {location} · {dates}
          </span>
        </span>
        <ChevronIcon open={isOpen} />
      </button>
      {stack && (
        <ul className={styles.stack}>
          {stack.map((item) => (
            <li key={item} className={styles.tag}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <motion.div
        id={panelId}
        className={styles.panel}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className={styles.bullets}>
          {bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  );
}
