import { Section } from "../Section/Section";
import { EXPERIENCE } from "../../data/experience";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.list}>
        {EXPERIENCE.map((entry) => (
          <ExperienceItem key={entry.id} {...entry} />
        ))}
      </div>
    </Section>
  );
}
