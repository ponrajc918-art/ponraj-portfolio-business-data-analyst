import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVideo } from "@/components/sections/Projects/ProjectVideo";
import { ProjectVisualPlaceholder } from "@/components/sections/Projects/ProjectVisualPlaceholder";
import type { Project } from "@/lib/data";

export function ProjectCase({ project, index }: { project: Project; index: number }) {
  const mediaFirst = project.layout === "text-right";

  return (
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
      <div
        className={`lg:col-span-7 ${
          mediaFirst ? "order-2 lg:order-2" : "order-2 lg:order-1"
        }`}
      >
        <Reveal>
          <span className="font-mono text-xs text-muted-2">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-2xl font-semibold text-text sm:text-3xl">{project.name}</h3>
          <p className="mt-1 text-gold-soft">{project.tagline}</p>

          <div className="mt-6 space-y-4 text-muted">
            <p className="leading-relaxed">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-2">Problem — </span>
              {project.problem}
            </p>
            <p className="leading-relaxed">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-2">Solution — </span>
              {project.solution}
            </p>
          </div>

          <ul className="mt-6 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-gold/60" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-transform hover:scale-[1.03]"
              >
                Live Demo <ArrowUpRight className="size-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text transition-colors hover:border-gold/40"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
            )}
          </div>
        </Reveal>
      </div>

      <div className={`lg:col-span-5 ${mediaFirst ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
        {project.video ? (
          <ProjectVideo video={project.video} name={project.name} />
        ) : (
          <ProjectVisualPlaceholder name={project.name} />
        )}
      </div>
    </div>
  );
}
