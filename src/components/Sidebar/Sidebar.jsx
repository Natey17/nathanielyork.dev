import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <motion.header
      className={styles.sidebar}
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.1, 0.1)}
    >
      <div className={styles.avatarWrap}>
        <Avatar alt="Nathaniel York" initials="NY" />
      </div>
      <motion.p className={styles.eyebrow} variants={fadeInUp}>
        Software Engineer
      </motion.p>
      <motion.h1 className={styles.name} variants={fadeInUp}>
        Nathaniel York
      </motion.h1>
      <motion.p className={styles.tagline} variants={fadeInUp}>
        Computer Science student at UC Davis, currently interning as a
        Software Engineer at Kaleon, building a transfer-planning platform
        for community college students.
      </motion.p>
      <motion.nav
        className={styles.nav}
        variants={fadeInUp}
        aria-label="Section navigation"
      >
        <a className={styles.navLink} href="#experience">
          Experience
        </a>
        <a className={styles.navLink} href="#projects">
          Projects
        </a>
      </motion.nav>
      <motion.div variants={fadeInUp}>
        <SocialIcons />
      </motion.div>
    </motion.header>
  );
}
