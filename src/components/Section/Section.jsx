import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../../animations/variants";
import styles from "./Section.module.css";

export function Section({ id, title, children }) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <motion.h2
          id={headingId}
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {title}
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
