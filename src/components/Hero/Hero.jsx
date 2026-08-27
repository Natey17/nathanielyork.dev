import { motion } from "framer-motion";
import { fadeInUp, fadeInScale, staggerContainer } from "../../animations/variants";
import styles from "./Hero.module.css";

export function Hero({ photo }) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.1, 0.1)}
      >
        <div>
          <motion.p className={styles.eyebrow} variants={fadeInUp}>
            Software Engineer
          </motion.p>
          <motion.h1 className={styles.headline} variants={fadeInUp}>
            Nathaniel
            <br />
            York
          </motion.h1>
          <motion.p className={styles.tagline} variants={fadeInUp}>
            Computer Science student at UC Davis, currently interning as a
            Software Engineer at Kaleon, building a transfer-planning
            platform for community college students.
          </motion.p>
          <motion.div className={styles.actions} variants={fadeInUp}>
            <a className={styles.primaryButton} href="#projects">
              View Projects ↗
            </a>
            <a
              className={styles.secondaryButton}
              href="/Nathaniel-York-Resume.pdf"
              download
            >
              Download Resume ↓
            </a>
          </motion.div>
        </div>
        <motion.div className={styles.photoWrap} variants={fadeInScale}>
          <div className={styles.photo}>
            {photo ? (
              <img className={styles.photoImg} src={photo} alt="Nathaniel York" />
            ) : (
              <span className={styles.monogram} aria-hidden="true">
                NY
              </span>
            )}
          </div>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Open to opportunities
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
