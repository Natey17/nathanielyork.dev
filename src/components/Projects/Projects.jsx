import { Section } from "../Section/Section";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
