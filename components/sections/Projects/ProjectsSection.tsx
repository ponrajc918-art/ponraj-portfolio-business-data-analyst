import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCase } from "@/components/sections/Projects/ProjectCase";
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Three end-to-end AI/ML systems — from raw data to a decision a person can act on."
        />

        <div className="mt-16 flex flex-col gap-24 sm:gap-32">
          {PROJECTS.map((project, i) => (
            <ProjectCase key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
