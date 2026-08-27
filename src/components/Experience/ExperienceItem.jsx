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
  logo,
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
        <span className={styles.triggerMain}>
          <span className={logo ? styles.logo : styles.logoPlaceholder}>
            {logo ? (
              <img className={styles.logoImg} src={logo} alt="" />
            ) : (
              <span aria-hidden="true">{company.charAt(0)}</span>
            )}
          </span>
          <span className={styles.triggerText}>
            <span className={styles.company}>{company}</span>
            <span className={styles.role}>{role}</span>
            <span className={styles.location}>{location}</span>
          </span>
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
        {stack && (
          <ul className={styles.stack}>
            {stack.map((item) => (
              <li key={item} className={styles.tag}>
                {item}
              </li>
            ))}
          </ul>
        )}
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
