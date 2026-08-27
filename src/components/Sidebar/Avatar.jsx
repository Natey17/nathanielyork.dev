import { motion } from "framer-motion";
import { fadeInScale } from "../../animations/variants";
import styles from "./Avatar.module.css";

export function Avatar({ src, alt, initials }) {
  return (
    <motion.div className={styles.avatar} variants={fadeInScale}>
      {src ? (
        <img className={styles.photo} src={src} alt={alt} />
      ) : (
        <span className={styles.monogram} role="img" aria-label={alt}>
          {initials}
        </span>
      )}
    </motion.div>
  );
}
