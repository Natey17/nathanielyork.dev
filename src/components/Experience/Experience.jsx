import { Section } from "../Section/Section";
import { EXPERIENCE } from "../../data/experience";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.list}>
        {EXPERIENCE.map((entry, index) => (
          <ExperienceItem key={entry.id} {...entry} defaultOpen={index === 0} />
        ))}
      </div>
    </Section>
  );
}
